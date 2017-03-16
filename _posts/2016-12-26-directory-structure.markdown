---
layout: post
title:  "Directory Structure"
date:   2016-12-26 
categories: jekyll update
comments: true
featured: false
---

Jekyll is, at its core, a text transformation engine. <!--more-->The concept behind the system is this: you give it text written in your favorite markup language, be that Markdown, Textile, or just plain HTML, and it churns that through a layout or a series of layout files. Throughout that process you can tweak how you want the site URLs to look, what data gets displayed in the layout, and more. This is all done through editing text files; the static web site is the final product. 

A basic Jekyll site usually looks something like this:

{% highlight code %}
.
├── _config.yml
├── _data
|   └── members.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.md
|   └── on-simplicity-in-technology.md
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
|   └── 2009-04-26-barcamp-boston-4-roundup.md
├── _sass
|   ├── _base.scss
|   └── _layout.scss
├── _site
├── .jekyll-metadata
└── index.html # can also be an 'index.md' with valid YAML Frontmatter
{% endhighlight %}

<blockquote>
	<h4>Directory Structure</h4>
	Starting Jekyll 3.2, a new Jekyll project bootstrapped with <code>jekyll new</code> uses <a href="https://jekyllrb.com/docs/themes/">gem-based themes</a> to define the look of the site. This results in a lighter default directory structure : <code>_layouts</code>, <code>_includes</code> and <code>_sass</code> are stored in the theme-gem, by default.

	minima is the current default theme, and <code>bundle show minima</code> will show you where minima theme's files are stored on your computer.
</blockquote>

An overview of what each of these does:


