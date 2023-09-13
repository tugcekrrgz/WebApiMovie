using Microsoft.EntityFrameworkCore;

namespace WebApiMovie.Models.Context
{
    public class MovieContext:DbContext
    {
        public MovieContext(DbContextOptions<MovieContext> options):base(options) 
        { 
        }

        public DbSet<Movie> Movies { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            List<Movie> movies = new List<Movie>
            {
                new Movie{Id=1,Title="Matrix",Description="Matrix Description", Rank=90},
                new Movie{Id=2,Title="The Godfather",Description="The Godfather Description", Rank=95}
            };


            modelBuilder.Entity<Movie>().HasData(movies);

            base.OnModelCreating(modelBuilder);
        }
    }
}
