const animationFields = {
    'simple-text': "animated",
    'gallery__item': "gallery-animate",
}

// Функция для проверки есть ли элемент в окне
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

// Функция анимации
function animetedScroll() {
    const elements = document.querySelectorAll('.check-anime');
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            let name = element.className.split(' ')[0]
            element.classList.add(animationFields[name])
        }
    })
}

function printPhoto(value) {
    let string = "";
    const valueText = value.innerText.toLowerCase()
    document.getElementById('gallery-text').textContent = value.innerText;
    document.getElementById('gallery').classList.toggle("gallery-none");
    document.getElementById('collection').classList.toggle("gallery-none")
    for (let index = 1; index <= 12; index++) {
        string += `<div class="collection">
                        <img src="./src/img/${valueText}/${valueText}${index}.jpg" alt="${valueText}">
                    </div>`
    }

    document.getElementById("collection").innerHTML = string;
    document.getElementById("line").style.display = "block";
}

function clickArrow(event) {

}

document.addEventListener('DOMContentLoaded', () => {
    animetedScroll()
    const galleryItems = document.querySelectorAll('.gallery__item');
    console.log(galleryItems);

    for(let value of galleryItems) {
       value.addEventListener('click', () => {
        printPhoto(value)
       })
    }
})
// document.getElementById("line").addEventListener("click")
window.addEventListener('scroll', animetedScroll)