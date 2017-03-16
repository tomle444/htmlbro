---
layout: post
title:  "Installation"
date:   2016-12-19 
categories: jekyll update
comments: true

---


Getting Jekyll installed and ready-to-go should only take a few minutes. If it ever becomes a pain, please [file an issue][file-issue]
<!--more-->
 
<h2>Requirements</h2>

Installing Jekyll is easy and straight-forward, but there are a few requirements you'll need to make sure your system has before you start.

<ul> 
	<li><a href="https://www.ruby-lang.org/en/downloads/">Ruby</a> (including development headers, v1.9.3 or above for Jekyll 2 and v2 or above for Jekyll 3)</li>
	<li><a href="https://rubygems.org/pages/download">RubyGems</a></li>
	<li>Linux, Unix, or macOS</li>
	<li><a href="https://nodejs.org/en/">NodeJS</a>, or another JavaScript runtime (Jekyll 2 and earlier, for CoffeeScript support).</li>
	<li><a href="https://www.python.org/downloads/">Python 2.7</a></li>
</ul>

<blockquote>
	<h4>Running Jekyll on Windows</h4>
	While Windows is not officially supported, it is possible to get it running on Windows. Special instructions can be found on our <a href="https://jekyllrb.com/docs/windows/#installation">Windows-specific docs page</a>.
</blockquote>

<h2>Install with RubyGems</h2>

The best way to install [RubyGems][rubygems]. At the terminal prompt, simply run the following command to install Jekyll:

{% highlight code %}
$ gem install jekyll
{% endhighlight %}

All of Jekyll’s gem dependencies are automatically installed by the above command, so you won’t have to worry about them at all. If you have problems installing Jekyll, check out the [troubleshooting][troubleshooting] page or [report an issue][file-issue] so the Jekyll community can improve the experience for everyone.

<blockquote>
	<h4>Installing Xcode Command-Line Tools</h4>
	If you run into issues installing Jekyll's dependencies which make use of native extensions and are using macOS, you will need to install Xcode and the Command-Line Tools it ships with. Download them in  <code>Preferences → Downloads → Components</code>.
</blockquote>

<h2>Pre-releases</h2> 

In order to install a pre-release, make sure you have all the requirements installed properly and run:
{% highlight code %} gem install jekyll --pre{% endhighlight %}

This will install the latest pre-release. If you want a particular pre-release, use the <code>-v</code> switch to indicate the version you’d like to install:

{% highlight code %}
gem install jekyll -v '2.0.0.alpha.1'
{% endhighlight %}

If you’d like to install a development version of Jekyll, the process is a bit more involved. This gives you the advantage of having the latest and greatest, but may be unstable.

{% highlight code %}
$ git clone git://github.com/jekyll/jekyll.git
$ cd jekyll
$ script/bootstrap
$ bundle exec rake build
$ ls pkg/*.gem | head -n 1 | xargs gem install -l
{% endhighlight %}

<h2>Optional Extras</h2>

There are a number of (optional) extra features that Jekyll supports that you may want to install, depending on how you plan to use Jekyll. These extras include LaTeX support, and the use of alternative content rendering engines. Check out [the extras page][extras] for more information.

<blockquote>
	<h4>ProTip&trade;: Enable Syntax Highlighting</h4>
	If you’re the kind of person who is using Jekyll, then chances are you’ll want to enable syntax highlighting using <a href="http://pygments.org/">Pygments</a> or <a href="https://github.com/jneen/rouge">Rouge</a>. You should really check out how to do that before you go any farther.
</blockquote>

<h2>Already Have Jekyll?</h2>

Before you start developing with Jekyll, you may want to check that you’re up to date with the latest version. To find your version of Jekyll, run one of these commands:

{% highlight code %}
$ jekyll --version
$ gem list jekyll
{% endhighlight %}

You can also use [RubyGems][rubygems] to find the current versioning of any gem. But you can also use the gem command line tool:

{% highlight code %}
$ gem search jekyll --remote
{% endhighlight %}

and you’ll search for just the name <code>jekyll</code>, and in brackets will be latest version. Another way to check if you have the latest version is to run the command <code>gem outdated</code>. This will provide a list of all the gems on your system that need to be updated. If you aren’t running the latest version, run this command:

{% highlight code %}
$ gem update jekyll
{% endhighlight %}

Now that you’ve got everything up-to-date and installed, let’s get to work!

[file-issue]:https://github.com/jekyll/jekyll/issues/new
[ruby]:https://www.ruby-lang.org/en/downloads/
[rubygems]:https://rubygems.org/pages/download
[troubleshooting]:https://jekyllrb.com/docs/troubleshooting/
[extras]: https://jekyllrb.com/docs/extras/
