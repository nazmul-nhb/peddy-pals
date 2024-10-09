import type { TCategory } from "../types/types";
import { fetchPetsByCategory } from "../utilities/fetchData";
import { getElementById } from "../utilities/utilities";
import { displayAllPets } from "./displayAllPets";
import { setIsLoading } from "./displayLoading";

export const loadPetsByCategory = async (category: TCategory) => {
	setIsLoading(true);

	const petsContainer = getElementById("pets-container");

	if (petsContainer) {
		petsContainer.innerHTML = "";
	}

	const pets = await fetchPetsByCategory(category);

	setTimeout(() => {
		displayAllPets(pets);
	}, 1200);
};
