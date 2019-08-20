import Artikel from "/admin/preview-templates/artikel.js";
import Blog from "/admin/preview-templates/blog.js";
import Galeri from "/admin/preview-templates/galeri.js";
import Tips from "/admin/preview-templates/tips.js";
import Video from "/admin/preview-templates/video.js";
import Page from "/admin/preview-templates/page.js";

// Register the Post component as the preview for entries in the blog collection
CMS.registerPreviewTemplate("artikel", Artikel);
CMS.registerPreviewTemplate("blog", Blog);
CMS.registerPreviewTemplate("galeri", Galeri);
CMS.registerPreviewTemplate("tips", Tips);
CMS.registerPreviewTemplate("video", Video);
CMS.registerPreviewTemplate("pages", Page);

CMS.registerPreviewStyle("/_includes/assets/css/inline.css");
// Register any CSS file on the home page as a preview style
fetch("/")
  .then(response => response.text())
  .then(html => {
    const f = document.createElement("html");
    f.innerHTML = html;
    Array.from(f.getElementsByTagName("link")).forEach(tag => {
      if (tag.rel == "stylesheet" && !tag.media) {
        CMS.registerPreviewStyle(tag.href);
      }
    });
  });