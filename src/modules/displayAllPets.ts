import type { IPet } from "../types/interfaces";
import {
	getFromLocalStorage,
	saveToLocalStorage,
} from "../utilities/localStorage";
import { sortPetsByPrice } from "../utilities/sortPets";
import { getElementById } from "../utilities/utilities";
import { displaySinglePet } from "./displaySinglePet";
import { setIsLoading } from "./loadingSpinner";

export const displayAllPets = (pets: IPet[]) => {
	const petsContainer = getElementById("pets-container");
	const sortButton = getElementById("sort");

	let ascending = true;

	sortButton?.addEventListener("click", () => {
		// Toggle sort order and sort pets
		const sortedPets = sortPetsByPrice(pets, ascending);
		ascending = !ascending; // Toggle for next click

		if (ascending) {
			sortButton.innerText = "Price Low to High";
		} else {
			sortButton.innerText = "Price High to Low";
		}
		setIsLoading(true);
		// Re-display pets after sorting
		renderPets(sortedPets);
	});

	// Function to render pets
	const renderPets = (petsList: IPet[]) => {
		setIsLoading(true);
		if (petsContainer) {
			petsContainer.innerHTML = "";

			petsList.forEach((pet) => {
				const {
					petId,
					image,
					pet_name,
					breed,
					date_of_birth,
					gender,
					price,
				} = pet;

				const petDiv = document.createElement("div");

				petDiv.innerHTML = `
					<div class="border border-gray-300 bg-peddy-primary/5 rounded-lg p-4 space-y-5">
						<figure>
							<img class="w-80 h-48 rounded-lg" src="${image}" alt="${pet_name}" />
						</figure>
						<h4 class="font-bold text-xl">${pet_name}</h4>
						<div class="text-gray-500 space-y-2">
							<h5 class="flex items-center gap-2"><i class="fa-solid fa-paw"></i> <span>Breed: ${
								breed || "Unknown"
							}</span></h5>
							<h5 class="flex items-center gap-2"><i class="fa-solid fa-cake-candles"></i> <span>Birth: ${
								date_of_birth
									? new Date(date_of_birth).toDateString()
									: "Unknown"
							}</span></h5>
							<h5 class="flex items-center gap-2"><i class="fa-solid fa-mercury"></i> <span>Gender: ${gender}</span></h5>
							<h5 class="flex items-center gap-2"><i class="fa-solid fa-dollar-sign"></i> <span>Price: ${
								price || "Negotiable"
							}</span></h5>
						</div>
						<hr/>
						<div class="flex justify-around items-center">
							<button class="border border-peddy-primary/75 bg-peddy-primary/10 rounded-md text-peddy-primary text-lg font-bold px-3 py-1.5" id="like-${petId}">
								<span id="likes-${petId}" class="pr-1"> </span><i class="fa-regular fa-thumbs-up"></i>
							</button>
							<button class="border border-peddy-primary/75 bg-peddy-primary/10 rounded-md text-peddy-primary text-lg font-bold px-3 py-1.5" id="adopt-${petId}">Adopt</button>
							<button class="border border-peddy-primary/75 bg-peddy-primary/10 rounded-md text-peddy-primary text-lg font-bold px-3 py-1.5" id="details-${petId}">Details</button>
						</div>
					</div>
				`;

				petsContainer.appendChild(petDiv);

				// Attach the click event for the details button
				const detailsButton = getElementById(`details-${petId}`);

				detailsButton?.addEventListener("click", () => {
					displaySinglePet(petId);
				});

				// Attach the click event for the details button
				const likeButton = getElementById(`like-${petId}`);
				const likes = getElementById(`likes-${petId}`);

				const savedInfo = getFromLocalStorage();

				const likeInfo = savedInfo.find((info) => info.petId === petId);

				if (likes) {
					likes.innerText = likeInfo ? likeInfo?.like.toString() : "";
				}

				let like = likeInfo ? likeInfo?.like : 0;

				likeButton?.addEventListener("click", () => {
					like++;

					if (likes) {
						likes.innerText = like.toString();
						saveToLocalStorage({ petId, like });
					}
				});
			});
			setIsLoading(false);
		}
	};

	// Initial display the pets
	renderPets(pets);
};
