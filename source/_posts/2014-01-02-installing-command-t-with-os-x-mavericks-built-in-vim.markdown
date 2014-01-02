---
layout: post
title: "Installing Command-T with OS X Maverick's Built-In Vim"
date: 2014-01-02 01:03
comments: false
categories: 
---

I was fortunate enough to, just today, pick up a new computer. My first hardware
in over 4 years, I had been holding off. Once my trusty MacBook Pro bit the dust
last night and I found out the repair cost was extraordinary, I bit the bullet.

So, you're probably in a similar place. You relatively recently got a shiny new
Macintosh and you're so excited to start writing code and making a difference
with those skillz of yours. Except one this is missing: [Command-T][].

Lucky for you, sir, I am here to help. OS X Maverick's built-in vim distribution
comes with Ruby support already (which it needs for Command-T) so you're good
there. Now you need to download and compile Command-T. Should be easy, right?
Well, not quite.

Mavericks was notable for Ruby users because it ships with Ruby 2.0. All
previous versions that I had ever used shipped with 1.8.7 so this was a huge
bonus. Problem is, your pre-installed vim wasn't compiled with 2.0.0, it was
compiled with 1.8.7.

To check this, run the following in vim in NORMAL mode:

```text
:ruby puts "#{RUBY_VERSION}-p#{RUBY_PATCHLEVEL}"
```

For me, that output `1.8.7-p358`. So that means the Ruby verison that vim is
using is `1.8.7-p358`, and we need to compile Command-T with that version. To do
so, install it:

```bash
$ rbenv install 1.8.7-p358
```

Boom! Now download and install Command-T:

```bash
$ git clone https://github.com/wincent/Command-T.git ~/.vim/bundle/Command-T
$ cd ~/.vim/bundle/Command-T # for tpope's Pathogen
$ rbenv local 1.8.7-p358
$ rbenv rehash
$ gem install bundler
$ bundle install
$ bundle exec rake make
```

Aaaaand boom, you're done. Open up `vim` and type your leaderkey then `t` (for
me, that's `,t`) to launch the prompt.

If you get a weird SIGTERM error when you launch `vim`, then you installed
Command-T with the wrong Ruby version. Remove `ruby/command-t/ext.bundle` and
try again.

[Command-T]: https://github.com/wincent/Command-T
