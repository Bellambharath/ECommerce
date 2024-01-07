using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using LoginApi.Models;

namespace LoginApi.Data
{
    public class LoginApiContext : DbContext
    {
        public LoginApiContext (DbContextOptions<LoginApiContext> options)
            : base(options)
        {
        }

        public DbSet<LoginApi.Models.Login> Login { get; set; } = default!;
    }
}
