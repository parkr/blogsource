---
layout: post
title: "Fixing Memory Issues in Dokku hosted on DigitalOcean 512MB Droplet"
date: 2013-12-21 12:23
comments: false
categories: tech dokku bugfix howto
---

As many other Heroku customers, I rejoiced when [Dokku][] was released. To have
complete freedom to host as many apps with whatever databases or other plugins
I wanted -- all for the cost of a small VM -- was wonderful news.

I decided, for cost's sake, to boot up one of those famed $5 [DigitalOcean][]
Droplets. I didn't see that DigitalOcean provides an "app" for Dokku, so I
created a vanilla box of Ubuntu 13.04 and pressed on. I got everything up and
running and went to go deploy my first app, only to see this when I ran
`git push`:

```text
runtime: panic before malloc heap initialized
fatal error: runtime: cannot allocate heap metadata
```

Well, golly, that sure is unhelpful. Looks like 512MB doesn't cut it. Luckily,
we can avoid paying the extra $5/mo for the 1GB version by running the following
as `root`:

```bash
dd if=/dev/zero of=/extraswap bs=1M count=512
mkswap /extraswap
```

Then adding the following to your `/etc/fstab` file so the swap persists between
reboots:

```text
/extraswap         none            swap    sw                0       0
```

Then run this to enable `/extraswap` for swapping:

```bash
swapon -a
```

Boom. Now re-run `git push` and you're in business. Magic!

Credit goes to the brilliant [@dhassler][] for [the idea and the code][]. Just
thought I'd share and preserve for my own benefit in the future.


[Dokku]: https://github.com/progrium/dokku
[DigitalOcean]: https://digitalocean.com
[@dhassler]: https://github.com/dhassler
[the idea and the code]: https://github.com/dotcloud/docker/issues/1555#issuecomment-22874190
