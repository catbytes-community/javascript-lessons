// javascript for myPets
const myPets = ["Marcy", "Foxy", "Winnie", "Fuchsia"];

function displayPets(pets) {
  pets.forEach((pet) => {
    const petContainer = document.createElement("div"); // <div>
    const petName = document.createElement("p"); // <p>
    petName.textContent = pet;

    petContainer.appendChild(petName);

    document.body.appendChild(petContainer);
  });
}

displayPets(myPets);
