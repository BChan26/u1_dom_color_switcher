// red and white and blue and yellow

//we're making this variable "red" to reference below
let red = document.querySelector(`.red`)
red.addEventListener('click', () => {
    document.body.classList.toggle(`red`)})

    let white = document.querySelector(`.white`)
white.addEventListener('click', () => {
    document.body.classList.toggle(`white`)})

    let blue = document.querySelector(`.blue`)
    blue.addEventListener('click', () => {
        document.body.classList.toggle(`blue`)})

        let yellow = document.querySelector(`.yellow`)
yellow.addEventListener('click', () => {
    document.body.classList.toggle(`yellow`)})

let gradientColor = document.querySelector(`.gradientH`)
gradientColor.addEventListener('click', () => {
    document.body.classList.toggle(`gradientC`)})

    let gradientColorG = document.querySelector(`.gradientG`)
gradientColorG.addEventListener('click', () => {
    document.body.classList.toggle(`gradientG`)})