const { paper } = require("../lib");

(async () => {
    const data = await paper.getVersion("paper", "1.16.5");
    console.log(data.builds.pop());
})()
