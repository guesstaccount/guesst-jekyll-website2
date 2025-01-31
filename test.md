---
layout: mainLinks
---

{% for song in site.data.songs %}
<iframe width="100%" height="150" src="https://embed.odesli.co/?url={{ song.spotify }}&theme=dark" frameborder="0" allowtransparency allowfullscreen sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"></iframe>
<center><a href="{{ song.dl }}"><button class="dlButton">download {{ song.title }}</button></a></center>
<br>
{% endfor %}

<style>
    .dlButton {
        width:100%;
    }
</style>