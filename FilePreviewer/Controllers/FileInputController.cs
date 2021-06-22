using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;



namespace FilePreviewer.Controllers
{
    public class FileInputController : Controller
    {
        public static void ListSidebarItems(Dictionary<string, string> SidebarItems, string ActionName, string ActionDescription, int length)
        {
            for (int i = 1; i <= length; i++)
            {
                SidebarItems.Add(ActionName + i.ToString(), ActionDescription + " " + i.ToString());
            }
        }
        public ActionResult Index()
        {
            ViewBag.SidebarItems = new Dictionary<string, string>()
            {
                {"Basic", "Basic Usage" },
                {"Advanced", "Advanced Usage" },  
                { "Resumable_Uploads" , "Resumable Uploads" },
                {"Folder_Upload", "Folder Upload"},
                {"Avatar_Upload" , "Avatar Upload" },
                {"Multi_Language", "Multi Language" },
                {"Theming", "Theming" },
                {"Preview_Management", "Preview Management" },
                {"File_Preview_Icons", "File Preview Icons" },
                {"Image_Dimensions", "Image Dimensions" },
                {"Image_Management", "Image Management" },
                {"Auto_Replace", "Auto Replace" },
                {"File_Count_Validation", "File Count Validation" },
                {"Plugin_Methods", "Plugin Methods" },
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
            string ActionName = "advanced";
            string ActionDescription = "Advanced Example";
            int length = 11;
            for (int i = 1; i <= length; i++)
            {
                ViewBag.SidebarItems.Add(ActionName + i.ToString(), ActionDescription + " " + i.ToString());
            }
            return View();
        }
        public ActionResult Resumable_Uploads()
        {
            ViewBag.SidebarItems = new Dictionary<string, string>();
            string ActionName = "resumable";
            string ActionDescription = "Resumable Scenario #";
            int length = 3;
            ListSidebarItems(ViewBag.SidebarItems, ActionName, ActionDescription, length);
            return View();
        }
        public ActionResult Folder_Upload()
        {
            ViewBag.SidebarItems = new Dictionary<string, string>()
            {
                { "single-file-upload", "Single File Upload" },
                { "multi-file-upload", "Multi File Upload" },
                { "drag-and-drop-folders", "Drag & Drop Folders" }
            };
            return View();
        }
        public ActionResult Avatar_Upload()
        {
            ViewBag.SidebarItems = new Dictionary<string, string>();
            string ActionName = "avatar-upload";
            string ActionDescription = "Avatar Upload Example";
            int length = 2;
            ListSidebarItems(ViewBag.SidebarItems, ActionName, ActionDescription, length);
            return View();
        }
        public ActionResult Multi_Language()
        {
            ViewBag.SidebarItems = new Dictionary<string, string>()
            {
                {"russian-input", "Russian Input" },
                {"french-input" , "French Input"},
                {"portugese-br-input", "Portugese (BR) Input" },
            };
            return View();
        }
        public ActionResult Theming()
        {
            ViewBag.SidebarItems = new Dictionary<string, string>()
            {
                {"font-awesome", "Font Awesome" },
                {"font-awesome-alt", "Font Awesome (Alt)" },
                {"font-awesome-5", "Font Awesome 5" },
                {"font-awesome-5-alt" , "Font Awesome 5 (Alt)"},
                {"glyphicons", "Glyphicons" },
                {"glyphicons-alt", "Glyphicons (Alt)"},
                {"kragee-explorer", "Kragee Explorer" },
                {"kragee-exploerer-fa", "Kragee Exploreer FA" },
                {"kragee-exploerer-fa-5", "Kragee Exploreer FA 5" },
            };
            return View();
        }
        public ActionResult Preview_Management()
        {
            ViewBag.SidebarItems = new Dictionary<string, string>()
            {
                {"initial-preview-data", "Initial Preview Data" },
                {"initial-preview-raw", "Initial Preview Raw" },
                {"initial-preview-advanced", "Initial Preivew Advanced" },
                {"initial-preview-iconic", "Initial Preivew Iconic" },
                {"reverse-preview-order", "Reverse Preview Order" },
                {"pdf-preview", "PDF Preview" },
            };
            return View();
        }
        public ActionResult File_Preview_Icons()
        {
            ViewBag.SidebarItems = new Dictionary<string, string>();
            string ActionName = "custom-preview-icons";
            string ActionDescription = "Custom Preview Icons";
            int length = 6;
            ListSidebarItems(ViewBag.SidebarItems, ActionName, ActionDescription, length);
            return View();
        }
        public ActionResult Image_Dimensions()
        {
            ViewBag.SidebarItems = new Dictionary<string, string>()
            {
                {"minimum-image-dimensions", "Minimum Image Dimensions" },
                {"maximum-image-dimensions", "Maximum Image Dimensions" },
            };
            return View();
        }
        public ActionResult Image_Management()
        {
            ViewBag.SidebarItems = new Dictionary<string, string>()
            {
                {"auto-image-orientation", "Auto Image Orientation" },
                {"image-resize-width", "Image Resize (Width)" },
                {"image-resize-height", "Image Resize (Height)" },
                {"image-resize-auto", "Image Resize (Auto)" },
                {"image-resize-conditional", "Image Resize (Conditional)" },
            };
            return View();
        }
        public ActionResult Auto_Replace()
        {
            ViewBag.SidebarItems = new Dictionary<string, string>()
            {
                {"one-file-limit", "One File Limit" },
                {"one-file-limit-alternate", "One File Limit (Alternate)" },
                {"multiple-file-input", "Multiple File Input" },
            };
            return View();
        }
        public ActionResult File_Count_Validation()
        {
            ViewBag.SidebarItems = new Dictionary<string, string>()
            {
                { "max-files-ajax", "Max Files (Ajax)"},
                { "min-files-ajax", "Min Files (Ajax)"},
                { "max-files-non-ajax", "Max Files (Non-Ajax)"},
                { "min-files-non-ajax", "Min Files (Non-Ajax)"},
                { "max-files-special", "Max Files (Special)"},
                {"required-1-ajax", "Required 1 (Ajax)"},
                {"required-2-ajax", "Required 2 (Ajax)"},
                {"required-1-non-ajax", "Required 1 (Non-Ajax)"},
                {"required-2-non-ajax", "Required 2 (Non-Ajax)"},
            };
            return View();
        }
        public ActionResult Plugin_Methods()
        {
            ViewBag.SidebarItems = new Dictionary<string, string>()
            {
                { "manipulation-methods", "Manipulations Methods" },
                { "delete-validation-1", "Delete Validation 1" },
                { "delete-validation-2", "Delete Validation 2" },
            };
            return View();
        }
        public ActionResult Ajax()
        {
            ViewBag.SidebarItems = new Dictionary<string, string>();
            string ActionName = "ajax";
            string ActionDescription = "Ajax Senerio";
            int length = 12;
            for (int i = 1; i <= length; i++)
            {
                ViewBag.SidebarItems.Add(ActionName + i.ToString(), ActionDescription+" " + i.ToString());
            }
            return View();
        }

        [HttpPost]
        public ActionResult MultipleUpload(HttpPostedFileBase[] files)
        {
            if (files.Count() > 0)
            {
                foreach(var file in files)
                {
                    if (file.ContentLength > 0)
                    {
                        var fileName = Path.GetFileName(file.FileName);
                        var path = Path.Combine(Server.MapPath("~/FileUploads"), fileName);
                        file.SaveAs(path);
                    }
                }
            }
            return Redirect(Request.UrlReferrer.ToString());
        }

        [HttpPost]
        public ActionResult Upload(HttpPostedFileBase file)
        {
            if (file.ContentLength > 0)
            {
                var fileName = Path.GetFileName(file.FileName);
                var path = Path.Combine(Server.MapPath("~/FileUploads"), fileName);
                file.SaveAs(path);
            }

            return Redirect(Request.UrlReferrer.ToString());
        }
    }
}