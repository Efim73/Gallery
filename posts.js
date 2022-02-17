import { db } from './db.js';
console.log(db);

let paintings = document.getElementsByClassName('paintings')[0]

// let pictures = [];
let pictures = db.split('@@')
                          
for (let imageNumber = 0; imageNumber < pictures.length; imageNumber++) {
    let imageItems = pictures[imageNumber].split('---');
    let tegs = `
    <div class="image" onclick="openImage(`+(imageNumber+1)+`)">
        <img src="`+imageItems[0]+`" alt="">
        <div class="info">
            <h3>`+imageItems[1]+`</h3>
            <h2>`+imageItems[2]+`</h2>
            <p>`+imageItems[3]+`</p>
            <a href="`+imageItems[4]+`">Подробнее</a>
        </div>
    </div>
    `;
paintings.innerHTML=paintings.innerHTML+tegs

}
