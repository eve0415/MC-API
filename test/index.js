const { searchProject, getProject, getUUID } = require("../lib");

(async () => {
    const data = await getUUID("eve0415");
    console.log(await data.getSkin())
})()
