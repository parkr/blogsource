require 'rake'

namespace :post do
  desc "Creates a new post."
  task :new, do

    args = ARGV

    require 'uri'
    require 'date'

    today = Date.today.to_s
    
    if args.include? "post:new"
      args.delete("post:new")
    end

    unless args.empty?
      title = ""
      args.each do |arg|
        title << arg.capitalize.strip
        title << " "
      end
      title.strip!

      lower_title = title.downcase
      lower_title.gsub!(/\ /i, '-')
      lower_title.gsub!(/[^-_a-zA-Z0-9]/i, '')
    else
      raise ArgumentError, "you need to enter a title!"
    end

    dir = "_posts"
    filename = "#{dir}/".concat(URI.escape("#{today}-#{lower_title}", Regexp.new("[^#{URI::PATTERN::UNRESERVED}]"))) << ".md"

    unless File.exists?(filename)
      yaml = 
    "---
layout: post
title: \"#{title}\"
date: #{Time.now.to_s[0..19]}
published: false
excerpt: nil
category: nil
---

  "
      File.open(filename, 'w') do |f|
        f.write(yaml)
      end
      puts "Created post at '_posts/#{filename}'"
    else
      raise ArgumentError, "post with that title already exists"
    end

    `mate "#{filename}"`
  end
end

namespace :page do
  desc "Makes a new page"
  task :new do
    
  end
end