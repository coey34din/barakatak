import Post from "/admin/preview-templates/blog.js";
import Page from "/admin/preview-templates/page.js";
import Page from "/admin/preview-templates/video.js";
import Page from "/admin/preview-templates/galeri.js";
import Page from "/admin/preview-templates/artikel.js";
import Page from "/admin/preview-templates/tips.js";


// Register the Post component as the preview for entries in the blog collection
CMS.registerPreviewTemplate("blog", Blog);
CMS.registerPreviewTemplate("pages", Page);
CMS.registerPreviewTemplate("galeri", Galeri);
CMS.registerPreviewTemplate("artikel", Artikel);
CMS.registerPreviewTemplate("tips", Tips);
CMS.registerPreviewTemplate("video", Video);


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
