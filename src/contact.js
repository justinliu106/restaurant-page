function loadContact() {
    const textBox = document.createElement("div");
    textBox.classList.add("menuText");
    const content = document.querySelector("#content");
    content.appendChild(textBox);
    textBox.textContent = "Placeholder for contact contents.";
}

export { loadContact };