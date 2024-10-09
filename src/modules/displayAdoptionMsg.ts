import { getElementById } from "../utilities/utilities";

export const displayAdoptionMsg = (petId: number, petName: string) => {
	const petModal = getElementById("pet-modal");
	const modalContent = getElementById("modal-content");
	const body = document.querySelector("body");

	if (petModal && modalContent) {
		petModal.style.display = "flex";

		modalContent.innerHTML = `
             <div class="bg-peddy-primary/5 space-y-4 text-center font-bold">
                <h3 class="text-peddy-primary text-2xl">Congratulations!</h3>
                <h4 class="text-peddy-primary/75 text-lg md:text-xl">
                    You Have Successfully Adopted
                    <span class="text-peddy-primary">${petName}!</span>
                </h4>
                <button
						id="close-${petId}"
						class="block w-full border border-peddy-primary/75 bg-peddy-primary/10 rounded-md text-peddy-primary text-lg px-3 py-1.5 hover:text-white hover:bg-peddy-primary/75 transition-all duration-500"
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
