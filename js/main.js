import { Kaitlente } from "./Kaitlente.js";

const kaitlentciuKiekis = 5;

// h1 -> Virtuve
// h1 -> Dirbtuve (5)

// const h1DOM = document.querySelector('h1');
// const h1DOM = document.querySelectorAll();
//h1DOM, titleDOM sugalvoti pavadinimai
//const skyleDOM = document.querySelector('.kaitlente.skyle:nth-child(3)');
//. title siuo atveju kreipimasis i klase

const titleDOM = document.querySelector('.title');
titleDOM.innerText = `Dirbtuve (${kaitlentciuKiekis})`;
console.log(kaitlentciuKiekis);

//console.log(titleDOM);
//console.log(titleDOM.innerText);
//console.log(titleDOM.textContent);

//Su .innerText pagalba galima pakeisti h1 reiksme.

//title tampa BOLD: lyginis skyliu skaicius


if (kaitlentciuKiekis % 2 ===0 ) {
    titleDOM.classList.add('bold');
    
}
console.log(titleDOM.classList);

//title tampa RED: bent viena skyle yra karsta
//su .classList.add galima prideti (arba .remove atimti) klase ir atitinkamai pakeisti elemento isvaizda tam tikromis salygomis
//titileDOM.style.backgroundColor='yellow' arba titleDOM.style.['background-color']='yellow'

if(document.querySelector('.karsta')); {
    titleDOM.classList.add('red');
//    titleDOM.style.backgroundColor='yellow';
}

//Eiluteje 44 yra parasyta  kaip padaryti nematoma <main> turini is index.html. T.y. mes padareme nematomu irasa "Cia bus kaitlentes", o pacios kaitlentes liko.

document.querySelector('main').textContent = '';
for (let i = 1; i <= kaitlentciuKiekis; i++) {
    const irenginys = new Kaitlente(i);
    //Render siuo atveju reiskia piesti kaitlente nurodydamas jos dydi (i++)
     irenginys.render();
 }