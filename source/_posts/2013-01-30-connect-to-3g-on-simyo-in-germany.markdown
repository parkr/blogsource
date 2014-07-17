---
layout: post
title: "Connect to 3G on simyo in Germany"
date: 2013-01-30 18:10
comments: false
categories: berlin mobile documentation howto
---

I recently signed up for simyo, a German cell provider. After installing the Nano SIM into my phone,
I noticed that the 3G connection to the mobile data network was failing. Got a weird error that said
I was not subscribed to a mobile data network. Which was obviously false.

So, I tweeted about it. Expecting a several-day delay in my support query from simyo, I totally resigned
to wait on mobile data until they got back to me. But luckily this new 6W family & friends totally came
to my rescue. [Rafif Yalda](http://rafifyalda.id.au/), a former Wunderkind, totally came to my rescue in
[a tweet](https://twitter.com/rafifyalda/status/296664474885165056).

So if you ever run into a problem with your mobile network, ensure that your APN settings are correct.
In this case:

```
APN: internet.eplus.de
username: simyo
password: simyo
```

THANK YOU RAFIF. This surely saved me many hours of frustration.
