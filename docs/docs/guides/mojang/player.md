---
id: "player"
title: "Interacting with player's data"
sidebar_label: "Player"
---

```js
const { mojang } = require('mc-api');

// Fetch player's data
const player = await mojang.getUUID('eve0415');
console.log(player);

// Fetch skin
const skin = await player.getSkin();
console.log(skin);

// You can know which skin type the user are using
console.log(skin.type);

// Get skin/cape URL
// If the player has not set their custom skin or cape, it will be null
console.log(skin.skin);
console.log(skin.cape);
```
