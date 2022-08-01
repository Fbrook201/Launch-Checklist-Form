// Write your JavaScript code here!
window.addEventListener("load", function () {
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let itemStatus = document.getElementById("itemStatus");
   let launchStatus = document.getElementById("launchStatus");
   let launchStatusCheck = document.getElementById("launchStatusCheck");
   let missionTarget = document.getElementById("missionTarget");
   let launchForm = document.getElementById("launchForm");
   fetch("https://handlers.education.launchcode.org/static/planets.json").then((data) => {
      data.json().then(function(json) {
     let index = Math.floor(Math.random()* json.length); // Math.random to choose random number (w3Schools can help)
    missionTarget.innerHTML = 
              `<ol>
                  <li>Name: ${json[index].name}</li>
                  <li>Diameter: ${json[index].diameter}</li>
                  <li>Star: ${json[index].star}</li>
                  <li>Distance from Earth: ${json[index].distance}</li>
                  <li>Number of Moons: ${json[index].moons}</li>
              </ol>
              <img src="${json[index].image}">`;  
        });
    });
   launchForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let pilotName = document.querySelector("input[name=pilotName]")
      let pilot = pilotName.value;
      let pilotCheck = Number(pilot);

      let copilotName = document.querySelector("input[name=copilotName]")
      let copilot = copilotName.value;
      let nameCheck = Number(copilot);

      let fuelLevel = document.querySelector ("input[name=fuelLevel]")
      let level = fuelLevel.value;
      let levelCheck = Number(level);

      let cargoMass = document.querySelector ("input[name=cargoMass]")
      let mass = cargoMass.value; 
      let massCheck = Number(mass);
if (pilot === '' || copilot === '' || level === '' || mass === '') {
   alert("Please provide a value.") 
}else if (isNaN(pilotCheck)=== false || isNaN(nameCheck)=== false || isNaN(levelCheck)=== true || isNaN(massCheck)=== true)  {
   alert("Please provide correct value.")

}else {
itemStatus.style.visibility = "visible"   
pilotStatus.innerHTML = `${pilot} is ready`
copilotStatus.innerHTML = `${copilot} is ready`
fuelStatus.innerHTML = "Fuel is sufficient."
cargoStatus.innerHTML = "Mass is sufficient."
if (mass > 10000 && level < 10000) {
   fuelStatus.innerHTML = "Not enough fuel for the journey."
   cargoStatus.innerHTML = "Too much mass for shuttle to take off."
   launchStatus.innerHTML = "Shuttle not ready for launch."
   launchStatus.style.color = "red"
}else if (level < 10000){
   fuelStatus.innerHTML = "Not enough fuel for the journey."
   launchStatus.innerHTML = "Shuttle not ready for launch."
   launchStatus.style.color = "red"

}else if (mass > 10000){
   cargoStatus.innerHTML = "Too much mass for shuttle to take off."
   launchStatus.innerHTML = "Shuttle not ready for launch."
   launchStatus.style.color = "red"
}else {
   launchStatus.innerHTML = "Shuttle is ready for launch."
   launchStatus.style.color = "green"
}
   }
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/

   });
});

