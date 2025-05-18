import "./styles.css";
import { loadHomepage } from "./homepage.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

function  clearContent() {
    const content = document.querySelector("#content");
    content.innerHTML = '';
}

function showPage(loadPage) {
    clearContent();
    loadPage();
}

function setupTabEventListeners () {
    const homepage = document.querySelector(".home");
    const menu = document.querySelector(".menu");
    const contact = document.querySelector(".contact");

    homepage.addEventListener("click", () => showPage(loadHomepage));
    menu.addEventListener("click", () => showPage(loadMenu));
    contact.addEventListener("click", () => showPage(loadContact));

    const buttons = [homepage, menu, contact]
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
    homepage.click();
}

setupTabEventListeners();
showPage(loadHomepage);
