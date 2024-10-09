import type { ILikedPet } from "../types/interfaces";
import { fetchAllPets } from "../utilities/fetchData";
import { getFromLocalStorage } from "../utilities/localStorage";
import { getElementById } from "../utilities/utilities";

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

		likedPets.forEach((pet) => {
			const likedDiv = document.createElement("div");

			likedDiv.innerHTML = `
                <figure>
                    <image
                        class="aspect-[1.6] border border-peddy-primary/25 p-1 rounded-lg"
                        src="${pet.image}"
                        alt="${pet.pet_name}"
                    />
                    <h4 class="text-peddy-primary px-2 font-semibold flex items-center gap-2">
                        ${pet.like}
                        <i class="fa-regular fa-thumbs-up"></i>
                        ${pet.pet_name}
                    </h4>
                </figure>
            `;

			likesContainer.appendChild(likedDiv);
		});
	}
};
