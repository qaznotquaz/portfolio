---
layout: article
title: Overlay Client
color-scheme: paper
index: 9
---

This represents the HTML, SCSS, and TS which make up the actual presentation of my interactive stream overlay. The raw webpage itself is used as a layer in [OBS](https://obsproject.com/) and has various spaces for twitch chat, scrolling text showing most recent followers and subscribers, the currently playing song, and the like. It connects to the [Overlay Server](Connections/overlay-server) through a socket and responds to commands sent there by modifying the webpage accordingly.
