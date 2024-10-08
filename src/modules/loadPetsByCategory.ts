import type { TCategory } from "../types/types";
import { fetchPetsByCategory } from "../utilities/fetchData";

export const loadPetsByCategory = async (category: TCategory) => {
	const pets = await fetchPetsByCategory(category);
	console.log(pets);
};