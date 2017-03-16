---
layout: post
title:  "Creating a Theme"
date:   2016-12-15 
categories: [jekyll, update]
comments: true
featured: true
---

Jekyll has an extensive theme system, which allows you to leverage community-maintained templates and styles to customize your site’s presentation. Jekyll themes package layouts, includes, and stylesheets in a way that can be overridden by your site’s content.
 <!--more-->
<h2>Installing a theme</h2>

<ol>
	<li>To install a theme, first, add the theme to your site’s <code>Gemfile</code>: 
		{% highlight code %}gem "my-awesome-theme"{% endhighlight %}
	</li>
	<li>Save the changes to you <code>Gemfile</code></li>
	<li>Run the command <code>bundle install</code> to install the theme</li>
	<li>Finally, activate the theme by adding the following to your site's <code>_config.yml</code>:
		{% highlight code %}theme: my-awesome-theme{% endhighlight %} 
	</li>
</ol>

<blockquote>You can have multiple themes listed in your site’s Gemfile, but only one theme can be selected in your site’s <code>_config.yml</code>.</blockquote>

<h2>Overriding theme defaults</h2>

Jekyll themes set default layouts, includes, and stylesheets, that can be overridden by your site’s content. For example, if your selected theme has a <code>page</code> layout, you can override the theme’s layout by creating your own <code>page</code> layout in the <code>_layouts</code> folder (e.g., <code>_layouts/page.html</code>).

Jekyll will look first to your site’s content, before looking to the theme’s defaults, for any requested file in the following folders:

<ul>
	<li><code>/_assets</code></li>
	<li><code>/_layouts</code></li>
	<li><code>/_includes</code></li>
	<li><code>/_sass</code></li>
</ul>

<blockquote>Refer to your selected theme’s documentation and source repository for more information on what files you can override.</blockquote>

To locate theme’s files on your computer, run <code>bundle show</code> followed by the name of the theme’s gem, e.g. <code>bundle show minima</code> for default Jekyll’s theme. Then copy the files you want to override, from the returned path to your root folder.

<h2>Creating a theme</h2>

Jekyll themes are distributed as Ruby gems. Don’t worry, Jekyll will help you scaffold a new theme with the <code>new-theme</code> command. Just run <code>jekyll new-theme</code> with the theme name as an argument:

{% highlight code %}
jekyll new-theme my-awesome-theme
             create /path/to/my-awesome-theme/_layouts
             create /path/to/my-awesome-theme/_includes
             create /path/to/my-awesome-theme/_sass
             create /path/to/my-awesome-theme/_layouts/page.html
             create /path/to/my-awesome-theme/_layouts/post.html
             create /path/to/my-awesome-theme/_layouts/default.html
             create /path/to/my-awesome-theme/Gemfile
             create /path/to/my-awesome-theme/my-awesome-theme.gemspec
             create /path/to/my-awesome-theme/README.md
             create /path/to/my-awesome-theme/LICENSE.txt
         initialize /path/to/my-awesome-theme/.git
             create /path/to/my-awesome-theme/.gitignore
Your new Jekyll theme, my-awesome-theme, is ready for you in /path/to/my-awesome-theme!
For help getting started, read /path/to/my-awesome-theme/README.md.
{% endhighlight %} 

Add your template files in the corresponding folders, complete the <code>.gemspec</code> and the README files according to your needs.

<h2>Layouts and includes</h2>

Theme layouts and includes work just like they work in any Jekyll site. Place layouts in your theme’s <code>/_layouts</code> folder, and place includes in your themes <code>/_includes</code> folder.

For example, if your theme has a <code>/_layouts/page.html</code> file, and a page has <code>layout: page</code> in its YAML front matter, Jekyll will first look to the site’s <code>_layouts</code> folder for a the <code>page</code> layout, and if none exists, will use your theme’s page layout.


<h2>Assets</h2>

Any file in <code>/assets</code> will be copied over to the user’s site upon build unless they have a file with the same relative path. You may ship any kind of asset here: SCSS, an image, a webfont, etc. These files behave just like pages and static files in Jekyll: if the file has YAML front matter at the top, then it will be rendered. If it does not have YAML front matter, it will simply be copied over into the resulting site. This allows theme creators to ship a default <code>/assets/styles.scss</code> file which their layouts can depend on as <code>/assets/styles.css</code>.

All files in <code>/assets</code> will be output into the compiled site in the <code>/assets</code> folder just as you’d expect from using Jekyll on your sites.

<h2>Stylesheets</h2>

Your theme’s stylesheets should be placed in your theme’s <code>/_sass</code> folder, again, just as you would when authoring a Jekyll site. Your theme’s styles can be included in the user’s stylesheet using the <code>@import</code> directive.

<h2>Documenting your theme</h2>

Your theme should include a <code>/README.md</code> file, which explains how site authors can install and use your theme. What layouts are included? What includes? Do they need to add anything special to their site’s configuration file?

<h2>Adding a screenshot</h2>

Themes are visual. Show users what your theme looks like by including a screenshot as <code>/screenshot.png</code> within your theme’s repository where it can be retrieved programatically. You can also include this screenshot within your theme’s documentation.

<h2>Previewing your theme</h2>

To preview your theme as you’re authoring it, it may be helpful to add dummy content in, for example, <code>/index.html</code> and <code>page.html</code> files. This will allow you to use the <code>jekyll build</code> and <code>jekyll serve</code> commands to preview your theme, just as you’d preview a Jekyll site.

<blockquote>If you do preview your theme locally, be sure to add <code>/_site</code> to your theme’s <code>.gitignore</code> file to prevent the compiled site from also being included when you distribute your theme.</blockquote>

<h2>Publishing your theme</h2>

Themes are published via [RubyGems.org][rubygems]. You’ll need a [RubyGems account][rubygems-account], which you can create for free.
<ul>
	<li>First, package your theme, by running the following command, replacing <code>my-awesome-theme</code> with the name of your theme:
		{% highlight code %}gem build my-awesome-theme.gemspec{% endhighlight %}
	</li>
	<li>Next, push your packaged theme up to the RubyGems service, by running the following command, again replacing <code>my-awesome-theme</code> with the name of your theme:
		{% highlight code %}gem push my-awesome-theme-*.gem {% endhighlight %}
	</li>
	<li>To release a new version of your theme, simply update the version number in the gemspec file, ( my-awesome-jekyll-theme.gemspec in this example ), and then repeat Steps 1 & 2 above. We recommend that you follow <a href="https://semver.org">Semantic Versioning</a> while bumping your theme-version.</li>
</ul> 

<!-- Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk]. -->

[rubygems]: https://rubygems.org
[rubygems-account]: https://rubygems.org/sign_up
[semver]: https://semver.org
