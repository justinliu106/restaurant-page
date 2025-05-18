function loadHomepage() {
    const textBox = document.createElement("div");
    textBox.classList.add("homeText")
    const content = document.querySelector("#content");
    content.appendChild(textBox);
    textBox.textContent = "This is my scuffed restaraunt page. I don't feel like styling this and making it look nice, that isn't the point of this project anyways.";
}

export { loadHomepage };