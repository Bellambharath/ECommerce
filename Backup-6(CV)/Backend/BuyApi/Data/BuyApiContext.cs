using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BuyApi.Models;

namespace BuyApi.Data
{
    public class BuyApiContext : DbContext
    {
        public BuyApiContext (DbContextOptions<BuyApiContext> options)
            : base(options)
        {
        }

        public DbSet<BuyApi.Models.Buy> Buy { get; set; } = default!;
    }
}
