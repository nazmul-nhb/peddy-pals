import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { fetchAllPets } from "./utilities/fetchData";
import { displayAllPets } from "./modules/displayAllPets";
import { displayAllCategories } from "./modules/displayAllCategories";

const loadAllPets = async () => {
	const pets = await fetchAllPets();

	displayAllPets(pets);
};

displayAllCategories();

loadAllPets();
