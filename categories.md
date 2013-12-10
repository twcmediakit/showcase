---
layout: page
---
{% include JB/setup %}

<section id="portfolio-filter" class="container">
    <div class="row">
        <div class="span12">
            <div class="dropdown">
                <div class="dropmenu">
                    <p class="selected">Creative feature:</p>
                </div>
                <div class="dropmenu-active">
                    <ul class="option-set" data-option-key="filter">
                      <li><a href="" data-option-value=".all">All categories</a></li>
                    {% for category in site.categories order:ascending %} 
                      <li><a href="" data-option-value=".{{ category[0] | replace: ' ', '_' }}">{{ category[0] | capitalize | escape }}</a></li>
                    {% endfor %}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="span12">
            <a class="block desktop_float_right desktop_margin_1_0 mobile_center mobile_margin_0_auto underline font_weight_500 blue" href="index.html">Sort by medium</a>
        </div>
    </div>
</section>

<section id="portfolio" class="container">
    <div class="row">
        <div id="portfolio-projects">
          <ul id="projects">
            {% for post in site.posts %}
              <li class="item-project span4 {{ post.classes }} [[">
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
<script src="http://twcmediakit.github.io/showcase/assets/themes/showcase/js/categories.js"></script>