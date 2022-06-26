---
layout: article
title: Overlay
color-scheme: paper
category: Connections
index: 6
last-edited: 6/26/2022
---


{% include heading-with-link.md text='Overlay Server' first=true %}
A class to host a dynamic local webserver and send commands to the **Overlay Client** once one is connected.

{% include heading-with-link.md text='Overlay Client' %}
This represents the HTML, SCSS, and TS which make up the actual presentation of my interactive stream overlay. The raw webpage itself is used as a layer in [OBS](https://obsproject.com/) and has various spaces for twitch chat, scrolling text showing most recent followers and subscribers, the currently playing song, and the like. It connects to the **Overlay Server** through a socket and responds to commands sent there by modifying the webpage accordingly.

{% include under-construction.html %}
