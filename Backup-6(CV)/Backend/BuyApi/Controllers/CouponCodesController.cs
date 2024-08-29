using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BuyApi.Data;
using BuyApi.Models;

namespace BuyApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CouponCodesController : ControllerBase
    {
        private readonly BuyApiContext _context;

        public CouponCodesController(BuyApiContext context)
        {
            _context = context;
        }

        // GET: api/CouponCodes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CouponCodes>>> GetCouponCodes()
        {
            return await _context.CouponCodes.ToListAsync();
        }

        // GET: api/CouponCodes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CouponCodes>> GetCouponCodes(int id)
        {
            var couponCodes = await _context.CouponCodes.FindAsync(id);

            if (couponCodes == null)
            {
                return NotFound();
            }

            return couponCodes;
        }

        // PUT: api/CouponCodes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCouponCodes(int id, CouponCodes couponCodes)
        {
            if (id != couponCodes.CouponId)
            {
                return BadRequest();
            }

            _context.Entry(couponCodes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CouponCodesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CouponCodes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CouponCodes>> PostCouponCodes(CouponCodes couponCodes)
        {
            _context.CouponCodes.Add(couponCodes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCouponCodes", new { id = couponCodes.CouponId }, couponCodes);
        }

        // DELETE: api/CouponCodes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCouponCodes(int id)
        {
            var couponCodes = await _context.CouponCodes.FindAsync(id);
            if (couponCodes == null)
            {
                return NotFound();
            }

            _context.CouponCodes.Remove(couponCodes);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CouponCodesExists(int id)
        {
            return _context.CouponCodes.Any(e => e.CouponId == id);
        }
    }
}
