---
layout: article
title: Library
color-scheme: paper
github: https://github.com/qaznotquaz/qazs-library
index: 0
last-edited: 6/26/2022
---


{% include heading-with-link.md text='Summary' first=true %}
Sinoper is a livestreaming assistant written in TypeScript with Node.js. He can connect to [Twitch.tv's IRC](Connections/tw-user) and [Discord's servers](Connections/misc#discord-connection) as a chatbot, access [Twitch's API](Connections/tw-api) to make requests (such as changing the stream's title, category, and tags, or starting polls in chat), manage the song currently playing on stream through [Spotify's API](Connections/misc#spotify-connection), and manage the [stream overlay](Connections/overlay#overlay-client) through a [local webserver](Connections/overlay-server). His long-term memory (list of 'bird facts', dictionary of Twitch API ids corresponding to certain games and such, saved data on stream regulars, etc) is kept in [MongoDB](Connections/mongo). He's also able to take input from the [MIDI](Connections/misc#midi-connection) keyboard that I use as a makeshift stream deck.

{% include heading-with-link.md text='Abstract' %}
An improvement over [V.1](/sinoper-v1), this version of Sinoper has progressed from being purely a chatbot to being a kind of digital assistant. Most specifically, his purpose now is as a livestreaming assistant for when I'm streaming on [Twitch.tv](https://twitch.tv). There's a lot that goes into running a livestream and, although I can handle things on my own, Sinoper's assistance makes a huge difference. Of course, as with all my projects, he also has a dual purpose in helping me learn and gain experience with a wide variety of tools. As of right now, I have most all of the pieces I need fully operational - I just need to connect them together.

{% include heading-with-link.md text='Timeline' %}
I began rewriting Sinoper in **June 2021**, for [various reasons](/sinoper-v1/sunset). Originally, I began to rewrite it in Ruby for no particular reason other than that I enjoy the language, and development moved along fairly slowly. I got the basics of the Discord client and the Twitch API library functional over the course of **2021**, but I had trouble drafting up a plan for keeping all the pieces together using Ruby. I paused active development for the Fall semester of **2021** because I needed to focus on graduating, and I took the time to reconsider my choice of language. After some research, I came to realize around summertime that Ruby's threading limitations would be too much to have to work around.

From there, as I saw it, I had two real options: Python and JavaScript. Both languages are widely used for chatbot implementations for good reason. I chose JavaScript over Python for two main reasons. First of all, I didn't have as much familiarity with JS at the time so I felt I had more to learn through it than I did through Python. And the second, more concrete reason is because one of the most important features of this implementation is its [local webserver](Connections/overlay), which would require some amount of JS anyways.

With that decided, I began recreating the bot again with renewed confidence. In April, I reached out to a [friend of mine](https://github.com/ZomoXYZ) with much more experience in JavaScript to ask for assistance. Once I'd explained the project, they actually recommended I switch over to TypeScript given the intended scope - and even walked me through the process of converting the JS project to TS. Since then, I've continued occasionally adding to the project during but, because of a number of life events *(including a wedding and a positive COVID test)*, I have not been able to spend as much time on it as I would've liked.

{% include heading-with-link.md text='Learning Opportunities' %}
The most important thing I have learned from developing Sinoper is the importance of a good foundation. I know this isn't a *new* lesson, but this project has shown me firsthand the real difference it can make. Sinoper V.1 lacked a foundation but I developed it anyways, and the project suffered for it. Sinoper V.2's Ruby implementation also lacked a foundation, but I was mindful of that and didn't over-invest my time. Now, Sinoper V.2's TypeScript implementation has a very clear direction and structure plan in mind and development is going to be much smoother.

Philosophical lessons like the above aside, Sinoper V.2 has also provided me with a platform to practice a variety of skills, and pick up a variety of others. Setting up the connections alone has been quite the task - I'm dealing with multiple APIs and concurrent message streams, becoming familiar with a NoSQL database, writing  the front and backend of a webserver with a live socket, and making sure all my tokens are fresh. I've also been learning more about the frameworks I'm using. I've learned the powers (and limitations) of Node.JS and been introduced to implementing an involved build process, and I intend to use that familiarity to be able learn other frameworks more quickly.
