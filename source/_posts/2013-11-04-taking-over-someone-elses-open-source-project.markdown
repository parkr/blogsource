---
layout: post
title: "Taking Over Someone Else's Open-Source Project"
date: 2013-11-04 21:23
comments: false
categories: [tech, jekyll, open-source]
---

Last December (2012), [Tom Preston-Werner][] granted me [push & pull access to
mojombo/jekyll][]. I had written a [letter to Tom about the future of Jekyll][]
and after a bit of persistence on my part, he relented:

![mojombo added parkr to mojombo/jekyll](/images/mojombo-added-parkr-to-jekyll.png)

After a somewhat lengthy (and [amusing][]) conversation via Skype, I knew what
Tom's priorities were for the project and where I could help. I started off
trimming down the number of open issues. At the time, they numbered just over 300.
After a quick visit to Buffalo to tackle some issues with [Nick Quaranto][] at a
Buffalo [OpenHack][] meetup at [CoworkBuffalo][], we were down to fewer than 200
open issues. I continued to work through them (much to my parents' dismay) all
through Winter Break. I was making good progress in the triage process: I knew
what many of the problems were with v0.12.1 and was formulating ideas about how
we might go about fixing them.

![jekyll shall inherit the earth](/images/jekyll-shall-inherit-the-earth.png)

In January, I flew out to San Francisco to visit my sister for a week. I setup a
meeting with Tom to talk more about Jekyll and a plan for moving forward to a
v1.0.0 release. After about an hour or so at GitHub's office in SoMa, talking
through various PR's, Tom said I could start merging pull requests.

Consultation with Tom was challenging (he runs a multi-million dollar company
after all), as it was increasingly difficult for him to find time for Jekyll.
Despite [announcing that he was going to commit some of his "20% time" to Jekyll][],
he eventually abandoned that as impractical. As time went on, I received fewer
replies to my emails and eventually stopped sending anything that didn't
absolutely _require_ Tom's input.

In March, I knew I needed more help. Tom wasn't able to give much time and I
was trying to tackle this project alone. I had noticed that [Matt Rogers][]
shared my vision for Jekyll, so I asked Tom to add him on as a contributor to
the repo. By v1.0.3, he had started merging pull requests like a BAW$ and was
the sanity to my ridiculously-obsessed, inexperienced mind. Since Matt joined, I
haven't really heard much from Tom. I write the occasional email and get the
occasional reply but he's essentially phased out of the normal development of
Jekyll. Matt & I have essentially taken over the project altogether.

By May, we were ready to ship v1.0.0. With the help of all the amazing
contributors, Matt, and my many mentors along the way, I finally ran
`rake release` for 1.0. The project was ours.

Since realizing that this product has few constraints outside of those I've
constructed for it in my mind (no one is going to tell me, "No, you may not
implement that feature or add that enhancement" without a valid argument as to
my solution's invalidity), I've been thinking about what it means to take over
someone else's project. [Jekyll is 5 years old.][] I wasn't there in 2008 when
it was first born as `autoblog`. Jekyll has changed a lot, as has its vision and
purpose. It's used by lots of people now, whether via [GitHub Pages][] or
locally.

Taking over someone else's project takes a deep understanding of what the
project is and what it should be. As much as I wish Jekyll could make me
kräuterquark, that's outside the scope of the project. Developing that lens is
crucial when taking over someone else's project.

Mentoring on the part of the original owner/previous maintainer(s) is
exceedingly significant in the development of this critical lens. I am so
grateful that I was able to meet up with Tom back in January and to have some
amount of input from him as I understood what the project should be.

It would be ill-advised to take over someone else's project without a partner.
Once Matt joined the team, Tom was able to step back into a much lesser role.
If I had tried to do what I did without any guidance (or at least sanity
checks), Jekyll v1.0.0 would have been a complete shit-show.

Trust in the community must also be earned. If people highly doubted my ability
to handle Jekyll, Tom would have likely removed me and found a replacement. I
argued a lot and got into some pretty heated debates at the beginning. There
were a couple people who didn't share the vision that I had inherited from Tom
and stopped contributing to the project altogether. I feel like we now have a
pretty great community around Jekyll and are able to help each other out and
share cool plugins and sites that we made for/with Jekyll.

Taking over someone else's open-source project was new terrain for me in
December, and still is today. It can be successful with the right amount of
mentoring and gradual removal of trusted feedback by the previous maintainer(s).

With some old projects that are brought back to life by the passing of the
torch, the new maintainers are able to experience the added bonus of feeling
like Frankenstein, which, I will say, is a pretty cool feeling.

![igor](/images/it-lives.jpg)

[Tom Preston-Werner]: http://tom.preston-werner.com
[push & pull access to mojombo/jekyll]: /images/mojombo-added-parkr-to-jekyll.png
[letter to Tom about the future of Jekyll]: /2012/12/11/an-open-letter-to-tom-preston-werner/
[amusing]: /images/jekyll-shall-inherit-the-earth.png
[Nick Quaranto]: http://quaran.to
[CoworkBuffalo]: http://coworkbuffalo.com
[OpenHack]: http://openhack.github.io
[announcing that he was going to commit some of his "20% time" to Jekyll]: https://github.com/mojombo/jekyll/issues/578#issuecomment-11414645
[Matt Rogers]: http://mattr.info
[Jekyll is 5 years old.]: https://github.com/mojombo/jekyll/commit/d189e05d236769c1e5594af9db4d6eacb86fc16e
[GitHub Pages]: http://pages.github.com
