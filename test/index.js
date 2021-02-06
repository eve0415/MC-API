const { curseforge } = require("../lib");

(async () => {
    const data = await curseforge.getProject("238222");
    console.log(data.files[1]);
    console.log(await data.files[1].fetch())
})()
