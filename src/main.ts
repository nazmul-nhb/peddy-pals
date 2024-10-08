import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import type { TCategory } from "./types/types";
import {
	fetchAllCategories,
	fetchAllPets,
	fetchPetById,
	fetchPetsByCategory,
} from "./utilities/fetchData";
import { getElementById } from "./utilities/utilities";

const categoriesContainer = getElementById("categories");

const displayAllCategories = async () => {
	const categories = await fetchAllCategories();

	if (categoriesContainer) {
		categoriesContainer.innerHTML = "";

		categories.forEach((c) => {
			const { id, category, category_icon} = c;

			const categoriesDiv = document.createElement("div");


			categoriesDiv.innerHTML = `
				<button id="category-${id}" class="flex gap-6 items-center justify-between">
					<image src="${category_icon} alt="${category}" />
					<span>${category}</span>
				</button/>
			`;

			categoriesContainer.appendChild(categoriesDiv);

			const categoryButton = getElementById(`category-${id}`);

			categoryButton?.addEventListener("click", () => {
				displayPetsByCategory(category);
			})
		});
	}
};

const displayPetsByCategory = async (category: TCategory) => {
	const pets = await fetchPetsByCategory(category);
	console.log(pets);
};

const displayAllPets = async () => {
	const pets = await fetchAllPets();

	pets.forEach((pet) => {
		displaySinglePet(pet.petId);
	});
	// console.log(pets);
};

const displaySinglePet = async (id: number) => {
	const pet = await fetchPetById(id);
	// console.log(pet);
};

displayAllPets();
displayAllCategories();
