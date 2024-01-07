using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductsApi.Data;
using ProductsApi.Models;
using ProductsApi.Repository;

namespace ProductsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductsRepo  _repo;

        public ProductsController(IProductsRepo irepo)
        {
            _repo = irepo;
        }

        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Products>>> GetProducts()
        {
            return  _repo.GetAllProducts();

        }

        
        [HttpPut("{id}")]
        
        public async Task<ActionResult<Products>> UpdateStock(Products products)
        {
            return _repo.UpdateStock(products);
        }
        
        
        [HttpPut]
        [Route("Details")]
        public async Task<ActionResult<Products>> UpdateDetails(Products products)
        {
            return _repo.Updateproducts(products);
        }


        [HttpPut]
        [Route("Rating")]
        public async Task<ActionResult<Boolean>> UpdateRating(Rating rating)
        {
           
            return _repo.UpdateRating(rating);
        }



        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Products>> PostProducts(Products products)
        {
           return _repo.AddProducts(products);
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> DeleteProducts(int id)
        {
           return _repo.DeleteProducts(id);
        }
        [HttpGet("check")]
        public async Task<IActionResult> Abc()
        {
            return Ok(new
            {
            
                Message = "Login Successful",
                
            });
        }
       
    }
}
