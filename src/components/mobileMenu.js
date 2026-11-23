import { menu } from '../globals.js';
import { openMenu } from '../globals.js';
import { closeMenu } from '../globals.js';
import { headerOptions } from '../globals.js';
import { headerIcons } from '../globals.js';
import { searchBox } from '../globals.js';

const openMenuHandler = () => {
    headerOptions.style = "opacity: 0";
    menu.style = "right: 0";
    openMenu.style = "display: none";
    closeMenu.style = "display: block";
    setTimeout( () => headerOptions.classList.add("options-menu"), 100)
    headerIcons.forEach(icon => icon.classList.add("header-icons__menu"));
    searchBox.classList.add("search-menu");
};

const closeMenuHandler = () => {
    headerOptions.style = "opacity: 0";
    menu.style = "right: -1000px";
    closeMenu.style = "display: none";
    openMenu.style = "display: block";
    setTimeout( () => headerOptions.classList.remove("options-menu"), 100)
    headerIcons.forEach(icon => icon.classList.remove("header-icons__menu"));
    searchBox.classList.remove("search-menu");
};

openMenu.addEventListener("click", openMenuHandler);
closeMenu.addEventListener("click", closeMenuHandler);
