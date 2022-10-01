---
title: Optional Chaining in JavaScript
date: '2021-01-10'
categories:
  - 'javascript'
---

As of EcmaScript 262, a new feature called "optional chaining" has been introduced into the Javascript language where
you can now use?. instead of. to access properties within objects.

Let's see how it works:

```js
let person = {
	name: 'Nick',
	favoriteColor: 'green',
	hobbies: ['tennis', 'mechanical keyboard customization', 'reading', 'running'],
	address: {
		street: {
			name: 'Pumpernickel Street'
		}
	}
};

console.log(person?.name); // 'Nick'
console.log(person?.age); // undefined
```

This nifty piece of syntactic sugar helps to create readable object property calls that do not result in error if the
property doesn't exist, instead evaluating to undefined.
Don't believe it makes your code more readable?

Alright, let's look at another example:

```js
// Method 1 (Clean and Readable)
console.log(person?.address?.street?.name); // 'Pumpernickel Street'
// Method 2 (Verbose)
console.log(
	person.address ? (person.address.street ? person.address.street.name : undefined) : undefined
); // 'Pumpernickel Street'
```

Both methods are looking at each intermediate property from the object person to the property name and checking to see
if it exists. If address or streetdo not exist, then the result will be undefined.
