using Microsoft.EntityFrameworkCore;
using WebApiMovie.Models.Context;
using WebApiMovie.Repositories;
using WebApiMovie.Services;

var builder = WebApplication.CreateBuilder(args);

//API
builder.Services.AddControllers();

//DbContext
builder.Services.AddDbContext<MovieContext>
    (options => options.UseSqlServer
    (builder.Configuration.GetConnectionString("DefaultConnection")));

//Services

builder.Services.AddScoped<IMovieRepository, MovieService>();


var app = builder.Build();

app.UseRouting();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "ApiRoute",
        pattern: "api/{controller}/{action}/{id?}"
        );
});

app.Run();
