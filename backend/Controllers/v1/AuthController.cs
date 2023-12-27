using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Controllers.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private const string ACTION = "[action]";
        
        public AuthController()
        {
            
        }

        [HttpPost(ACTION)]
        public IActionResult Register ([FromBody] User user)
        {
            return Ok(new {
                result = "OK" ,
                message = "register successfully" ,
                user
            });
        }
        

    }
}