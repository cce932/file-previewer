using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FilePreviewer.Controllers
{
    public class FileInputController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.SidebarItems = new Dictionary<string, string>()
            {
                {"Basic", "Basic Usage" },
                {"Advanced", "Advanced Usage" },
                {"Ajax", "Ajax Uploads" },
            };
            return View();
        }
        public ActionResult Basic()
        {
            ViewBag.SidebarItems = new Dictionary<string, string>();
            string ActionName = "Basic";
            string ActionDescription = "Basic Example";
            int length = 9;
            for(int i = 1; i <= length; i++)
            {
                ViewBag.SidebarItems.Add(ActionName + i.ToString(), ActionDescription + " " + i.ToString());
            }
            return View();
        }
        public ActionResult Advanced()
        {
            ViewBag.SidebarItems = new Dictionary<string, string>();
            string ActionName = "Advanced";
            string ActionDescription = "Advanced Example";
            int length = 11;
            for (int i = 1; i <= length; i++)
            {
                ViewBag.SidebarItems.Add(ActionName + i.ToString(), ActionDescription + " " + i.ToString());
            }
            return View();
        }
        public ActionResult Ajax()
        {
            ViewBag.SidebarItems = new Dictionary<string, string>();
            string ActionName = "Ajax";
            string ActionDescription = "Ajax Senerio";
            int length = 12;
            for (int i = 1; i <= length; i++)
            {
                ViewBag.SidebarItems.Add(ActionName + i.ToString(), ActionDescription+" " + i.ToString());
            }
            return View();
        }
    }
}