---
id: "mod"
title: "Fetching mod"
sidebar_label: "Mod"
---

CurseForge handles mods, modpacks, resources and many other projects.

If you want to filter out the category or and sections, please refer to [Sections](../../api/variables/typings.sectiontypes) and [Category](../../api/variables/typings.categorylist).

:::tip Specifying [category option](../../api/interfaces/typings.searchoptions#category)
You can use ID or name for this option.

However, there are several conflicting section names such as `MISCELLANEOUS`, `MAGIC` which are both used in mods and modpacks.

_For these, you **must** use ID or otherwise you might get a wrong category._

ex) You want to search for mods that are related to MAGIC, but you might get a modpack list that are related to MAGIC.

If you don't pass a category option, then it will return modpack list as default.
:::

### Fetching a mod list

You can use a [option](../../api/interfaces/typings.searchoptions.md) to specify and search for what you want.

```js
const { curseforge } = require('mc-api');

// Fetching a mod list
// Category 6 means mods in overall
curseforge.searchProject( { category: 6 } )
    .then(projects => {
        console.log(projects);
    });
```

### Fetching a featured mod list

You can use a [option](../../api/interfaces/typings.featureoptions.md) to specify and fetch how many packages you want for each selections.

```js
const { curseforge } = require('mc-api');

// Fetching a featured/popular/latest mod list
// Instead of category ID 6, you can use a name
curseforge.getFeatured( { category: 'MOD' } )
    .then(projects => {
        // Featured packages
        console.log(projects[0]);
        
        // Popular packages
        console.log(projects[1]);
        
        // The latest updated packages
        console.log(projects[2]);
    });
```

### Fetching a specific mod

You need a project ID to use this method.

```js
const { curseforge } = require('mc-api');

// Fetching a mod
curseforge.getProject( 123456 )
    .then(project => {
        console.log(project);
    });
    
// Fetching multiple mods
curseforge.getMultipleProjects( [123456, 789101] )
    .then(projects => {
        console.log(projects);
    });
```
