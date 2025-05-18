// Models/Project.cs
namespace PortfolioBackend.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Link { get; set; } // URL to project demo or GitHub repo
        public string Technologies { get; set; }
    }
}


