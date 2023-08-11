using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CartApi.Data;
using CartApi.Models;
using CartApi.Repository;

namespace CartApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartsController : ControllerBase
    {
        private readonly ICartRepository  _irepo;

        public CartsController(ICartRepository irepo)
        {
            _irepo = irepo;
        }

        // GET: api/Carts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CartIO>>> GetCart()
        {
            return _irepo.GetAllCarts();
        }

        // POST: api/Carts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ActionResult<CartIO> PostCart(CartIO cart)
        {
            return _irepo.AddCart(cart);
            
        }

        // DELETE: api/Carts/5
        [HttpDelete("delete")]
        public async Task<ActionResult<CartIO>> DeleteCart(string username,int id)
        {
            return _irepo.DeleteCart(username,id);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateQuantity(string username,int index,int value)
        {
            _irepo.UpdateQuantity(username, index, value);
            return Ok(new
            {
                Message = "Quantity Updated ",
              
            });
        }
    }
}
