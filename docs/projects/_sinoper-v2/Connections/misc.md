---
layout: article
title: Miscellaneous
color-scheme: paper
category: Connections
index: 8
---


Not all connections are created equal - although most are fairly complicated, a few are compiled onto this page because they're simple enough to not need a whole page of their own.

{% include heading-with-link.md text='Discord Connection' %}
Sinoper uses this class to connect to Discord as a bot user. In the future, message events received here will be passed up to the [Core](../command-core) for parsing. At present however, there's only a very simple placeholder handler (shown below).

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

{% include heading-with-link.md text='MIDI Connection' %}
This connection is a very simple wrapper for [node-midi](https://www.npmjs.com/package/midi)'s Input class, and its entirety is shown below.

```javascript
import { Input } from 'midi'

export class SinoperMidi extends Input {
	constructor() {
		super()

		this.openPort(0)
		this.ignoreTypes(false, true, true)
	}
}
```
