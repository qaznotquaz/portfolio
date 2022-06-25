---
layout: article
title: Sinoper V.2 / Assistant
color-scheme: paper
---

# Abstract
An improvement over [V.1](/sinoper-v1), this version of Sinoper has progressed from being purely a chatbot to being a kind of digital assistant. Most specifically, his purpose now is as a livestreaming assistant for when I'm streaming on [Twitch.tv](https://twitch.tv). There's a lot that goes into running a livestream and, although I *can* do it on my own, it's nice to have tools working automatically. Of course, as with all my projects, he also has a dual purpose in helping me learn and gain experience with a wide variety of tools. Honestly, this is my most involved project yet - working to unify everything from IRC clients and API services, to a local webserver and a MIDI input interface.

---

# Inception
I began rewriting Sinoper in June 2021, for [various reasons](/sinoper-v1/sunset). Originally, I was going to rewrite it in Ruby because I enjoy the language, but I quickly realized while doing some research that Ruby's threading limitations would be too much to have to work around. As I saw it, I had two real options - Python and JavaScript - as they were the languages with the most most well-documented Discord and Twitch bot libraries. The main reason I settled on JavaScript was because it was the language I was less familiar with at the time, and I had more interest in learning it than I did just sticking with Python. I didn't quite realize when first setting it up just how many integrations I would really be able to attach to this version. As I got the skeleton set up, though, I remembered just how much a good foundation for a project like this is worth. Where V.1 was a mottled patchwork of random modules, V.2 is shaping up to be a clean (if complex) quilt of intentional integrations.


