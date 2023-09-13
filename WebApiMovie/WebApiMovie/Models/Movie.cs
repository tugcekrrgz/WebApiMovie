using System.ComponentModel.DataAnnotations;

namespace WebApiMovie.Models
{
    public class Movie
    {
        public int Id { get; set; }

        [Required(ErrorMessage ="Başlık boş geçilemez!")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Açıklama boş geçilemez!")]
        public string Description { get; set; }
        
        public int Rank { get; set; }
    }
}
