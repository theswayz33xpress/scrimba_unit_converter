/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInput = document.getElementById("user-input");
const convertBtn = document.getElementById("convert-btn");
const meterFeet = document.getElementById("meter-feet");
const literGallon = document.getElementById("liter-gallon");
const kgLbs = document.getElementById("kg-lbs");

convertBtn.addEventListener("click", function() {
    let input = userInput.value;
    meterFeet.innerHTML = `${input} meters = ${Math.floor(input * 3281) / 1000} feet | ${input} feet = ${Math.floor(input / .003281) / 1000} meters`
    literGallon.innerHTML = `${input} liters = ${Math.floor(input * 264) / 1000} gallons | ${input} gallons = ${Math.floor(input / 0.000264) / 1000} liters`
    kgLbs.innerHTML = `${input} kilograms = ${Math.floor(input * 2204) / 1000} pounds | ${input} pounds = ${Math.floor(input / 0.002204) / 1000} kilograms`
})