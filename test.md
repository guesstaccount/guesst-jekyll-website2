---
layout: mainLinks
---

<!-- {% include listen-logos.html %} -->

<div class='releaseGrid'>
    {% for song in site.data.songs %}
    <a href="https://song.link/{{ song.url }}"><img width="100%" src="https://files.guesst.net/file/guesst-files/album-art/test/{{ song.title | replace: ' ', '%20' }}.jpg"></a>
    {% endfor %}
</div>

<style>
    .dlButton {
        width:100%;
        margin-bottom: 2px;
    }
</style>