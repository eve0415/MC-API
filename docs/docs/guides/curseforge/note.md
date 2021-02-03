---
id: "note"
title: "Read this before using CurseForge API"
sidebar_label: "Note"
---

## Interacting with projects

CurseForge API returns a rather dirty object; there are always null property, duplicate value over some properties, different property name but same meanings for various of responses for us to use easily. (It is probably used in [CurseForge Client](https://curseforge.overwolf.com/))

This library would make these responses cleaner, smaller and understandable classes so that everyone can use.

For example, when you try to search a package, the api would returns [this](../../api/classes/typings.cfproject), which most of the properties are not useful and making it harder to understand.
Instead of this full response, this library would make it more simpler and smaller like [this](../../api/classes/typings.simpleproject).

To search for the project, you can use this [method](../../api/functions/api_curseforge.getproject)

```js
curseforge.searchProject()
    .then(projects => {
        console.log(projects);
    });
```

The default return value is [SimpleProject](../../api/classes/typings.simpleproject) as I said earlier.
However if you prefer a full response instead of simple one, you can always do by giving `false` on second parameter. (The first one is a [search options](../../api/interfaces/typings.searchoptions.md))

```js
curseforge.searchProject({}, false)
    .then(projects => {
        console.log(projects);
    });
```

## Interacting with project's description and file's changelog

By using this library, you can also fetch the project's description which is the first page of the project on CurseForge website and the file's changelog.
However, CurseForge API returns `html` strings which is *not* human readable and it is also difficult to use if you are not using it for website.
Instead, this library format those html strings to `markdown` which is more cleaner and human readable.
