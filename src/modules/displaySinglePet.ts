import { fetchPetById } from "../utilities/fetchData";
import { getElementById } from "../utilities/utilities";

export const displaySinglePet = async (id: number) => {
	const pet = await fetchPetById(id);

	const petModal = getElementById("pet-modal");
	const close = getElementById("close-modal");

	if (petModal) {
		petModal.style.display = "flex";

		// Open the modal with animation
		setTimeout(() => {
			petModal.classList.add("show");
		}, 10);

		// When close button is clicked, close the modal
		if (close) {
			close.onclick = () => {
				petModal.classList.remove("show");
				petModal.classList.add("close");

				// Wait for the animation to finish before hiding the modal
				setTimeout(() => {
					petModal.style.display = "none";
					petModal.classList.remove("close");
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
				}, 500);
			}
		};
	}

	console.log(pet);
};
