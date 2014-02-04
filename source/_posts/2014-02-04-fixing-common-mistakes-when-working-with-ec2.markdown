---
layout: post
title: "Fixing Common Mistakes when working with EC2"
date: 2014-02-04 00:30
comments: false
categories: aws ec2 ops
---

I'm lucky enough this semester to be taking CS 5300 at Cornell, a class entitled
"The Architecture of Large-Scale Information Systems." For this class, we will
need to know our way around Amazon's Web Services. I learned a lot about AWS
when I worked at 6Wunderkinder last year, so I was feeling up to the challenge.
Little did I know that the tooling 6W had created around its ops was far
superior to anything else out there.

I already had an AWS account, so my first step was to find a good CLI. I did the
logical thing, and asked Google. Turns out, Amazon ships its own `aws` client,
written in Python and shipped via `pip`. Marvelous! I ran `pip install aws`,
`aws configure` and presto, I was in business.

Our first question asked us to launch an instance of the AMI `ami-bba18dd2`, a
simple Fedora distribution. After asking for the man pages for `aws` in 6
different ways, I got them. I discovered I would need to specify the instance
type and security group as well. So I created a security group and went ahead:

```bash
$ aws ec2 run-instances \
  --image-id ami-bba18dd2 \
  --instance-type t1.micro \
  --security-group-ids sg-sgsga888
```

Yay, it worked! Ok, now I need to ssh into this bad boy.

```bash
$ ssh ec2-la-la-la.amazonaws.com
Access denied (publickey).
```

Huh? What's that all about? I had created a key pair from previous messing
around with EC2. Hm... After a few minutes of puzzlement, I realized I needed
to pass another option to my `aws ec2` command. Let's try this again:

```bash
# don't forget to terminate old instances!
$ aws ec2 terminate-instances --instance-ids i-1111111
# now, create the new one
$ aws ec2 run-instances \
  --image-id ami-bba18dd2 \
  --instance-type t1.micro \
  --security-group-ids sg-sgsga888 \
  --key-name parker
```

Booted! Now, let's try to ssh again:

```bash
$ ssh ec2-li-la-le.amazonaws.com
Access denied (publickey).
```

Bollocks! Looks like I am still missing something...

Ah! After taking a look at a tutorial, I realize I need to login as `ec2-user`.
Let's give this one more try:


```bash
$ ssh ec2-user@ec2-li-la-le.amazonaws.com
Last login: Tue Feb  4 05:13:24 2014 from cpe-88-88-88-88.twcny.res.rr.com

       __|  __|_  )
       _|  (     /   Amazon Linux AMI
      ___|\___|___|

https://aws.amazon.com/amazon-linux-ami/2013.09-release-notes/
7 package(s) needed for security, out of 25 available
Run "sudo yum update" to apply all updates.
[ec2-user@ip-10-9-162-71 ~]$
```

YES! I did it. Ok, so lessons:

1. Login as `ec2-user`, not as `albie` or any other name.
2. Make sure you specify the `key-name` for the instance(s) you want to launch.
3. Always err on the side of being more specific. Defaults can be bad.
4. Always terminate once you're done using the box.

Simple fixes for problems that seem so intractible.
