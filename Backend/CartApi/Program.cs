using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using CartApi.Data;
using CartApi.Repository;

namespace CartApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddDbContext<CartApiContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("CartApiContext") ?? throw new InvalidOperationException("Connection string 'CartApiContext' not found.")));

            // Add services to the container.
            builder.Services.AddTransient<ICartRepository, CartRepository>();
            var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";


            builder.Services.AddCors(options =>
            {
                //options.AddPolicy(name: MyAllowSpecificOrigins,
                //    policy =>
                //    {
                //        policy.WithOrigins("http://example.com", "http://www.contoso.com");
                //    });
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