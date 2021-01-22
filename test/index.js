const { searchProject, getProject } = require("../lib");

(async () => {
    const data = await getProject(223852);
    console.log(data)
})()
