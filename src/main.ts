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

// Navbar Toggle for Small Devices
const navMenu = getElementById("nav-menu");
const navButton = getElementById("nav-button");

if (navMenu && navButton) {
	// Toggle the menu on button click
	navButton.addEventListener("click", (e: MouseEvent) => {
		// Get button coordinates to position the menu near it
		const rect = navButton.getBoundingClientRect();
		navMenu.style.top = `${rect.bottom + 8}px`; // Adjust menu positioning
		navMenu.style.left = `${rect.left}px`;

		// Toggle between showing and hiding the menu with animation
		if (navMenu.classList.contains("scale-0")) {
			navMenu.classList.remove("scale-0", "opacity-0");
			navMenu.classList.add("scale-100", "opacity-100");
		} else {
			navMenu.classList.remove("scale-100", "opacity-100");
			navMenu.classList.add("scale-0", "opacity-0");
		}

		// Prevent immediate closing if click is on navButton
		e.stopPropagation();
	});

	// Hide the menu when clicking outside of it
	window.addEventListener("click", (e: MouseEvent) => {
		// Check if the click is outside the navMenu
		if (!navMenu.contains(e.target as Node)) {
			// Hide the menu if it is open
			if (navMenu.classList.contains("scale-100")) {
				navMenu.classList.remove(
					"scale-100",
					"opacity-100",
					"text-white"
				);
				navMenu.classList.add("scale-0", "opacity-0");
			}
		}
	});
}
