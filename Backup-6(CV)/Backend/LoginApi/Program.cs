using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using LoginApi.Data;
using LoginApi.Repository;

namespace LoginApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddDbContext<LoginApiContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("LoginApiContext") ?? throw new InvalidOperationException("Connection string 'LoginApiContext' not found.")));

            // Add services to the container.
            builder.Services.AddTransient<ILoginRepository, LoginRepository>();
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