const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified")

const today = new Date();

currentyear.innerHTML = `&copy${today.getFullYear()}`;

lastmodified.innerHTML = document.lastModified;

const mainnav = document.querySelector('nav ul')
const hambutton = document.querySelector('#hamburger');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});