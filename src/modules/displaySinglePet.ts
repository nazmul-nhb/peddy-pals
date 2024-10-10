import { fetchPetById } from "../utilities/fetchData";
import { getElementById } from "../utilities/utilities";

export const displaySinglePet = async (id: number) => {
	const pet = await fetchPetById(id);

	const {
		petId,
		image,
		pet_name,
		breed,
		date_of_birth,
		vaccinated_status,
		gender,
		pet_details,
		price,
	} = pet;

	const petModal = getElementById("pet-modal");
	const modalContent = getElementById("modal-content");
	const body = document.querySelector("body");

	if (petModal && modalContent) {
		petModal.style.display = "flex";

		modalContent.innerHTML = `
             <div class="space-y-4">
                <figure class="border border-peddy-primary/40 rounded-lg p-1">
                    <image class="w-full aspect-[1.6] rounded-lg" src="${image}" alt="${pet_name}" />
                </figure>
                <h4 class="font-bold text-xl">${pet_name}</h4>
                <div class="text-gray-500 grid md:grid-cols-2">
                    <h5 class="flex items-center gap-2">
						<i class="fa-solid fa-paw"></i>
						<span>Breed: ${breed || "Unknown"}</span>
					</h5>
                    <h5 class="flex items-center gap-2">
						<i class="fa-solid fa-cake-candles"></i>
						<span>
							Birth: ${date_of_birth ? new Date(date_of_birth).toDateString() : "Unknown"}
						</span>
					</h5>
                    <h5 class="flex items-center gap-2">
						<i class="fa-solid fa-mercury"></i>
						<span>Gender: ${gender || "Unknown"}</span>
					</h5>
                    <h5 class="flex items-center gap-2">
						<i class="fa-solid fa-dollar-sign"></i>
						<span>Price: ${price || "Negotiable"}</span>
					</h5>
                    <h5 class="flex items-center gap-2">
						<i class="fa-solid fa-syringe"></i> 
						<span>${vaccinated_status || "Not"} Vaccinated</span>
					</h5>
                </div>
                <hr/>
                <h3 class="font-semibold text-lg">Details Information</h3>
                <p class="text-gray-700 text-justify">
                    ${pet_details}
                </p>
                <button
						id="close-${petId}"
						class="block w-full border border-peddy-primary/75 bg-peddy-primary/10 rounded-md text-peddy-primary text-lg font-bold px-3 py-1.5 hover:text-white hover:bg-peddy-primary/75 transition-all duration-500"
					>
						Close
				</button>
            </div>
        `;

		// Open the modal with animation
		setTimeout(() => {
			petModal.classList.add("show");
			body?.classList.add("overflow-hidden");
		}, 10);

		const closeButton = getElementById(`close-${petId}`);

		// When close button is clicked, close the modal
		if (closeButton) {
			closeButton.onclick = () => {
				petModal.classList.remove("show");
				petModal.classList.add("close");

				// Wait for the animation to finish before hiding the modal
				setTimeout(() => {
					petModal.style.display = "none";
					petModal.classList.remove("close");
					body?.classList.remove("overflow-hidden");
				}, 500);
			};
		}

		// Close modal when clicking outside of the modal area
		window.onclick = (e: MouseEvent) => {
			if (e.target == petModal) {
				petModal.classList.remove("show");
				petModal.classList.add("close");

				setTimeout(() => {
					petModal.style.display = "none";
					petModal.classList.remove("close");
					body?.classList.remove("overflow-hidden");
				}, 500);
			}
		};
	}
};
