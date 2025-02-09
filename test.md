---
layout: mainLinks
title: listen 🎧
---

<!-- {% include listen-logos.html %} -->

<button class="dlButton">wanna free download?</button>

<script>
    document.querySelector('.dlButton').addEventListener('click', function() {
        const downloadDiv = document.getElementById('downloaddiv');
        if (downloadDiv.style.display === 'none' || downloadDiv.style.display === '') {
            downloadDiv.style.display = 'block';
        } else {
            downloadDiv.style.display = 'none';
        }
    });
</script>

<div id="downloaddiv">
    <p>email me and i'll send it to you! :)</p>
    {% include email2.html %}
</div>

<div class='releaseGrid'>
    {% for song in site.data.songs %}
    <a href="https://song.link/{{ song.url }}" target="_blank" rel="noopener noreferrer"><img width="100%" src="https://files.guesst.net/file/guesst-files/album-art/{{ song.title | replace: ' ', '%20' }}.jpg"></a>
    {% endfor %}
</div>

<style>
    #downloaddiv {
        display:none;
        background-color: #333333;
        margin: 20px;
        text-align: center;
    }
    .dlButton {
        width:100%;
        margin-bottom: 2px;
    }
    .releaseGrid {
        gap: 1vh;
    }
    .releaseGrid img {
        height: auto;
        display: block;
        transition: transform 0.05s ease-in-out;
        outline: var(--depth) solid rgba(0,0,0,0.5);
        outline-offset: calc(-1 * var(--depth));
    }

    .releaseGrid img {
        transition: transform 0.2s ease-in-out;
    }

    .releaseGrid img:hover {
        animation: bounce 0.2s forwards;
    }

    .releaseGrid img:not(:hover) {
        animation: unbounce 0.2s forwards;
    }

    @keyframes bounce {
    0% {
        transform: scale(1) translateY(0);
    }
    40% {
        transform: scale(1.12)
    }
    60% {
        transform: scale(1.08)
    }
    80% {
        transform: scale(1.12)
    }
    100% {
        transform: scale(1.1)
    }
    }

    @keyframes unbounce {
    0% {
        transform: scale(1.1) translateY(0);
    }
    40% {
        transform: scale(.98)
    }
    60% {
        transform: scale(1.02)
    }
    80% {
        transform: scale(.99)
    }
    100% {
        transform: scale(1)
    }
    }
</style>