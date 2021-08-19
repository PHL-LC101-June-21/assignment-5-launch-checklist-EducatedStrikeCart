// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
    const missonTarget = document.getElementById("missionTarget");
    missonTarget.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
    `
}

function validateInput(testInput) { //This function is pointless but texbook wants it
   if (testInput === '') {
       return "Empty";
   } else if (isNaN(testInput)) {
        return "Not a Number";
   } else {
       return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const faultyItems = document.getElementById("faultyItems")
    const launchStatus = document.getElementById("launchStatus")

    if (pilot === '' || copilot === '' || fuelLevel === '' || cargoLevel === '') {
        alert("All fields must be filled!")
    } else {
        faultyItems.style.visibility = "visible";
    }

    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerText = "Pilot " + pilot + " is ready for launch";


    let copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerText = "Copilot " + copilot + " is ready for launch";

    if (validateInput(fuelLevel) !== "Is a Number") {
        alert("Please add a valid input for the Fuel Level!")
    } else if (Number(fuelLevel) < 10000) {
        launchStatus.innerText = "Shuttle not ready for launch";
        launchStatus.style.color = "rgb(199, 37, 78)";

        const fuelStatus = document.getElementById("fuelStatus");
        fuelStatus.innerText = "Not enough fuel for launch!"
        fuelStatus.style.color = "rgb(199, 37, 78)";
    }


    if (validateInput(cargoLevel) != "Is a Number") {
        alert("Please add a valid input for the Cargo Level!")
    } else if (Number(cargoLevel) > 10000) {
        launchStatus.innerText = "Shuttle not ready for launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
        console.log(cargoLevel,typeof Number(cargoLevel))

        const cargoStatus = document.getElementById("cargoStatus");
        cargoStatus.innerText = "Cargo too heavy for launch!"
        cargoStatus.style.color = "rgb(199, 37, 78)";
    }


    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        launchStatus.innerText = "Shuttle is ready for launch"
        launchStatus.style.color = "rgb(65, 159, 106)";
    }

    
}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
    .then((response) => response.json());
    return planetsReturned;
}

function pickPlanet(planets) {
    let selection = Math.floor(Math.random()*6);

    return planets[selection];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
