//pwease dont steal my key🥺🥺🥺
const key = "f95b4ea2-28f6-45a1-94fe-c0ee1079de09"

fetch(`https://api.hypixel.net/key?key=${key}`)
    .then(result=> result.json())
    .then(({record}) =>{
        console.log(record.key)
    })

fetch(`https://api.hypixel.net/player?uuid=eb432695-c666-43dd-b5cf-a755d497e34d&key=${key}`)
.then(result=>result.json())
.then(({player}) =>{
    console.log(player.displayname)
})