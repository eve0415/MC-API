---
id: "build"
title: "Getting a build data and file"
sidebar_label: "Builds"
---

```js
const { paper } = require('aio-mc-api');

// Let's get a version info
const data = await paper.getVersion('paper', '1.16.5');
console.log(data);

// Getting the latest build number
const latest = data.builds.pop();
console.log(latest);

// Download the latest build

// Before downloading the build, we need more data.
const latestBuild = await paper.getBuild('paper', '1.16.5', latest);
console.log(latestBuild);

// Finally, download to directory jar/
await latestBuild.download('./jar/')
```
