---
layout: linktree
title: linktree
hide_nav: false
---

<style>
.dlButton {
    text-decoration: none;  /* Remove underline */
    display: block;         /* Make buttons stack */
    margin-bottom: 10px;    /* Add space between buttons */
    text-align: center;      /* Center the text */
    position: relative;      /* For absolute positioning of image */
    padding-left: 30px;      /* Make space for the image */
}

.dlButton img {
    height: 1em;  /* Match text height */
    width: auto;  /* Maintain aspect ratio */
    position: absolute;      /* Take image out of flow */
    left: 8px;              /* Position from left edge */
    top: 50%;               /* Center vertically */
    transform: translateY(-50%);  /* Perfect vertical centering */
}
</style>

basically just a linktr.ee but i made it myself cause im a 
nerd.

<div markdown="0">
{% for link in site.data.links %}
  {% if link.url contains "youtube" %}
    {% assign color = "red" %}
    {% assign logo = "youtube-logo.svg" %}
  {% elsif link.url contains "soundcloud" %}
    {% assign color = "#ff7700" %}
    {% assign logo = "soundcloud-logo.svg" %}
  {% elsif link.url contains "discord" %}
    {% assign color = "purple" %}
    {% assign logo = "discord-logo.svg" %}
  {% elsif link.url contains "spotify" %}
    {% assign color = "#1ED760" %}
    {% assign logo = "spotify-logo.svg" %}
  {% else %}
    {% assign color = "#00DFFF" %}
    {% assign logo = "" %}
  {% endif %}

  <a href="{{ link.url }}" class="dlButton" style="background-color: {{ color }};">
    {% if logo != "" %}
      <img src="{{ site.baseurl }}/assets/images/{{ logo }}" alt="{{ link.title }} logo">
    {% endif %}
    {{ link.title }}
  </a>
{% endfor %}
</div>

<br>
<br>
<br>

<center><div class="titleLogo">{% include logo.html %}</div></center>

<br>
<br>
<br>