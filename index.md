---
layout: page
---
{% include JB/setup %}

<section id="portfolio-filter" class="container">
    <div class="row">
        <div class="span12">
            <div class="dropdown">
                <div class="dropmenu">
                    <p class="selected">Creative Medium:</p>
                </div>
                <div class="dropmenu-active">
                    <ul class="option-set" data-option-key="filter">
                        <li><a href="#filter" data-option-value=".all">All media</a></li>
                        <li><a href="#filter" data-option-value=".desktop">Desktop</a></li>
                        <li><a href="#filter" data-option-value=".mobile">Mobile</a></li>
                        <li><a href="#filter" data-option-value=".tablet">Tablet</a></li>
                        <li><a href="#filter" data-option-value=".television">Television</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="span12">
            <a class="block desktop_float_right desktop_margin_1_0 mobile_center mobile_margin_0_auto underline font_weight_500 blue" href="categories.html">Sort by category</a>
        </div>
    </div>
</section>
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
                  <img src="{{ post.img1 }}" />
                </a>
              </li>
            {% endfor %}
          </ul>
        </div>
    </div>
</section>


