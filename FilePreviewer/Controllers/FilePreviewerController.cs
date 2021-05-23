using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FilePreviewer.Controllers
{
    public class FilePreviewerController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}