using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TRD2022.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OpenPositionsController : Controller
    {
        [HttpGet]
        public ActionResult GetOpenPositions()
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        [Route("single")]
        public ActionResult GetOpenPosition(string symbol)
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
