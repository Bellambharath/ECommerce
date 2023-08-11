using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Addresses_Api.Data;
using Addresses_Api.Models;
using Addresses_Api.Repository;

namespace Addresses_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressesController : ControllerBase
    {
        private readonly IAddressRepo _repo;

        public AddressesController(IAddressRepo repo)
        {
            _repo = repo;
        }

        // GET: api/Addresses
        [HttpGet]
        public  ActionResult<IEnumerable<Address>> GetAddress()
        {
            return  _repo.GetAddress();
        }

        

        // PUT: api/Addresses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<ActionResult<Address>> PutAddress(Address address)
        {
            
            return await _repo.EditAddress(address);
        }

        // POST: api/Addresses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Address>> PostAddress(Address address)
        {
            return await _repo.AddAddress(address);
        }
        [HttpPut("default")]
        public async Task<ActionResult<bool>> UpdateDefaultAddress(int oldid,int newid)
        {
            return await _repo.UpdateDefaultAddress(oldid,newid);
        }


        // DELETE: api/Addresses/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> DeleteAddress(int id)
        {
            return await _repo.DeleteAddress(id);
        }

        
    }
}
