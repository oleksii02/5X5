const upBtn = document.querySelector('.up-button')

const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')

const container = document.querySelector('.container')

const mainSlide = document.querySelector('.main-slide')

const slidersCount = mainSlide.querySelectorAll('div').length

let activeSliderIndex = 0

sidebar.style.top = `-${(slidersCount -1 ) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSliderIndex++
        if (activeSliderIndex === slidersCount) {
            activeSliderIndex = 0
        }
    }
    else if (direction === 'down') {
        activeSliderIndex--
        console.log(activeSliderIndex)
        if (activeSliderIndex < 0) {
            activeSliderIndex = slidersCount - 1
        }
    }
    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${height * activeSliderIndex}px)`

    sidebar.style.transform = `translateY(${activeSliderIndex * height}px)`
}
