using WebApiMovie.Models;

namespace WebApiMovie.Repositories
{
    public interface IMovieRepository
    {
        List<Movie> GetMovies();

        StatusMessage AddMovie(Movie movie);

        StatusMessage UpdateMovie(Movie movie);

        StatusMessage DeleteMovie(int id);

        Movie SearchMovie(string movieName);
    }
}
