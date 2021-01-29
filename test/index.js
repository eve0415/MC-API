const { paper } = require("../lib");
const fs = require("fs");

(async () => {
    const data = await paper.getVersionGroupBuilds("paper", "1.12");
    console.log(data.builds[0])
})()
