---
layout: article
title: Command Core
color-scheme: paper
index: 1
---

This is the central core of Sinoper which performs all of the handling of commands. It accepts inputs from Twitch IRC, Discord, Spotify *(unimplemented)*, and MIDI, parses those inputs into commands, and then makes sure the requisite action is performed.

{% include heading-with-link.md text='Command Parsing via Regex' %}
Although each form of input has an event handler attached to it, the most involved event handler is the one which handles both Twitch and Discord messages. Instead of commands being formatted traditionally like `command arg-1 arg-2`, I wanted to subject myself to a particular challenge of parsing commands from plain sentences. For example, I can tell the bot to shut down by saying ':V you can go to sleep now, buddy'. The reasoning for this is discussed more [here](/sinoper-v1#command-parsing-via-regex).

{% include under-construction.html %}
