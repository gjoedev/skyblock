//pwease dont steal my key🥺🥺🥺
const key = "f95b4ea2-28f6-45a1-94fe-c0ee1079de09"
const f = document.getElementById("form")
const q = document.getElementById("query")
let search


function submit(event){
    event.preventDefault();
    search = q.value.toUpperCase().split(" ").join("_")
    console.log(data[search].quick_status.sellPrice)
}



// fetch(`https://api.hypixel.net/key?key=${key}`)
//     .then(result=> result.json())
//     .then(({record}) =>{
//         console.log(record.key)
//     })

// fetch(`https://api.hypixel.net/player?uuid=eb432695-c666-43dd-b5cf-a755d497e34d&key=${key}`)
// .then(result=>result.json())
// .then(({player}) =>{
//     console.log(player.displayname)
// })
// fetch(`https://api.hypixel.net/skyblock/bazaar?key=${key}`)
//     .then(result=>result.json())
//     .then(({products})=>{
//         console.log(products.POTATO_ITEM.quick_status.buyPrice)
//     })


f.addEventListener(`submit`, submit)