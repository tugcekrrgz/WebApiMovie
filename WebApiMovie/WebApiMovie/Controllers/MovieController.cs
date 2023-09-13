using Microsoft.AspNetCore.Mvc;
using WebApiMovie.Models;
using WebApiMovie.Repositories;

namespace WebApiMovie.Controllers
{
    public class MovieController : ControllerBase
    {
        private readonly IMovieRepository _movieRepository;

        public MovieController(IMovieRepository movieRepository)
        {
           _movieRepository = movieRepository;
        }
        public IActionResult GetMovies()
        {
            var movies=_movieRepository.GetMovies();
            return Ok(movies);
        }

        [HttpPost]
        public IActionResult CreateMovie(Movie movie)
        {
            var result=_movieRepository.AddMovie(movie);
            if (result == StatusMessage.Ok)
            {
                return Ok();
            }
            else
            {
                return BadRequest(result);
            }
        }
    }
}
