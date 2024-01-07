using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Addresses_Api.Models;

namespace Addresses_Api.Data
{
    public class Addresses_ApiContext : DbContext
    {
        public Addresses_ApiContext (DbContextOptions<Addresses_ApiContext> options)
            : base(options)
        {
        }

        public DbSet<Addresses_Api.Models.Address> Address { get; set; } = default!;
    }
}
