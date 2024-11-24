---
layout: mainLinks
title: listen 🎧
---

<center>
    <button onclick="toggleAuthorNote()" class="authorNoteButton">optional reading...</button>
</center>

<div id="authorNote" style="display: none;">
    <h2>listen to my music</h2>

    <p>i would prefer you listen to my music by downloading it for free on <a href="guesstaccount.bandcamp.com" target="_blank" rel="noreferrer noopener">bandcamp</a> or below in the releases section and listening to it on your device of choice. if you can afford it, i would ask that you pay whatever you think is reasonable for the music to help me keep making it 🦋.</p>

    <p><a href="guesstaccount.bandcamp.com" target="_blank" rel="noreferrer noopener">buy on bandcamp</a></p>

    <p><a href="https://square.link/u/Mhc0OF7O" target="_blank" rel="noreferrer noopener">pay me a subscription</a></p>

    <p><a href="https://square.link/u/Wdq6mOFc" target="_blank" rel="noreferrer noopener">pay me once</a></p>
</div>

<script>
function toggleAuthorNote() {
    var note = document.getElementById("authorNote");
    if (note.style.display === "none") {
        note.style.display = "block";
    } else {
        note.style.display = "none";
    }
}
</script>


## releases

<ul class="releaseGrid">
  {% for post in site.categories.listen %}
    <li>
      <a href="{{ post.url }}"><img class="releaseListImage" src="{{ post.coverPath }}" alt="{{ post.title }}"></a>
    </li>
  {% endfor %}
</ul>

<!-- [all releases](discography.html) -->

## philosophy

i believe in the potential for a [decentralized copyright free royalty system](https://youtu.be/PJSTFzhs1O4?si=LWINS-aeWHBl2Wb_) that does not rely on the ample number of middlemen currently required for people to consume art.

i believe that art consumers will support and appreciate art creators and that an economy of artists can exists without:
- streaming platforms that pay little to nothing using [blitzscaling](https://www.blitzscaling.com/) (derogatory) to create market dominance and force people into using inferior services or pay more for the "full version".

- predatory labels that keep the music industry in a chokehold.

- [algorithms that limit creativity](https://youtu.be/-Qo3ehkykkM?si=3_iAslMELatTrnGd) by prioritizing content that benefits a platform instead of allowing for authentic artist expression free from corporate meddling.

- scarcity mindsets that reinforce toxic competitive zero sum ideologies wherein artists are pitted against eachother fighting for scraps while the leadership of monopolistic corporations take the lionshare of revenue generated from the art.
{: .carrotList}

i believe that the artists, employees, and listeners define the music industry: together, we can build a culture that we want to see. all that is necessary is to divest in capitalistic structures, support radical new approaches, and above all, help one another without promise of compensation, because its the right thing to do.