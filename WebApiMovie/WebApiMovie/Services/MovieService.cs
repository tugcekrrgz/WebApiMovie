using WebApiMovie.Models;
using WebApiMovie.Models.Context;
using WebApiMovie.Repositories;

namespace WebApiMovie.Services
{
    public class MovieService : IMovieRepository
    {
        private readonly MovieContext _context;

        public MovieService(MovieContext context)
        {
            _context = context;
        }

        public StatusMessage AddMovie(Movie movie)
        {            
            try
            {
                _context.Movies.Add(movie);
                _context.SaveChanges();
                return StatusMessage.Ok;
            }
            catch (Exception ex)
            {
                return StatusMessage.BadRequest;
            }
        }

        public StatusMessage DeleteMovie(int id)
        {
            var movie = _context.Movies.Find(id);
            if (movie == null)
            {
                return StatusMessage.NotFound;
            }
            else
            {
                _context.Movies.Remove(movie);
                _context.SaveChanges();
                return StatusMessage.Ok;
            }
        }

        public List<Movie> GetMovies()
        {
            return _context.Movies.ToList();
        }

        public Movie SearchMovie(string movieName)
        {
            throw new NotImplementedException();
        }

        public StatusMessage UpdateMovie(Movie movie)
        {
            throw new NotImplementedException();
        }
    }
}
