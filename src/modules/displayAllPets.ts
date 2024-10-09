import type { IPet } from "../types/interfaces";
import {
	getFromLocalStorage,
	saveToLocalStorage,
} from "../utilities/localStorage";
import { sortPetsByPrice } from "../utilities/sortPets";
import { getElementById } from "../utilities/utilities";
import { displayAdoptionMsg } from "./displayAdoptionMsg";
import { displayLikedPets } from "./displayLikedPets";
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

			// Display Error Message if there is no Data
			if (!petsList.length) {
				const errorContainer = document.createElement("div");

				errorContainer.classList.add(
					"w-full",
					"col-span-1",
					"md:col-span-2",
					"lg:col-span-3"
				);

				errorContainer.innerHTML = `
					<figure class="flex flex-col items-center justify-center h-[75vh]">
						<image src="/src/assets/error.webp" alt="Error" />
						<h3 class="text-2xl font-bold font-kreonSerif text-peddy-primary">
							No Information Available!
						</h3>
					</figure>
				`;

				petsContainer.appendChild(errorContainer);
				setIsLoading(false);
				return;
			}

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
					<div class="border border-peddy-primary/25 bg-peddy-primary/5 rounded-lg p-4 space-y-5">
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
							<button
								class="border border-peddy-primary/75 bg-peddy-primary/10 rounded-md text-peddy-primary text-lg font-bold px-3 py-1.5 hover:bg-peddy-primary/90 hover:text-white transition-all duration-500"
								id="like-${petId}"
							>
								<span id="likes-${petId}" class="pr-1"> </span><i class="fa-regular fa-thumbs-up"></i>
							</button>
							<button
								class="border border-peddy-primary/75 bg-peddy-primary/10 rounded-md text-peddy-primary text-lg font-bold px-3 py-1.5 hover:bg-peddy-primary/90 hover:text-white transition-all duration-500"
								id="adopt-${petId}"
							>
								Adopt
							</button>
							<button
								class="border border-peddy-primary/75 bg-peddy-primary/10 rounded-md text-peddy-primary text-lg font-bold px-3 py-1.5 hover:bg-peddy-primary/90 hover:text-white transition-all duration-500"
								id="details-${petId}"
							>
								Details
							</button>
						</div>
					</div>
				`;

				petsContainer.appendChild(petDiv);

				// Details Button
				const detailsButton = getElementById(`details-${petId}`);

				// Attach the click event for the details button
				detailsButton?.addEventListener("click", () => {
					displaySinglePet(petId);
				});

				// Adopt Button
				const adoptButton = getElementById(`adopt-${petId}`);

				// Attach the click event for the adopt button
				adoptButton?.addEventListener("click", () => {
					let countDown = 3;

					const countDownInterval = setInterval(() => {
						adoptButton.innerText = `Wait... ${countDown.toString()}`;
						countDown -= 1;

						if (countDown < 0) {
							clearInterval(countDownInterval);
							adoptButton.innerText = "Adopted";
							displayAdoptionMsg(petId, pet_name);
							adoptButton.setAttribute("disabled", "true");
						}
					}, 1000);
				});

				// Attach the click event for the details button
				detailsButton?.addEventListener("click", () => {
					displaySinglePet(petId);
				});

				// Like Button
				const likeButton = getElementById(`like-${petId}`);
				const likes = getElementById(`likes-${petId}`);

				const savedInfo = getFromLocalStorage();

				const likeInfo = savedInfo.find((info) => info.petId === petId);

				let like = likeInfo ? likeInfo?.like : 0;

				if (likes) {
					likes.innerText = like > 0 ? like.toString() : "";

					// Attach the click event for the like button
					likeButton?.addEventListener("click", () => {
						like++;

						likes.innerText = like.toString();
						saveToLocalStorage({ petId, like });
						displayLikedPets();
					});
				}
			});

			setIsLoading(false);
		}
	};

	// Initial display the pets
	renderPets(pets);
};
