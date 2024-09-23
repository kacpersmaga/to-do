import "./styles.css";
import {createAllPage}  from "./all.js"



const allPage = createAllPage();

const selectPage = (page) =>{
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(page);
}

selectPage(allPage);