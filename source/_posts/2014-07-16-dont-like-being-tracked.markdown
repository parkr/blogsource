---
layout: post
title: "Don't Like Being Tracked?"
date: 2014-07-16 21:58:53 -0400
comments: false
categories: linux security privacy osx tech howto
---

I don't like being tracked by Web giants when I'm not on their websites. As
more sites integrate Twitter, Facebook, and Google support, I can't help
but be tracked on almost every site I visit.

Luckily, the integrations for these three aforementioned companies is quite
simple to subvert (at least partially). If you're running a unix-based
machine, you can add just a few lines to your `/etc/hosts` file and you're
well on your way to Web privacy.

Open up a new tab, and open the Developer Console. Open the Network tab.
Now navigate to your favourite blog, news site, etc. You'll see each
individual network request that is made from that page listed in the
Network pane of the Developer Console. Scroll through requests and make
note of the domain names you wish to block.

Once you have the list of domain names, simply use your `hosts` file to
reroute those domains to your local server (`127.0.0.1`). Here's an example:

```text
127.0.0.1     connect.facebook.net
127.0.0.1     google-analytics.com www.google-analytics.com
127.0.0.1     platform.twitter.com
127.0.0.1     adroll.com a.adroll.com d.adroll.com
127.0.0.1     ib.adnxs.com
127.0.0.1     googleadservices.com www.googleadservices.com
```

In this example, I've blocked Facebook, Google Analytics, Twitter, Ad Roll,
Google Ad Services and the unknown "adnxs" service.

Preface each domain name with the address of your local server `127.0.0.1`
and group each line based on the second-level domain (e.g. `adroll.com`).
Add each of these lines to your `/etc/hosts` file (note: this will require
root privileges). Don't forget to save it when you're done.

Now navigate to that same site again, with the Network pane still open. You
should now get 404's or 500's when you try to access those same domains you
'blocked'.

For a solution that doesn't require halting access to these hosts, check
out the Tor project.
