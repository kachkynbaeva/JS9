// setTimeout( () =>{
//     console.log(123)
// },2000)
// const handleInterval = setInterval(()=>{
//     console.log(`its Interval`)
// },2000)
// const handleClear =() =>{
//     clearInterval(handleInterval)
// }
// setTimeout(()=>{
//     handleClear()
// },10000)
// console.log(333)
// console.log(`hello`)
// console.log(`world`)
const name = document.querySelector(`#name`)
const color =document.querySelector(`#color`)
const input = document.querySelector(`#input`)
const submit = document.querySelector(`#submit`)
const vehicle = document.querySelector('#vehicle')
const img =document.querySelector(`#img`)
const catBtn =document.querySelector(`#cat`)


submit.addEventListener(`click`,()=> {
    let value = input.value
    fetch(`https://swapi.dev/api/people/${value}`)
        .then(res => res.json())
        .then(user => {
            name.innerHTML = user.name
            color.innerHTML = user.hair_color
            const vehUrl = user.vehicles[0]
                if (vehUrl){
                    fetch(vehUrl)
                        .then(res => res.json())
                        .then(veh => {
                            console.log(veh)
                            vehicle.innerHTML = veh.name
                        })
                } else {
                }
        })
})
catBtn.addEventListener('click',()=>{
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(res =>res.json())
        .then(json=>{
            console.log(json)
            img.src=json[0].url
            console.log(img.src=json[0].url)
        })
})


// fetch(`https://swapi.dev/api/people/1`)
// .then(res =>res.json())
// // .then(json =>console.log(json.results))
//     .then(json => {
//         name.innerHTML = json.name
//         color.innerHTML= json.hair_color
//     })

