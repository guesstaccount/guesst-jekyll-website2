---
layout: white-epk
title: 
---

# portfolio

everything i have mixed, produced, or otherwise made / helped make with other people.

<ul class="portfolio-grid">
  {% for item in site.data.portfolio %}
    <li class="video-grid-item">
      <div class="video-container">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/{{ item.id }}" title="YouTube video player" frameborder="0" allow="accelerometer; controls=0; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <p>roles: {{ item.role }}</p>
    </li>
  {% endfor %}
</ul>