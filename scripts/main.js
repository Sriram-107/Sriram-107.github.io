const imageElement = document.querySelector("img");

imageElement.addEventListener('click', () => {
    let imageSrc = imageElement.getAttribute("src");
    if (imageSrc == './images/firefox1.jpeg') {
        imageElement.setAttribute('src', './images/firefox2.jpeg');
    }
    else {
        imageElement.setAttribute('src', './images/firefox1.jpeg');
    }
})
const btnElement = document.querySelector("button");
const h1Element = document.querySelector("h1");

function setUserName(myName) {
    localStorage.setItem('name', myName);
    h1Element.textContent = `Hello ${myName}`;

}

if (!localStorage.getItem('name')) {
    const myName = prompt("Enter username");
    setUserName(myName);
}
else {
    const name = localStorage.getItem('name');
    h1Element.textContent = `Hello ${name}`;
}

btnElement.addEventListener('click', () => {
    const myName = prompt("Enter username");
    if (!myName) {
        setUserName(myName);
    } else {
        localStorage.setItem('name', myName);
        h1Element.textContent = `Hello ${myName}`;
    }
})