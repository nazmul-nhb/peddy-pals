import type { TCategory } from "../types/types";
import { fetchPetsByCategory } from "../utilities/fetchData";
import { displayAllPets } from "./displayAllPets";

export const loadPetsByCategory = async (category: TCategory) => {
	const pets = await fetchPetsByCategory(category);
	displayAllPets(pets);
};
