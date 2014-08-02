---
layout: post
title: "Header Anchor Links in Vanilla JavaScript for GitHub Pages and Jekyll"
date: 2014-08-01 23:36:54 -0400
comments: false
categories: tech open-source jekyll font-awesome javascript css
---

The venerable [Ben Balter, Esq.](http://ben.balter.com) wrote earlier this year about [how to add anchor links for headers in Jekyll.](http://ben.balter.com/2014/03/13/pages-anchor-links/). I thought I'd follow up that post with one of my own, as I take a slightly different approach.

This solution is vanilla JavaScript with a little CSS and the Font Awesome web font.

## Font Awesome

[Font Awesome](http://fortawesome.github.io/Font-Awesome/) is, well, awesome. It's a font of icons that comes with a handy set of CSS classes.

Download the Font Awesome distribution and pull out just the font files. They're the files that end in `.ttf`, `.woff`, `.svg`, `.otf`, and `.eot`. Grab them all and put them in `fonts/` in your Jekyll site.

## The JavaScript

Add this JavaScript wherever is convenient:

{% highlight js %}
var anchorForId = function (id) {
  var anchor = document.createElement("a");
  anchor.className = "header-link";
  anchor.href      = "#" + id;
  anchor.innerHTML = "<i class=\"fa fa-link\"></i>";
  return anchor;
};

var linkifyAnchors = function (level, containingElement) {
  var headers = containingElement.getElementsByTagName("h" + level);
  for (var h = 0; h < headers.length; h++) {
    var header = headers[h];

    if (typeof header.id !== "undefined" && header.id !== "") {
      header.appendChild(anchorForId(header.id));
    }
  }
};

document.onreadystatechange = function () {
  if (this.readyState === "complete") {
    var contentBlock = document.getElementsByClassName("docs")[0] || document.getElementsByClassName("news")[0];
    if (!contentBlock) {
      return;
    }
    for (var level = 1; level <= 6; level++) {
      linkifyAnchors(level, contentBlock);
    }
  }
};
{% endhighlight %}

## The CSS

Last, add this CSS to the `css` or `_scss` folder:

{% highlight css %}
/*!
 *  Font Awesome 4.1.0 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */
@font-face {
  font-family: 'FontAwesome';
  src: url('../fonts/fontawesome-webfont.eot?v=4.1.0');
  src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.1.0') format('embedded-opentype'), url('../fonts/fontawesome-webfont.woff?v=4.1.0') format('woff'), url('../fonts/fontawesome-webfont.ttf?v=4.1.0') format('truetype'), url('../fonts/fontawesome-webfont.svg?v=4.1.0#fontawesomeregular') format('svg');
  font-weight: normal;
  font-style: normal;
}
.fa {
  display: inline-block;
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fa-link:before {
  content: "\f0c1";
}
/*
 * This code is courtesy Ben Balter, modified by Parker Moore for jekyllrb.com
 * http://ben.balter.com/2014/03/13/pages-anchor-links/
 */
.header-link {
  position: relative;
  left: 0.5em;
  opacity: 0;
  font-size: 0.8em;

  -webkit-transition: opacity 0.2s ease-in-out 0.1s;
  -moz-transition: opacity 0.2s ease-in-out 0.1s;
  -ms-transition: opacity 0.2s ease-in-out 0.1s;
}
h2:hover .header-link,
h3:hover .header-link,
h4:hover .header-link,
h5:hover .header-link,
h6:hover .header-link {
  opacity: 1;
}
{% endhighlight %}

## Enjoy the Magic

Now refresh your site and voilà! It's like magic. See it in action in the [Jekyll docs](http://jekyllrb.com/docs/home/).
