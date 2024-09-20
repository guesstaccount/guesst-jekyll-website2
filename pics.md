---
layout: mainLinks
title: pics
---

## fake self hosted Instagram

<div class="pic-grid">
  {% for media in site.data.finsta %}
    {% if media.type == "image" %}
      <div class="pic-grid-item" data-type="image" data-src="{{ media.src }}">
        <img src="{{ media.src }}" alt="{{ media.alt }}">
      </div>
    {% elsif media.type == "video" %}
      <div class="pic-grid-item" data-type="video" data-src="{{ media.src }}">
        <video controls>
          <source src="{{ media.src }}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    {% endif %}
  {% endfor %}
</div>

<div id="lightbox" class="lightbox">
  <span class="close">&times;</span>
  <span class="arrow left">&#10094;</span>
  <span class="arrow right">&#10095;</span>
  <img class="lightbox-content" id="lightbox-img">
  <video class="lightbox-content" id="lightbox-video" controls>
    <source id="lightbox-video-source" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>
