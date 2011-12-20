---
layout: post
title: "Improvements For Instapaper"
date: 2011-12-20 12:44:36 
published: true
category: tech
---

I am a heavy user of [Instapaper][], an app that allows one to save webpages to read later. I am a subscriber, and I have chosen to keep the ads turned on, to support the creator and sole developer, [Marco Arment][marco], because, well, he's a great guy and he deserves it. Marco works tirelessly to not only create something that he finds useful, but also something that might be useful to others. Thus far, Marco has done a fantastic job with Instapaper, as we have seen with his [4.0 release](http://www.marco.org/2011/10/17/instapaper-4-released). He has added much-asked-for features, and nixed features that customers didn't feel were useful, or downright hated. The [iPhone and iPad app][instapaper_ios] is absolutely fantastic, no doubt about that. Today, however, my gripe is with the [Instapaper Webapp][instapaper].

The Instapaper Webapp, the preferred way to access one's Instapaper account from a computer, is, it is sad to say, sub-par. Being a web developer myself, I can imagine that much sophistication lies behind the webapp, but it doesn't appear to "just work". There are several actions which have non-intuitive outcomes, and others which are very clunky. Along this same vein, I would like to suggest improvements to the webapp that I believe to be quite reasonable, as well as necessary.

In the interest of time, I provide for you a list of "gripes" that I have with the Instapaper webapp:

1. When clicking "+ Add" from a folder, it does not add the new item to the folder, but to the general "Unread" folder
2. No way to search through folders or one's entire Instapaper library
3. Articles (as list items) are too large, therefore causing the issue that an "at-a-glance" view of the page shows only about 4 or 5 articles (MBP 15", 1440x900 screen res)
4. No "label" concept

### 1: Adding an Article using "+ Add"

I have a folder called "News to Read", where I store news articles as they arrive in my inbox from various daily news digests. I was adding an article I had found to what I _thought_ was this folder (I navigated to the folder, and clicked "+ Add"), and, after it didn't appear in the folder, I was a little confused. I navigated back to "Unread", and there it was. Needless to say, I was irked.

I would like to see a `<select>` menu on the "+ Add" page that autofills with whichever folder referred me (though allows for a change, if the user desires), and that article be added to whichever folder is listed in this `<select>` menu. That'd be great.

### 2:  No Searching

This is actually my biggest grievance. I find the inability to search through my (>1000) articles to be quite annoying. Oftentimes, I will read an article, refer to it in a conversation and have no way to find it and send it to the person(s) with whom I discussed the article, because it is buried deeply in my archive. If there were a search bar at the top, I might be able to type in the first few words of the title or perhaps the site url (e.g., "http://www.nytimes.com/", or just "nytimes.com") and have a list of articles show up -- a _much_ easier pile of articles through which to search!

This could be relatively easy to implement: when a new article is saved from the iOS app or via a bookmarklet, then the Instapaper engine could construct a few keywords or tags that identify the page. For example, if "NYTimes" is in the title, it is safe to assume that the article is either from the _New York Times_ or somehow relates to the _Times_. In addition to this, we could have the option of adding our own, custom tags to a saved page both via "Edit" and when using "+ Add" to add the page. 

### 3: Listed Articles are HUGE

In this case, we want to diverge from [Billy Fucillo's famous line](http://www.youtube.com/watch?v=DXRaboSo70A), and go for "small". The fact that I can presently see only about 4 or 5 articles in my viewport at once does not allow for any ability to scan. I tend to do this -- I will scan through article titles and find something of interest and read that.

Here's an idea: why not try creating a skin for Instapaper that looks a little like [Gmail's new compact view](http://www.cravingtech.com/gmail-gets-compact-layout-and-better-search.html)? Given the large number of articles I have (386 in my Unread folder, 1500 articles not in my Archive), I would love a way to perform **mass actions** (like "archive", "move to folder", "apply tags") to various articles, and to see far more (maybe 25 or 50?) at once.

### 4: No Concept of "Labels"

This one is more a "nice-to-have" feature, but would be _fantastic_. I think Google really pioneered a different way of thinking about folders when they introduced the concept of labels into Gmail. This is a nice way to search and organize, because it is typical for one to have an article that applied to several topics they may have labeled for folders (e.g., "Tech" and "WebDev"), and allows for _both_ of these labels to "house" the article. This also makes finding articles in the Archive _far_ easier, because I can go to a label, click "View Archived Articles with this Label", and see all of the archived articles with this particular label! _Parfait._

You would have to change [Instapaper's API](http://www.instapaper.com/api/full) to return an array of folders for any given bookmark, but that's very doable. And, when getting a list of the bookmarks in a particular folder, as long as that folder's ID is in the bookmark's `belongs_to` array, then add it. But that's a no-brainer.

### Thanks

So thanks for reading. These are my improvements for [Instapaper][], one of the greatest webapps of all time. A huge "thank you" to [Marco][marco], who had the forethought to create something that the rest of us didn't even know we needed, and now, can't imagine living without. Thanks!

Also, Marco, I'm free this summer to help out with implementing improvements such as these. I'm a webdev with a lot of experience with PHP-heavy apps, and have used CakePHP and CodeIgniter before, which is what I believe you have written this webapp with. But take a quick look at my [online resumé][] for a more detailed description of my qualifications.

[Instapaper]: http://www.instapaper.com/
[marco]: http://www.marco.org/
[instapaper_ios]: http://itunes.apple.com/us/app/instapaper/id288545208?mt=8%3FpartnerId%3D30
[online resumé]: http://www.parkermoore.de/