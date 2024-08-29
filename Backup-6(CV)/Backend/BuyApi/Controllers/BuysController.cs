using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BuyApi.Data;
using BuyApi.Models;
using BuyApi.Repository;

namespace BuyApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuysController : ControllerBase
    {
        private readonly IBuyRepository _irepo;

        public BuysController(IBuyRepository irepo)
        {
            _irepo = irepo;
        }

        // GET: api/Buys
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Buy>>> GetBuy()
        {
            return _irepo.GetAll();
        }



        // PUT: api/Buys/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<ActionResult<Buy>> PutBuy(Buy buy)
        {
            return _irepo.UpdateBuy(buy);
        }

        // POST: api/Buys
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Buy>> PostBuy(Buy buy)
        {

            //Orderid Generation Using GUID
            Guid newGuid = Guid.NewGuid();
            byte[] guidBytes = newGuid.ToByteArray();

            string base64Guid = Convert.ToBase64String(guidBytes);
            string shortGuid = base64Guid.Substring(0, base64Guid.Length - 2);
            buy.Orderid = shortGuid;

            //OrderTime 
            DateTime indianTime = TimeZoneInfo.ConvertTimeBySystemTimeZoneId(DateTime.Now, "India Standard Time");
            buy.OrderPlacedTime = indianTime;
            buy.StatusTime = indianTime;


            return await _irepo.AddAsync(buy);
        }

        // DELETE: api/Buys/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> DeleteBuy(int id)
        {
            return _irepo.DeleteBuy(id);
        }

        // GET: api/Buys
        [HttpGet]
        [Route("IsFirstOrder")]
        public async Task<ActionResult<bool>> Get(string userName)
        {
            return _irepo.IsFirstOrder(userName);
        }


    }
}
