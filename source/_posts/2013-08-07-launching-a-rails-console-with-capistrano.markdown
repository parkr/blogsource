---
layout: post
title: "Launching a Rails Console with Capistrano"
date: 2013-08-07 20:36
comments: false
categories:
- rails
- capistrano
- howto
- web
---

If you're using the popular Capistrano web deployment framework, you will likely
have wished you had an easy way to perform a quick task in the production rails
console on one of your servers. Many thanks to
[@colszowka](https://github.com/colszowka) for [this
solution](https://gist.github.com/benedikt/1115513#comment-576015):

```ruby
namespace :rails do
  desc "Remote console"
  task :console, :roles => :app do
    run_interactively "bundle exec rails console #{rails_env}"
  end

  desc "Remote dbconsole"
  task :dbconsole, :roles => :app do
    run_interactively "bundle exec rails dbconsole #{rails_env}"
  end
end

def run_interactively(command, server=nil)
  server ||= find_servers_for_task(current_task).first
  exec %Q(ssh #{server.host} -t 'cd #{current_path} && #{command}')
end
```

And, _vòila_! Run `cap rails:console` and you're in business.
