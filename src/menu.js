function loadMenu() {
    const textBox = document.createElement("div");
    textBox.classList.add("menuText");
    const content = document.querySelector("#content");
    content.appendChild(textBox);
    textBox.textContent = "Placeholder for menu content";
}

export { loadMenu };