---
layout: post
title: "Fix the Government: Open-Source Legislation"
date: 2013-10-22 19:45
comments: false
categories: [government, politics, legislation, open-source]
---

_The following post was first written for a class at Cornell University taught
by Phoebe Sengers called "Designing Technologies for Social Impact"._

---

We have a rather significant problem in the U.S. Indeed, our government seems to
be malfunctioning in a rather obvious and irresponsible way. The question of
today is simply: can it be fixed? If so, how?

One must first examine the problem and its root cause. The problem of
malfunction is most basically the conflict of multiple competing interests
without proper ideological or procedural basis for dialogue. The root cause of
this is that the existing platforms for dialogue (meetings, letters, rallies,
news spots) are severely outdated. What worked pre-internet is not passing the
test of time.

In particular, the legislative process is slow, dilapidated, and closed. This
leads to laws with earmarks and loopholes, confusing language and unnecessary
provisions. What if the law were made out in the open, for everyone to see, the
way open-source software is made? Version control and online access to bills
in-the-works as well as laws would certainly improve transparency. The Library
of Congress runs a system called THOMAS which is updated about daily, but the
bills aren't organized logically and the user interface is fair at best.

The open-source legislation system envisioned here is based on an open-source
software system called GitHub. GitHub is setup like so: users and organizations
own repositories of code, text or binary documents. Each repository contains the
entire history of a particular set of documents as well as the "master" version,
or the latest repository-owner(s)-approved version of the document(s). Each
repository uses a version control system called git to keep track of the
information about the documents it contains: current versions as well as
previous versions. What is unique about this system, and the incredible strength
it offers for open legislation, is the concept of a "diff". A "diff" is simply
the difference between a document at one point in time (referred to as a
"revision") and the same document at a different point in time. Each repository
can be "forked" (cloned to a user's own profile for editing) by a user; this
offers the most significant freedom of open-source, which is that anyone has the
freedom to modify a copy of the source and suggest changes to the main project
based on those derivative works. In GitHub parlance, the suggestion for a change
is called a "pull request," but this term need not be adopted by this new
system.

To illustrate the design of the ideal system:

1. Use git derivative for prose editing, rather than (line-by-line) code editing
2. Be online, accessible by anyone
3. Offer input from anyone in any form (suggested changes or just comments)
4. Do not make differentiation between users other than repository owner &
   non-owner (those with direct access to the repository and those who can fork
   and suggest changes, but can't incorporate those changes themselves)
5. Each repository is a proposed bill owned by the deciding body at the given
   time during the legislative process as dictated by the U.S. Constitution.
   Each repository contains a text file for each sub-segment of the proposed
   bill as well as a rationale or goal, e.g.
     . (root)
     |
     |-- README.txt (rationale, goal(s) of bill, and other meta info)
     |-- section01.txt
     |-- section02.txt
     |
     ...

6. The entire process of the creation and formulation of the law is public and
   open insofar as the culture can push for this
7. Moderator of some sort to ensure comments are productive (usually repo
   owner). All of the comments that are hidden still exist inline and can be
   shown by any reader of the comment thread
8. Membership of individual lawmakers in committees and other larger bodies
   reflected in membership of organization accounts on the platform, which gives
   them access to directly changing the legislation they have access to through
   their organizational memberships
9. Offer "points of interest" as a means of discussion about a particular aspect
   of a bill without the need to suggest changes. Can ask anything from "why is
   this section worded this way?" to "what are the implications of this on
   agricultural development in Upstate New York?" No question is too dumb and
   all of them require an answer insofar as they are productive and relevant.
10. Easy citation of preexisting laws and other bills to allow for discussion
    surrounding conflict or other interference
11. Access to signing letters written by President (usually interpretations of
    pieces of the law for purposes of execution of the law)
12. Easy viewing of votes on final versions of bills (who, when, did it pass?,
    etc)
13. Means of mentioning lawmakers in a comment if comment is directed at them,
    or question is asked directly of them
14. Links to more information about execution by Executive & other related
    policy/law
15. Comments and changes can only be created from user accounts, e.g. David
    Skorton can suggest a change, but Cornell University cannot.
16. Users can subscribe to updates from a bill repository and receive all
    information about changes that are made and discussions that occur.

One negative aspect of this approach is volume and the issues that come
therefrom (see: student's answer on Piazza page linked to below). As the number
of collaborators grows, the ability for those with direct access to the bills to
handle suggestions for modification is greatly diminished. How are the interests
of the few vs. those of the many weighed (e.g. individual comment vs comment from
organization such as NAACP)? From the perspective of the way government works
already, aides of the legislators who have access to the repositories will also
have mirrored access to accept and discuss changes and questions from citizens.
As each law is its own repository, the load is distributed over the many
hundreds of bill repositories being considered. Additionally, Nissenbaum &
Benkler discuss the idea of self-selection and volunteerism as an element of
open-source. This applies very much so to the scalability of open-source
legislation and responses to citizens. If a citizen is not interested in a
particular bill, that citizen will not involve himself or herself with the
creation of that bill. This self-selection will greatly reduce the number of
individuals with whom the maintainers of the bills will have to contend with in
discussion about a bill and suggestions for change.

Ultimately, this idea is predicated on the idea that citizens, when given the
right tools, can reach compromise and have productive discussions to "get the
job done" efficiently and accurately.
