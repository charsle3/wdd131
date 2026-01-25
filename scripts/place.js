const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified")

const today = new Date();

currentyear.innerHTML = `&copy${today.getFullYear()}`;

lastmodified.innerHTML = document.lastModified;

const windChill = document.querySelector("#wind-chill");

const temp = 30;

const windSpeed = 5;

function calculateWindChill(tempF, windSpeedMph) {
    const windChill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(windSpeedMph, 0.16)) + (0.4275 * tempF * Math.pow(windSpeedMph, 0.16));
    return Math.round(windChill); // Round to the nearest whole number
}

if (temp < 50 && windSpeed >= 3) {
    windChill.innerHTML = `: ${calculateWindChill(temp, windSpeed)}°`;
}