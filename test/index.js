const { curseforge } = require("../lib");

(async () => {
    const data = await curseforge.getSectionCategoryList("MOD");
    console.log(data);
})()
