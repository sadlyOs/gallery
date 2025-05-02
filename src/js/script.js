const animationFields = {
    'simple-text': "animated",
    'gallery__item': "gallery-animate"
}

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

function animetedScroll() {
    const elements = document.querySelectorAll('.check-anime');
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            console.log(element.className);

            let name = element.className.split(' ')[0]
            element.classList.add(animationFields[name])
        }
    })
}


document.addEventListener('DOMContentLoaded', animetedScroll)
window.addEventListener('scroll', animetedScroll)