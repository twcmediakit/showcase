---
layout: page
---
{% include JB/setup %}

<!-- Start Section Portfolio Filter -->
<section id="portfolio-filter" class="container margin-50">
    <div class="row">
        <div class="span12">
            <div class="dropdown">
                <div class="dropmenu">
                    <p class="selected">Selection</p>
                    <i class="font-icon-arrow-simple-down"></i>
                </div>
                <div class="dropmenu-active">
                    <ul class="option-set" data-option-key="filter">
                        <li><a href="#filter" data-option-value=".design">Television</a></li>
                        <li><a href="#filter" data-option-value=".digital">Web</a></li>
                        <li><a href="#filter" data-option-value=".icon">Mobile</a></li>
                        <li><a href="#filter" data-option-value=".video">Every Screen</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End Section Portfolio Filter -->

<!-- Start Section Portfolio Projects -->
<section id="portfolio" class="container">
    <div class="row">
        <div id="portfolio-projects">
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
        </div>
    </div>
</section>


