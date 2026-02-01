const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified")

const today = new Date();

currentyear.innerHTML = `&copy${today.getFullYear()}`;

lastmodified.innerHTML = document.lastModified;

const mainnav = document.querySelector('nav ul');
const hambutton = document.querySelector('#hamburger');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "images/nigeria-temple.webp"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, USA",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "images/manti-temple.webp"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, USA",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "images/payson-temple.webp"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "images/guam-temple.webp"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, USA",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "images/dc-temple.webp"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "images/peru-temple.webp"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "images/mexico-city-temple.webp"
  },
  {
    templeName: "Seattle Washington",
    location: "Seattle, Washington, USA",
    dedicated: "1980, November, 17",
    area: 110000,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/02bc5fa239bfc78d3fdc3da6d851d95c65d054d3/full/640%2C/0/default"
  },
  {
    templeName: "Spokane Washington",
    location: "Spokane, Washington, USA",
    dedicated: "1999, August, 21",
    area: 10700,
    imageUrl:
    "images/spokane-temple.webp"
  },
  {
    templeName: "Anchorage Alaska",
    location: "Anchorage, Alaska, USA",
    dedicated: "1999, January, 9",
    area: 11937,
    imageUrl:
    "images/alaska-temple.webp"
  }
];

const main = document.querySelector('#templecards');

const home = document.querySelector('#home');
home.addEventListener('click', () => {
	populateCards(temples)
});

const oldFilter = document.querySelector('#old');
oldFilter.addEventListener('click', () => {
	populateCards(temples.filter(temple => parseInt(temple.dedicated) < 1900))
});

const newFilter = document.querySelector('#new');
newFilter.addEventListener('click', () => {
	populateCards(temples.filter(temple => parseInt(temple.dedicated) > 2000))
});

const largeFilter = document.querySelector('#large');
largeFilter.addEventListener('click', () => {
	populateCards(temples.filter(temple => temple.area > 90000))
});

const smallFilter = document.querySelector('#small');
smallFilter.addEventListener('click', () => {
	populateCards(temples.filter(temple => temple.area < 10000))
});

function populateCards(filteredTemples) {
	main.innerHTML = ""
	let templeCards = "";

	for (const temple of filteredTemples) {
		templeCards += `
		<div class="card">
			<h2>${temple.templeName}</h2>
			<p><span>Location</span>: ${temple.location}</p>
			<p><span>Dedicated</span>: ${temple.dedicated}</p>
			<p><span>Size</span>: ${temple.area}sq ft</p>
			<img src="${temple.imageUrl}" alt="image of the ${temple.templeName} temple of the Church of Jesus Christ of Latter Day Saints" loading="lazy" width="100%">
		</div>
	`
	}

	main.innerHTML = templeCards;
}

populateCards(temples)
