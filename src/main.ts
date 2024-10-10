import "./style.css";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { displayAllCategories } from "./modules/displayAllCategories";
import { loadAllPets } from "./modules/loadAllPets";
import { getElementById } from "./utilities/utilities";

const subscribeButton = getElementById("subscribe");

loadAllPets();

displayAllCategories();

// Subscribe Button
subscribeButton?.addEventListener("click", (e: MouseEvent) => {
	e.preventDefault();

	const emailInput = getElementById("email") as HTMLInputElement;
	const email = emailInput.value.trim();

	if (!email) {
		return toastr.error("Please, Provide Your Email!");
	}

	toastr.success("Subscribed to Newsletter!");
	emailInput.value = "";
});
