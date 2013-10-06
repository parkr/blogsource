---
layout: post
title: "Install rbenv on Ubuntu 12.04"
date: 2013-02-06 21:31
comments: false
categories: 
---

So, I'll admit it: I absolutely adore rbenv.

In light of this, I've been using it at my work at 6Wunderkinder the past couple weeks.
6W uses AWS like nobody's business, and the Ubuntu EC2 instances I've been interacting
with are really bare-bones. So I wanted to write this script for you, the Ubuntu & Ruby
user, in order for you to very quickly get up and running with rbenv & the latest Ruby
MRI. Just copy it and run it.

``` bash Installing rbenv on Ubuntu 12.04
sudo apt-get install zlib1g-dev openssl libopenssl-ruby1.9.1 libssl-dev libruby1.9.1 libreadline-dev git-core make make-doc
cd ~
git clone git://github.com/sstephenson/rbenv.git .rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL # Restart the shell
mkdir -p ~/.rbenv/plugins
cd ~/.rbenv/plugins
git clone git://github.com/sstephenson/ruby-build.git
git clone git://github.com/sstephenson/rbenv-gem-rehash.git
rbenv install 1.9.3-p362
rbenv rehash
rbenv global 1.9.3-p362
```

