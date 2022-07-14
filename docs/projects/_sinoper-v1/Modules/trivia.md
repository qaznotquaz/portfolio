---
layout: article
title: Trivia
color-scheme: paper
category: Modules
index: 3
last-edited: 6/26/2022
toc: true
---


Given Sinoper's characterization as a very intelligent bird, I thought it apt to give him a decent repository of fun facts about birds (heretofore known as 'bird facts') that he can recite to both educate and entertain users. I took my time curating a list of forty-seven bird facts, making sure that they were not only *interesting* facts but also lesser-well-known ones. In addition to these, I added eight 'secret bird facts' which were more easter eggs than they were actual facts. Although V.1 doesn't differentiate between the two, [V.2 does](/sinoper-v2/Connections/mongo#bird-facts)!

{% include heading-with-link.md text='Implementation' %}
Trivia is implemented as a [`ModuleWithElements<String>`](../Modules) which loads its data from a [`birdFacts.txt`](/assets/files/birdFacts.txt) file. It listens for any message matching the [regex pattern](/sinoper-v1) `bir[db](?: ?facts?| trivia)` and will always respond immediately with a randomly-selected fact from the list. Additionally, there is some code to handle randomly selecting an [emote](info) to make repeated requests for facts feel less stale.

```java
private void birdFact(MessageReceivedEvent event) {
        String fact = getRandom();
        boolean vibeCheck = fact.contains("!");
        String face = vibeCheck ? randEmote.get(randy.nextInt(randEmote.size())) : "";
        respond(event, String.format("%s %s", fact, face), true);
        if(!vibeCheck){
            try {
                Thread.sleep(2000);
            } catch (InterruptedException ignored){}

            respond(event, ":v");
        }
    }
```

Of note, the `vibeCheck` flag is only raised for two facts: `i don't exist`, and `i will never die`. It's for a bit of ominous humour - the lack of an exclamation point is extremely [out of character](../#characterization), and Sinoper leaves a two-second pause before following the statement with a flat `:v`.
