// Write your JavaScript code here!
window.addEventListener("load", function() {
    const form = document.getElementById("launchForm");
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const pilot = form.querySelector('input[name="pilotName"]').value;
        const copilot = form.querySelector('input[name="copilotName"]').value;
        const fuelLevel = form.querySelector('input[name="fuelLevel"]').value;
        const cargoMass = form.querySelector('input[name="cargoMass"]').value;
        const list = document.getElementById("faultyItems");

        formSubmission(document,list,pilot,copilot,fuelLevel,cargoMass);        
    });
    

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const destination = pickPlanet(listedPlanets);
        console.log(destination);
        addDestinationInfo(
            document,
            destination.name,
            destination.diameter,
            destination.star,
            destination.distance,
            destination.moons,
            destination.image
        );
    });

});