using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Addresses_Api.Data;
using Addresses_Api.Repository;

namespace Addresses_Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddDbContext<Addresses_ApiContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("Addresses_ApiContext") ?? throw new InvalidOperationException("Connection string 'Addresses_ApiContext' not found.")));

            // Add services to the container.
            builder.Services.AddTransient<IAddressRepo, AddressRepo>();
            var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

            builder.Services.AddCors(options =>
            {

                options.AddPolicy(name: MyAllowSpecificOrigins,
                    policy =>
                    {
                        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                    });
            });


            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseCors(MyAllowSpecificOrigins);

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}