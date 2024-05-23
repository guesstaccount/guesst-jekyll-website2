---
layout: mainLinks
title: discography
---

## releases

<ul class="discogImage">
  {% for post in site.categories.listen %}
    <li>
        <a href="{{ post.url }}"><img class="discogImage" src="/assets/images/{{ post.coverPath }}" alt="{{ post.songTitle }}"></a>
        <p><a href="/assets/files/{{ post.download }}" download="">free download</a></p>
    </li>
    
  {% endfor %}
</ul>