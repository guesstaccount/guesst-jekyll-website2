---
layout: mainLinks
title: presskit 📘
---

# press kit
{: .center }

{% include cloutTable.html %}

<div class="tab-container">
  <div class="tabs">
    <h2>book guesst as a...</h2>
    <button class="tab-button active" onclick="openTab('dj')">multigenre dj</button>
    <button class="tab-button" onclick="openTab('performance')">live performer</button>
  </div>

  <div id="dj" class="tab-content active">
    <!-- <h2>dj</h2> -->

    <p>i am well acquainted with standard club setup, but i can play on any hardware, as well as bring my own if needed. {% include email.html %}</p>

    <iframe width="100%" height="60" src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fguesstaccount%2Fguesst-the-native-chicago-15-mar-2025%2F" frameborder="0" ></iframe>

    <iframe width="100%" height="315" src="https://www.youtube.com/embed/L8XvVkfop9w" title="guesst x blesstonio @ the whistler chicago" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    <iframe width="100%" height="315" src="https://www.youtube.com/embed/lu2GbJZIZk4?si=twPmUAsjhbal3ste" title="guesst on stankbugz radio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    <h2>featured dj tracks</h2>

    <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1988028080%3Fsecret_token%3Ds-aEUMtXQjY80&color=%235fcaf7&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&theme_color=222222"></iframe>
  </div>

  <div id="performance" class="tab-content">
    <!-- <h2>live performance</h2> -->

    <p>electronic? pop? emo? how abouttttt... all of the above. you can expect a guesst vocal performance show to have 100% original works + flips and remixes in at least six genres. {% include email.html %}</p>

    <iframe width="100%" height="315" src="https://www.youtube.com/embed/3tHq9P9UojY" title="guesst @ color club" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    <iframe width="100%" height="315" src="https://www.youtube.com/embed/MGEBhwZxif0?si=0LZpTxoM4EIw-YRz" title="guesst @ cinecity studios" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    <h2>featured tracks</h2>

    <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1988027584&color=%235fcaf7&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
  </div>
</div>

<h2>noteable shows</h2>
- [subculture party la](https://www.instagram.com/p/CuhxbLIP-6Q/)
- <a href="#noteableshows" onclick="openLightbox('https://files.guesst.net/file/guesst-files/press-kit/wltv-at-space-dome-bass-canyon.jpeg'); return false;">bass canyon</a> space dome (as wilsonlikethevolleyball)
- opened for [umru](https://soundcloud.com/umru) @ [bookclub](bookclubchi)
- opened for [mitis](https://soundcloud.com/mitis) (as wilsonlikethevolleyball) at STAGE Nightclub Seattle
{: .noteable-shows .carrotList}

<!-- Keep the existing lightbox HTML -->
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

<style>
.tab-container {
  margin: 20px 0;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.tabs h2 {
  margin: 0px;
}

.tab-button {
  padding: 10px 20px;
  background: transparent;
  border: 2px solid #00DFFF;
  color: #00DFFF;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.tab-button.active {
  background: #00DFFF;
  color: black;
}

.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}
</style>

<script>
function openTab(tabName) {
  // Hide all tab content
  const tabContents = document.getElementsByClassName('tab-content');
  for (let content of tabContents) {
    content.classList.remove('active');
  }

  // Remove active class from all buttons
  const tabButtons = document.getElementsByClassName('tab-button');
  for (let button of tabButtons) {
    button.classList.remove('active');
  }

  // Show the selected tab content and activate the button
  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');
}

// Keep the existing lightbox JavaScript
function openLightbox(source) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxVideo = document.getElementById('lightbox-video');
    const videoSource = document.getElementById('lightbox-video-source');

    // Show the lightbox
    lightbox.style.display = 'flex';

    // Handle images vs videos based on file extension
    if (source.toLowerCase().endsWith('.jpg') || source.toLowerCase().endsWith('.jpeg') || source.toLowerCase().endsWith('.png') || source.toLowerCase().endsWith('.gif')) {
        lightboxImg.style.display = 'block';
        lightboxVideo.style.display = 'none';
        lightboxImg.src = source;
    } else if (source.toLowerCase().endsWith('.mp4') || source.toLowerCase().endsWith('.webm')) {
        lightboxImg.style.display = 'none';
        lightboxVideo.style.display = 'block';
        videoSource.src = source;
        lightboxVideo.load();
    }

    // Close when clicking outside the image/video
    lightbox.onclick = function(e) {
        if (e.target !== lightboxImg && e.target !== lightboxVideo) {
            lightbox.style.display = 'none';
            lightboxVideo.pause();
        }
    }

    // Close button functionality
    document.querySelector('.close').onclick = function() {
        lightbox.style.display = 'none';
        lightboxVideo.pause();
    }
}
</script>
