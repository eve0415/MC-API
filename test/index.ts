import { searchProject } from "../lib"

(async () => {
    const data = await searchProject({ category: 127 });
    console.log(data)
})
