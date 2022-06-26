---
layout: article
title: Sinoper V.2 / Assistant
color-scheme: paper
index: 0
last-edited: 6/26/2022
---

Sinoper is a livestreaming assistant written in TypeScript with Node.js. He can connect to [Twitch.tv's IRC](Connections/tw-user) and [Discord's servers](Connections/misc#discord-connection) as a chatbot, access [Twitch's API](Connections/tw-api) to make requests (such as changing the stream's title, category, and tags, or starting polls in chat), manage the song currently playing on stream through [Spotify's API](Connections/misc#spotify-connection), and manage the [stream overlay](overlay-client) through a [local webserver](Connections/overlay-server). His long-term memory (list of 'bird facts', dictionary of Twitch API ids corresponding to certain games and such, saved data on stream regulars, etc) is kept in [MongoDB](Connections/mongo). He's also able to take input from the [MIDI](Connections/misc#midi-connection) keyboard that I use as a makeshift stream deck.

{% include heading-with-link.md text='Abstract' %}
An improvement over [V.1](/sinoper-v1), this version of Sinoper has progressed from being purely a chatbot to being a kind of digital assistant. Most specifically, his purpose now is as a livestreaming assistant for when I'm streaming on [Twitch.tv](https://twitch.tv). There's a lot that goes into running a livestream and, although I can handle things on my own, Sinoper's assistance makes a huge difference. Of course, as with all my projects, he also has a dual purpose in helping me learn and gain experience with a wide variety of tools. Honestly, this is my most involved project yet. It's also worth noting that, although all the facets discussed here are operational, the process of connecting them all together has only just begun.

{% include heading-with-link.md text='Inception' %}
I began rewriting Sinoper in **June 2021**, for [various reasons](/sinoper-v1/sunset). Originally, I was going to rewrite it in Ruby because I enjoy the language, but I quickly realized while doing some research that Ruby's threading limitations would be too much to have to work around. As I saw it, I had two real options - Python and JavaScript - as they were the languages with the most most well-documented Discord and Twitch bot libraries. The main reason I settled on JavaScript was because it was the language I was less familiar with at the time, and I had more interest in learning it than I did just sticking with Python.

I didn't quite realize when first setting it up just how many integrations I would really be able to attach to this version. As I got the skeleton set up, though, I remembered just how much a good foundation for a project like this is worth. Where V.1 was a mottled patchwork of random modules, V.2 is shaping up to be a clean (if complex) quilt of intentional integrations.

{% include heading-with-link.md text='Structure' %}
Sinoper's overall structure stems from a [Core](command-core), which has a number of [connections](Connections) attached to it. Each connection is contained directly within the Core, and event handlers are attached on startup to each part of each connection that can generate an event - as of right now, this includes twitch messages and midi messages. Another primary component which sits separately from its connection is the [Overlay Client](overlay-client)'s webpage source code.
