let fullSize = document.getElementById('fullSize')
let fullScreen = document.getElementById('fullScreen')
let rightA = document.getElementById('rightA')
let leftA = document.getElementById('leftA')
let images = [];
let currentImage;
for (let i = 1; i < 10; i++) {
    images.push('img' + i + '.jpg');

}
function openImage(imgNumber) {
    fullSize.style.transition = '0.5s'
    currentImage = imgNumber;
    fullSize.children[0].src = 'img' + imgNumber + '.jpg';
    fullSize.style.transform = 'translateY(0%)'
}

rightA.onclick = function () {
    console.log(images);
    currentImage = currentImage + 1
    if (currentImage > images.length) {
        currentImage = 1;
    }
    fullScreen.src = 'img' + currentImage + '.jpg'


}
leftA.onclick = function () {
    currentImage = currentImage - 1
    if (currentImage < 1) {
        currentImage = images.length;
    }
    fullScreen.src = 'img' + currentImage + '.jpg'
}
fullScreen.onclick = function () {
    fullSize.style.transform = 'translateY(-100%)'
}