module.exports = {
  docs: {
    "Minecraft-API": ["about/intro", "about/install", "about/contribute"],
    Guides: ["guides/first",
      {
        type: "category",
        label: "CurseForge",
        items: [
          "guides/curseforge/note",
          "guides/curseforge/mod",
          "guides/curseforge/file"
        ]
      },
      {
        type: "category",
        label: "Mojang",
        items: [
          "guides/mojang/player",
        ]
      },
      {
        type: "category",
        label: "PaperMC",
        items: [
          "guides/paper/build",
        ]
      },
    ],
  },
  api: {
    API: require('./typedoc-sidebar.js'),
  }
};
