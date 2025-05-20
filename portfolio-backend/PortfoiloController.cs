// Controllers/PortfolioController.cs
using Microsoft.AspNetCore.Mvc;
using PortfolioBackend.Models;
using System.Collections.Generic;

namespace PortfolioBackend.Controllers
{//this si a work in progress
    [Route("api/[controller]")]
    [ApiController]
    public class PortfolioController : ControllerBase
    {
        private static List<Project> projects = new List<Project>
        {
            new Project { Id = 1, Title = "Connected Devices Project", Description = "A project for managing connected devices.", Link = "https://github.com/yourusername/connected-devices", Technologies = "C#, .NET, React" },
            // Add more projects as needed
        };

        private static Resume resume = new Resume
        {
            Id = 1,
            FilePath = "resume.pdf",
            Description = "Software Engineer with expertise in full-stack development."
        };

        [HttpGet("projects")]
        public ActionResult<IEnumerable<Project>> GetProjects()
        {
            return Ok(projects);
        }

        [HttpGet("resume")]
        public ActionResult<Resume> GetResume()
        {
            return Ok(resume);
        }
    }
}
