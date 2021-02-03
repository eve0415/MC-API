---
id: "file"
title: "Getting a mod's latest file URL"
sidebar_label: "Files"
---

```js
const { curseforge } = require('aio-mc-api');

// Let's search for JEI, we all use
// Category 6 means mods in overall
const projects = await curseforge.searchProject( { category: 6, filter: 'JEI' } );

// The first one should be JEI
const jei = projects[0];
console.log(jei.name);

// Fetch the project's description
const desc = await jei.getDescription();
console.log(desc);

// Let's filter out JEI's file that can be used for version 1.12.2 from a list of files info
const file = jei.files.filter(f => f.isLatest && f.gameVersion.includes('1.12.2'))[0];
console.log(file);

// Fetch the changelog for this file
const changelog = await file.getChangelog();
console.log(changelog);

// The download link to this file is;
console.log(file.url);
```
