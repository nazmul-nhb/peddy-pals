import { fetchAllPets } from "../utilities/fetchData";
import { displayAllPets } from "./displayAllPets";
import { setIsLoading } from "./displayLoading";
import { displayLikedPets } from "./displayLikedPets";

export const loadAllPets = async () => {
	setIsLoading(true);
	const pets = await fetchAllPets();

	setTimeout(() => {
		displayAllPets(pets);
		displayLikedPets();
	}, 1200);
};
