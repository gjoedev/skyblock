let data
getdata()
async function getdata(){
    fetch(`https://api.hypixel.net/skyblock/bazaar?key=${key}`)
        .then(result=>result.json())
        .then(({products}) =>{
            data = products
            console.log(data)
    })
    setTimeout(function(){
        getdata()
    }, 60000)
}

