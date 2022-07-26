//pwease dont steal my key🥺🥺🥺
const key = "f95b4ea2-28f6-45a1-94fe-c0ee1079de09"
const f = document.getElementById("form")
const q = document.getElementById("query")
const e = document.getElementById("error")
const em = document.getElementById("errormessage")
const reslsit = document.getElementById("reslist")
let search
e.style.display = "none";
em.innerHTML = ""
reslsit.style.paddingTop = "2.5%"

function submit(event){
    event.preventDefault();
    e.style.display = "none"
    reslsit.style.paddingTop = "2.5%"
    search = q.value.toUpperCase().split(" ").join("_")
    try{
        data[search].quick_status.sellPrice
    } catch(error){
        if(error instanceof TypeError){
            em.innerHTML = "Invalid Item Search"
            e.style.paddingBottom = "2.5%"
            reslsit.style.paddingTop = "0%"
            e.style.display = "inherit"
        }
        return
    }

    document.getElementById("sell1").innerHTML = "Sell: " + data[search].quick_status.sellPrice
    document.getElementById("buy1").innerHTML = "Buy: " + data[search].quick_status.buyPrice
    document.getElementById("name1").innerHTML = "Item Name: " + search
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