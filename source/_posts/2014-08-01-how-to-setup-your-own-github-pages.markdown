---
layout: post
title: "A Hacker's Guide to Her Own GitHub Pages"
date: 2014-08-01 14:42:58 -0400
comments: false
categories: tech jekyll github github-pages
---

[GitHub Pages](https://pages.github.com) is a wonderful free platform GitHub has created to build and host your Jekyll sites for you. You push up any valid Jekyll site to a repo (on a special branch), and it's built and published to a predictable URL. The only downside? You can't use any custom Ruby code, which means no custom plugins. So what's the best way to host a Jekyll site that requires plugins?

Maybe you're writing a huge website for your employer, or just something small for yourself. Either way, you need a plugin or two to get it *just right*. You could build locally and push the compiled site up to GitHub Pages, but that requires that you install all the dependencies locally and write a script to compile and jostle things in just the right way to make it all work. What if you could have the same workflow – just `git push` – for sites with custom plugins?

You can. I do it every day. In fact, my personal site (https://parkermoo.re) is published with this method. Here's a step-by-step guide to making your own GitHub Pages.

## 1. Install and Configure Dependencies

You'll need the following:

1. A server with `root` access. I use a Rackspace CentOS 1GB Performance VM, but you can use any Linux system from any provider.
2. A web server if you don't have one already (Apache/Nginx).
3. Ruby and RubyGems with the proper permissions to install new gems.
4. Git
5. [Gitolite](https://github.com/sitaramc/gitolite)

First, `sudo su - root`. Then install Ruby. I suggest using `rbenv` to keep your Rubies organized. Then ensure RubyGems is installed, and install the `github-pages` gem.

Next, ensure you have a daemonized web server installed, like `nginx` or `apache`.

Then ensure git is installed and create a new `git` user. Run `su - git` and install `gitolite`.

Once you have `gitolite` installed, go back to your local machine and configure `gitolite` as described. You'll need to add a new user for your SSH key and create the repo for your site.

## 2. Add the post-receive hook

Run `sudo su - git` and find the `post-receive` file in your repository. It's usually at `/home/git/repositories/MY_REPO.git/hooks/post-receive`. Edit it so it looks like this:

{% highlight bash %}
set -e # fail on error

# ensure you have loaded git's environment with rbenv/ruby/jekyll in the path
source /home/git/.bash_profile

# this is only if you have rbenv installed
# remove if you're using a stock ruby
eval "$(rbenv init -)"

# this shows you where the Jekyll executable can be found
# it will also fail if jekyll can't be found, halting the build.
which jekyll

# this is the name of your repo, without the `.git`
REPO_NAME="MY_REPO"

GIT_REPO=$HOME/repositories/$REPO_NAME.git
TMP_GIT_CLONE=/tmp/$REPO_NAME

# Change this to wherever your server (nginx/apache) will look
# for your compiled site. Usually called the document root.
PUBLIC_WWW=/var/www/$REPO_NAME

git clone $GIT_REPO $TMP_GIT_CLONE

# Run Jekyll!
cd $TMP_GIT_CLONE && jekyll build -d $PUBLIC_WWW --trace
rm -Rf $TMP_GIT_CLONE
exit
{% endhighlight %}

This hook will clone your repo to `/tmp` and run `jekyll build` from your site source into the directory your server will serve from.

## 3. Add the git remote

Go back to your local site and add the remote:

{% highlight bash %}
$ git remote add publish git@example.org:MY_REPO.git
{% endhighlight %}

## 4. Test

Now, to test, just push!

{% highlight bash %}
$ git push publish master
{% endhighlight %}

You should see all the output of the Jekyll process in your terminal. Once you see `...done.` and the process exits, you're done! Refresh your browser and admire your handiwork.

If you get a `LoadError` from Jekyll, then you don't have a gem installed or it can't access the `_plugins` directory. To install new gems, just run `gem install GEM_NAME` as `root` on your VM.
