---
layout: article
title: MongoDB Memory
color-scheme: paper
category: Connections
index: 5
last-edited: 6/26/2022
---


Sinoper uses a MongoDB client to access its long term memory and store data for later. The collections being handled currently only include [`bird_facts`](#bird-facts) (a [much-beloved entertainment feature](/sinoper-v1/Modules/trivia) from V.1) and [`twitch_ids`](#twitch-ids), but several more are planned. That said, a simple free cluster in MongoDB's cloud will be more than enough for the small-scale data I'm working with.

The relevant connection is the `SinoperMongoDB` class, which extends a normal `MongoClient` and handles connecting to the Cloud as well as providing methods to take care of data retrieval.

{% include heading-with-link.md text='Bird Facts' %}
Each document in this collection has two fields: a `value` field containing a bird fact string, and a `secret` field, which is a boolean denoting whether the fact is a normal bird fact or a 'secret' easter egg fact. To query one or more such facts, Sinoper uses the following code, which produces JSON documents. As of yet, a text command to request bird facts has not been implemented.

```typescript
/**
 * Generates a random list of bird facts.
 * @param {number} count - How many facts to acquire.
 * @param {boolean | null} secret - Whether to force or avoid facts from the 'secret' list. When null, allows both secret and non-secret facts.
 * @return {Promise<Document[]>}
 */
async bird_facts(count: number, secret: boolean | null = null): Promise<Document[]> {
	if (!this.memory) throw 'MongoDB is not connected'

	// the bird_facts collection
	const facts = this.memory.collection('bird_facts')
	let cursor

	// if we're not interested in filtering in or out secrets, we can just aggregate the entire collection.
	// and, because we would like a random list, $sample works perfectly
	if (secret === null) {
		cursor = facts.aggregate([{ $sample: { size: count } }])
	} else {
		// if we do want to filter secrets, it's nothing more than another stage in the pipeline.
		cursor = facts.aggregate([
			{ $match: { secret: secret } },
			{ $sample: { size: count } },
		])
	}

	return await cursor.toArray()
}

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

{% include heading-with-link.md text='Twitch IDs' %}
When making API calls to Twitch, there are quite a number of contexts that will require an ID string of some sort. For example, if I wanted to add the `Programming` tag to my stream through the API, I couldn't simply use the string `'Programming'` - I would instead have to find out what the ID of the desired tag is (in this case, `a59f1e4e-257b-4bd0-90c7-189c3efbf917`) and use that in the API call. To improve readability and simplify finding and using the right ID, I have a document in this collection for each kind of ID I'll be commonly referencing. Each document's fields are used as key-value pairs, where the value is an ID for the API, and the key is a human-readable name for that ID.

{% include under-construction.html %}
