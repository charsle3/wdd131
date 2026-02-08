const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified")

const today = new Date();

currentyear.innerHTML = `&copy${today.getFullYear()}`;

lastmodified.innerHTML = document.lastModified;

let successfulReviews = localStorage.getItem('visits') || 0;

successfulReviews++;

localStorage.setItem('visits', successfulReviews)