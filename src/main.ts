import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { fetchAllPets } from "./utilities/fetchData";
import { displayAllPets } from "./modules/displayAllPets";
import { displayAllCategories } from "./modules/displayAllCategories";
import { setIsLoading } from "./modules/loadingSpinner";
import { displayLikedPets } from "./modules/displayLikedPets";

const loadAllPets = async () => {
	setIsLoading(true);
	const pets = await fetchAllPets();

	setTimeout(() => {
		displayAllPets(pets);
	}, 1200);
};

loadAllPets();

displayAllCategories();

displayLikedPets();
