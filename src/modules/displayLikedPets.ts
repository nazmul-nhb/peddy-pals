import type { ILikedPet } from "../types/interfaces";
import { fetchAllPets } from "../utilities/fetchData";
import { getFromLocalStorage } from "../utilities/localStorage";
import { getElementById } from "../utilities/utilities";
import { displaySinglePet } from "./displaySinglePet";

export const displayLikedPets = async () => {
	const pets = await fetchAllPets();
	const savedInfo = getFromLocalStorage();

	// const likedPets = savedInfo
	// 	.map((info) => pets.find((pet) => pet.petId === info.petId))
	// 	.filter((pet) => pet !== undefined);

	const likedPets = savedInfo.reduce<ILikedPet[]>((matchedPets, info) => {
		const matched = pets.find((pet) => pet.petId === info.petId);
		if (matched) {
			const { petId, image, pet_name } = matched;
			const updatedPet = { petId, pet_name, image, like: info.like };
			matchedPets.unshift(updatedPet);
		}
		return matchedPets;
	}, []);

	const likesContainer = getElementById("liked-pets");

	if (likesContainer) {
		likesContainer.innerHTML = "";

		// Display Error Message if there is no Data
		if (!likedPets.length) {
			const errorContainer = document.createElement("div");

			errorContainer.classList.add("w-full", "col-span-2");

			errorContainer.innerHTML = `
					<figure class="flex flex-col items-start">
						<image src="./src/assets/error.webp" alt="Error" />
						<h3 class="text-xl font-bold font-kreonSerif text-peddy-primary">
							You Haven't Liked Any Pet!
						</h3>
					</figure>
				`;

			likesContainer.appendChild(errorContainer);
			return;
		}

		likedPets.forEach((pet) => {
			const { petId, image, pet_name, like } = pet;
			const likedDiv = document.createElement("div");

			likedDiv.innerHTML = `
                <figure>
                    <image
                        class="aspect-[1.6] border border-peddy-primary/25 p-1 rounded-lg hover:scale-105 transition-all duration-500 cursor-pointer"
						id="liked-${petId}"
                        src="${image}"
                        alt="${pet_name}"
                    />
                    <h4 class="text-peddy-primary px-2 font-semibold flex items-center gap-2">
                        ${like}
                        <i class="fa-regular fa-thumbs-up"></i>
                        ${pet_name}
                    </h4>
                </figure>
            `;

			likesContainer.appendChild(likedDiv);

			const imageButton = getElementById(`liked-${petId}`);

			imageButton?.addEventListener("click", () => {
				displaySinglePet(petId);
			});
		});
	}
};
