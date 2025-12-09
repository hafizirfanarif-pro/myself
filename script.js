const teks = [
    "Hafiz Irfan Arif",
    "Web Developer",
    "Grapich Designer",
    "UI/UX Designer",
]

const typingTeks = document.querySelector(".typing-teks")
let indexTeks = 0
let isDelete = false

let charTeks = 0
function typing(){
    const currentTeks = teks[indexTeks]

    if(isDelete){
        charTeks--
    } else{
        charTeks++
    }

    typingTeks.textContent = currentTeks.substring(0, charTeks)

    if(!isDelete && charTeks === currentTeks.length){
        isDelete = true
    } else if(isDelete && charTeks === 0){
        isDelete = false
        indexTeks = (indexTeks + 1) % teks.length
    }

    if(indexTeks >= teks.length){
        indexTeks = 0
        charTeks = 0
    }

    setTimeout(typing, 300)
}

const navbar = document.querySelector("nav");

window.onscroll = () => {
    if(window.scrollY > 4){
        navbar.classList.add("shadow-lg","shadow-blue-700/50")
    } else{
        navbar.classList.remove("shadow-lg","shadow-blue-700/50")
    }
}
 
typing()

AOS.init();