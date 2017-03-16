---
layout: post
title:  "Basic Usage"
date:   2016-12-19 
categories: jekyll update
comments: true
featured: true
---


The Jekyll gem makes a jekyll executable available to you in your Terminal window. You can use this command in a number of ways:
 <!--more-->

{% highlight code %}
$ jekyll build
# => The current folder will be generated into ./_site

$ jekyll build --destination {% raw %}<destination>{% endraw %} 
# => The current folder will be generated into <destination>

$ jekyll build --source <source> --destination <destination>
# => The <source> folder will be generated into <destination>

$ jekyll build --watch
# => The current folder will be generated into ./_site,
#    watched for changes, and regenerated automatically.

{% endhighlight %}

<blockquote>
	<h4>Changes to _config.yml are not included during automatic regeneration.</h4>
	The <code>_config.yml</code> master configuration file contains global configurations and variable definitions that are read once at execution time. Changes made to _config.yml during automatic regeneration are not loaded until the next execution.
Note <a href="http://jekyllrb.com/docs/datafiles/">Data Files</a> are included and reloaded during automatic regeneration.

</blockquote>

[file-issue]:https://github.com/jekyll/jekyll/issues/new
[ruby]:https://www.ruby-lang.org/en/downloads/
[rubygems]:https://rubygems.org/pages/download
[troubleshooting]:https://jekyllrb.com/docs/troubleshooting/
[extras]: https://jekyllrb.com/docs/extras/
[data-files]:http://jekyllrb.com/docs/datafiles/
