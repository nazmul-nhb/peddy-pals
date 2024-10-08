import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import type { TCategory } from "./types/types";
import {
	fetchAllCategories,
	fetchAllPets,
	fetchPetById,
  fetchPetsByCategory,
} from "./utilities/fetchData";

const displayAllPets = async () => {
	const pets = await fetchAllPets();

	pets.forEach((pet) => {
		displaySinglePet(pet.petId);
	});
	// console.log(pets);
};

const displaySinglePet = async (id: number) => {
	const pet = await fetchPetById(id);
	console.log(pet);
};

const displayAllCategories = async () => {
	const categories = await fetchAllCategories();
  // console.log(categories);
  categories.forEach(category => {
    displayPetsByCategory(category.category)
  })
};

const displayPetsByCategory = async (category: TCategory) => {
  const pets = await fetchPetsByCategory(category);
  console.log(pets);
}

displayAllPets();
displayAllCategories();
