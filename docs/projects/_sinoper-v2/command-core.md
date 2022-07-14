---
layout: article
title: Core and Structure
color-scheme: paper
index: 1
last-edited: 6/26/2022
toc: true
---


{% include heading-with-link.md text='Structure' first=true %}
Sinoper's overall structure stems from a **Core**, which has a number of [connections](Connections) attached to it. Each connection is contained directly within the Core, and event handlers are attached on startup to each part of each connection that can generate an event - as of right now, this includes twitch messages and midi messages.

Connections will occasionally require special arrangements of their own, of course. As of right now, there are two additional components needed. The first is a small suite of modules to facilitate the use of various secret tokens - setting them up as environment variables, and generating tokens through different flow methods. The second is the [Overlay Client](overlay#overlay-client) since it needs to be built separately from its [connection, aka the Overlay Server](overlay#overlay-server) for file management reasons.

{% include heading-with-link.md text='Command Core' %}
This is the central core of Sinoper which performs all of the handling of commands. It accepts inputs from Twitch IRC, Discord, Spotify *(unimplemented)*, and MIDI, parses those inputs into commands, and then makes sure the requisite action is performed.

{% include heading-with-link.md text='Command Parsing via Regex' %}
Although each form of input has an event handler attached to it, the most involved event handler is the one which handles both Twitch and Discord messages. Instead of commands being formatted traditionally like `command arg-1 arg-2`, I wanted to subject myself to a particular challenge of parsing commands from plain sentences. For example, I can tell the bot to shut down by saying `:V you can go to sleep now, buddy`. The reasoning for this is discussed more [here](/sinoper-v1#command-parsing-via-regex).

{% include under-construction.html %}
