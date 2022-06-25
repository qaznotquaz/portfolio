---
layout: article
title: Sunsetting V.1
color-scheme: paper
---


Although this project is sentimentally important and certainly a milestone in my development experience, I decided to sunset it in **January, 2021**. There were three main reasons for this - I sort of 'lost the plot' as far as *why* I was working on it, it became too difficult to maintain, and its features had mostly lost the need for their use. I still keep the code around to reference, and to spin up the old version in case I need it to do something I haven't yet implemented in [V.2](/sinoper-v2), but I am no longer actively working on it.

{% include heading-with-link.md text='Aimless Purpose' %}
Sinoper originally began as a bot with one primary purpose - I wanted a tool that would facilitate [scraping and archiving chat messages](Modules/export) from Discord. Although I easily found a [tool](https://github.com/Tyrrrz/DiscordChatExporter) that would do this, I wanted to avoid any risk of 'botting' my personal Discord account since that could result in a ban. So, I created a bot account. Over its lifetime, however, I added a litany of other various 'fun' and 'utility' features - from running the name distribution for a [gift exchange](Modules/santa) between friends, to keeping [encrypted data](Modules/flask) that I myself did not have the password for and was only accessible by a friend. Each new feature added was appended onto a long list of [modules](Modules/) which simply grew more and more unfocused. It became very difficult to sum up the purpose for the bot in a succinct way, and that was my first indication that I had taken a wrong turn somewhere.

{% include heading-with-link.md text='Maintainability' %}
The other factor that was compounded by the slapdash way I developed this bot was its maintainability - or perhaps, the lack thereof. Every new module added was quickly moved on from after it was functional, and unfortunately I failed to write comments or documentation at any point in the process. If I ever needed to go back and fix a part of a module that I had not been recently working on, it became a nightmare trying to re-familiarize myself with the details of the implementation enough to debug them. In fact, this applied doubly to the project itself - each time I stepped away from it to focus on school, it became harder and harder to work on the next time.

{% include heading-with-link.md text='Unnecessary' %}
The difficulty of maintaining the project notwithstanding, I weathered it while its features were still useful, because at least that provided motivation to keep it working. Of course, the time eventually came when its features fell out of use. Other gift exchange bots exist, the data I kept encrypted became obsolete, and the meetings I was regularly archiving had moved off of Discord. People will still occasionally say hello, but that's about it.

{% include heading-with-link.md text='Tamagotchi' %}
The straw that broke the camel's back in all of these categories was my attempt to give the bot [feelings](Modules/tamagotchi). I had no particular reason to add this feature aside from thinking it was a 'neat idea', so it diluted the purpose even more. I didn't really *plan out* how feelings were going to work very well before implementing the various statistics used to calculate them and it reached that nightmare status on Day 2, so maintenance was going to be impossible. And, of course, although it was fun to ask 'how are you feeling?' initially, it was not something that any user - neither myself nor my friends - paid any particular mind to as soon as that novelty wore off.

----

As such, I stopped working on Sinoper V.1. That said, I did still enjoy having a chatbot and digital assistant. I began ideating and planning a re-write of the concept over the following spring semester, and started work that summer on a [new and improved version](/sinoper-v2).
