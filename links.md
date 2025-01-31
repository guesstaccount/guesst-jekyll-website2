---
layout: linktree
title: linktree
hide_nav: false
---

basically just a linktr.ee but i made it myself cause im a nerd.

{% for link in site.data.links %}
[{{ link.title }}]({{ link.url }})
{: .dlButton}
{% endfor %}