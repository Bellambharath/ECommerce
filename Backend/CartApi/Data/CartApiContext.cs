using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CartApi.Models;

namespace CartApi.Data
{
    public class CartApiContext : DbContext
    {
        public CartApiContext (DbContextOptions<CartApiContext> options)
            : base(options)
        {
        }

        public DbSet<CartApi.Models.Cart> Cart { get; set; } = default!;
    }
}
