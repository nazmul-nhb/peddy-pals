import { fetchPetById } from "../utilities/fetchData";

export const displaySinglePet = async (id: number) => {
	const pet = await fetchPetById(id);
	console.log(pet);
};
