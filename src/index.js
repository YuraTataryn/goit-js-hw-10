import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";

const breedSelect = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");
const catImage = document.querySelector(".cat-image");
const breedName = document.querySelector(".breed-name");
const description = document.querySelector(".description");
const temperament = document.querySelector(".temperament");

async function populateBreedSelect() {
  try {
    const breeds = await fetchBreeds();
    breeds.forEach(breed => {
      const option = document.createElement("option");
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
    loader.style.display = "none";
    breedSelect.style.display = "block";
  } catch (err) {
    loader.style.display = "none";
    error.style.display = "block";
  }
}

async function showCatInfo(breedId) {
  try {
    loader.style.display = "block";
    catInfo.style.display = "none";
    const cat = await fetchCatByBreed(breedId);

    catImage.setAttribute("src", cat.url);

    breedName.textContent = cat.breeds[0].name;
    description.textContent = cat.breeds[0].description;
    temperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;
    catInfo.style.display = "block";
    loader.style.display = "none";
  } catch (err) {
    loader.style.display = "none";
    error.style.display = "block";
  }
}

breedSelect.addEventListener("change", () => {
  const selectedBreedId = breedSelect.value;
  if (selectedBreedId) {
    showCatInfo(selectedBreedId);
  }
});

populateBreedSelect();