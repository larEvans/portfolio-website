// Models/Resume.cs
namespace PortfolioBackend.Models
{
    public class Index
    {
        public int Id { get; set; }
        public string FilePath { get; set; } // URL to your resume file
        public string Description { get; set; }
    }
}