---
layout: post
title:  "Quick Start Instructions"
date:   2016-12-19 
categories: jekyll update
comments: true
featured: true
image: http://placehold.it/350x150
excerpt: The jekyll new command now automatically initiates bundle install and installs the dependencies required. To skip this, pass --skip-bundle option like so jekyll new myblog --skip-bundle.
---

<h2>Get up and running <em>in seconds</em></h2> <!--more-->

{% highlight code %}
~ $ gem install jekyll bundler
~ $ jekyll new my-awesome-site
~ $ cd my-awesome-site
~/my-awesome-site $ bundle exec jekyll serve
# => Now browse to http://localhost:4000
{% endhighlight %}

The <code>jekyll new</code> command now automatically initiates <code>bundle install</code> and installs the dependencies required. To skip this, pass <code>--skip-bundle</code> option like so <code>jekyll new myblog --skip-bundle</code>.

If you wish to install jekyll into an existing directory, you can do so by running <code>jekyll new .</code> from within the directory instead of creating a new one. If the existing directory isn't empty, you'll also have to pass the <code>--force</code> option like so <code>jekyll new . --force </code>.

That's nothing, though. The real magic happens when you start creating blog posts, using the front matter to control templates and layouts, and taking advantage of all the awesome configuration options Jekyll makes available.

If you're running into problems, ensure you have all the [requirements installed][requirements-installed].

[requirements-installed]:https://jekyllrb.com/docs/installation/
