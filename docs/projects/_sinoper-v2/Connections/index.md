---
layout: article
title: Connections
color-scheme: paper
category: Connections
index: 2
---

Sinoper's Connections are individual classes and libraries that extend his capabilities and allow him to connect to external tools. For example, his [SinoperTwitchUser](tw-user) connection provides him with a Twitch IRC client through which to read and write to twitch chat, and a number of functions to handle overhead. To contrast, he also has a **SinoperMidi** connection which simply wraps a midi Input class for him to read from.

Below is an unrelated sample code snippet.

```javascript
/**
 * Generates one random bird fact.
 * @param {boolean | null} secret - Whether to force or avoid facts from the 'secret' list. When null, allows both secret and non-secret facts.
 * @return {Promise<Document>}
 */
async bird_fact(secret: boolean | null = null): Promise<Document> {
	const facts = await this.bird_facts(1, secret)
	return facts[0]
}
```

{% include under-construction.html %}
