---
layout: article
title: Miscellaneous
color-scheme: paper
category: Connections
index: 8
---


Not all connections are created equal - although most are fairly complicated, a few are compiled onto this page because they're simple enough to not need a whole page of their own.

{% include heading-with-link.md text='Discord Connection' %}
Sinoper uses this class to connect to Discord as a bot user. In the future, message events received here will be passed up to the [Core](../command-core) for parsing. At present, however, this is the only attached handler.

```javascript
client.on('messageCreate', async message => {
	if (
		// filter out messages from servers which aren't my testing server
		message.guildId !== GuildID ||

		// filter out messages from itself
		message.author.id === ClientID
	) {
		return
	}

	console.log(message.content)

	// a bird-themed 'pong' reply
	message.channel.send('chirp :V')
})
```
