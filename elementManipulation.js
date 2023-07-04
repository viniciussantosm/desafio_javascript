function createObject(e) {
    e.preventDefault();

    let elementContainer = document.getElementById("elementManipulation");
    const containerElements = elementContainer.childNodes.length;

    let width = document.getElementById("CO_WIDTH");
    let height = document.getElementById("CO_HEIGHT");
    let backgroundColor = document.getElementById("CO_COLOR");
    let borderRadius = document.getElementById("CO_RADIUS");

    let newDiv = document.createElement("div");
    newDiv.id = `e${Math.floor(Math.random() * 1000)}`;
    newDiv.classList.add("newElement");

    newDiv.innerText = `${containerElements + 1}`;


    newDiv.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const elementWidth = Math.ceil(Math.random() * 100);
    const elementHeight =  Math.ceil(Math.random() * 100);
    newDiv.style.width = `${elementWidth >= 50 ? elementWidth : 50}px`;
    newDiv.style.height = `${elementHeight >= 50 ? elementHeight : 50}px`;
    newDiv.style.borderRadius = `${Math.floor(Math.random() * 50)}px`;
    newDiv.style.margin = `1em`;

    elementContainer.appendChild(newDiv);
}