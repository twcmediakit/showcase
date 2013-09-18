---
layout: page
---
{% include JB/setup %}

<!-- Start Section Portfolio Filter -->
<section id="portfolio-filter" class="container">
    <div class="row">
        <div class="span12">
            <div class="dropdown">
                <div class="dropmenu">
                    <p class="selected">Select a creative type:</p>
                </div>
                <div class="dropmenu-active">
                    <ul class="option-set" data-option-key="filter">
                        <li><a href="#filter" data-option-value=".television">Television</a></li>
                        <li><a href="#filter" data-option-value=".desktop">Desktop</a></li>
                        <li><a href="#filter" data-option-value=".tablet">Tablet</a></li>
                        <li><a href="#filter" data-option-value=".mobile">Mobile</a></li>
                        <li><a href="#filter" data-option-value=".all">All screens</a></li>
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
              <li class="item-project span4 {{ post.classes }}">
                <a href="{{ BASE_PATH }}{{ post.url }}">
                  <h5>
                    {{ post.title }}
                    <span class="arrow-port"></span>
                  </h5>      
<!-- 
                </a>
                <a class="hover-wrap fancybox" href="{{ post.largeImg }}" data-fancybox-group="gallery" title="{{ page.tagline}}">
 --> 
                  <img src="{{ post.smallImg }}" />
                  <div class="overlay"></div>
                </a>
              </li>
            {% endfor %}
          </ul>
        </div>
    </div>
</section>


