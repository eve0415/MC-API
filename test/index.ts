import { curseforge } from "../lib"

(async () => {
    const data = await curseforge.searchProject({ category: 127 });
    console.log(data)
})
