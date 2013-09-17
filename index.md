---
layout: page
---
{% include JB/setup %}

<ul id="projects">
  {% for post in site.posts %}
    <li class="item-project span4 {{ page.tags }}">
      <h5>
        <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
        <span class="arrow-port"></span>
      </h5>      
      <a class="hover-wrap fancybox" href="{{ post.largeImg }}" data-fancybox-group="gallery" title="{{ page.tagline}}">
        <img src="{{ post.smallImg }}" />
        <div class="overlay"></div>
        <i class="font-icon-plus"></i>
      </a>
    </li>
  {% endfor %}
</ul>