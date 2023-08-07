let bars = document.querySelector(".bars")

let nav = document.querySelector("#nav")

bars.addEventListener("click", ()=>{
    nav.classList.toggle("active")
    bars.classList.toggle("open")
})
