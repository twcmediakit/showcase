---
layout: page
---
{% include JB/setup %}

<!-- <section id="portfolio-filter" class="container">
    <div class="row">
        <div class="span12">
            <div class="dropdown">
                <div class="dropmenu">
                    <p class="selected">Select a creative type:</p>
                </div>
                <div class="dropmenu-active">
                    <ul class="option-set" data-option-key="filter">
                    {% for i in site.tags %} 
                      <li><a href="#filter" data-option-value=".{{ site.tags[i] }}">{{ site.tags[i] }}</a></li>
                    {% endfor %}
                      <li><a href="#filter" data-option-value=".all">All tags</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section> -->
<!--
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
-->



<!-- {% for i in site.categories %}  -->
  <p>{{site.categories}}</p>
<!-- {% endfor %} -->