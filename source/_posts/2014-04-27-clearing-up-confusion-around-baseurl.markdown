---
layout: post
title: "Clearing Up Confusion Around baseurl"
date: 2014-04-27 16:52:54 -0400
comments: false
categories: jekyll
---

Hey, so there's been a bit of confusion about what the Jekyll configuration
option called `baseurl` is. Part of the beauty of open-source and of Jekyll
is that there's a lot of flexibility. Unfortunately, much of this
flexibility doesn't apply to `baseurl`. Here's a quick distillation of its
intentions, and how to use it.

## Mimic GitHub Pages

`baseurl` was [originally added back in 2010][baseurl-commit] to allow
"the user to test the website with the internal webserver under the same
base url it will be deployed to on a production server".[^1] 

## Example

So let's say I come up with a cool new project. I want to make
documentation for a project I'm working on called "ubiqity", and I'll be
deploying it to GitHub Pages as a repo under my username, "@parkr". Its
documentation will be available at the URL `http://parkr.github.io/ubiquity`.

In this example, the term "base URL" refers to `ubiquity`. When I go to
develop my website, I can set the `baseurl` key to equal `ubiquity` and
navigate my website from `http://localhost:4000/ubiquity/`, as though it
were hosted on GitHub Pages. Notice that the only difference here between
development and production is the host: `parkr.github.io` vs.
`localhost:4000`.[^2]

## Configuring Your Site Properly

1. Set `baseurl` in your `_config.yml` to match the production URL without
   the host (e.g. `ubiquity`, *not* `http://parkr.github.io/ubiquity`).
2. Run `jekyll serve -w` and go to `http://localhost:4000/your_baseurl/`,
   replacing `your_baseurl` with whatever you set `baseurl` to in your
   `_config.yml`, and not forgetting the trailing slash.
3. Make sure everything works. Feel free to prepend your urls with
   `site.baseurl`.
4. Push up to your host and see that everything works there, too!

## Success!

You've done it! You've successfully used `baseurl` and the world is
wonderful.

[baseurl-commit]: https://github.com/jekyll/jekyll/commit/4a8fc1fa6e3fa5dc05c81ac5ac4ffed0b0818ac4
[^1]: https://github.com/jekyll/jekyll/pull/235
[^2]: The port also differs, but that's not what's important here. The point is that everything after the `/` after the host is the same.
