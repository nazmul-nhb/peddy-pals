import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { displayAllCategories } from "./modules/displayAllCategories";
import { loadAllPets } from "./modules/loadAllPets";

loadAllPets();

displayAllCategories();
