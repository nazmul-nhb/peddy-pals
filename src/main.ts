import "./style.css";
import { fetchAllPets } from "./utilities/fetchData";

const displayAllPets = async () => {
	const pets = await fetchAllPets();

	console.log(pets);
};

displayAllPets();
