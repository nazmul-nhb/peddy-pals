import { getElementById } from "../utilities/utilities";

export const setIsLoading = (isLoading: boolean) => {
	const loadingSpinner = getElementById("loading-spinner");
	const dealsContainer = getElementById("deals");
	const likesContainer = getElementById("liked-pets");

	if (dealsContainer && likesContainer) {
		if (isLoading) {
			dealsContainer.style.visibility = "hidden";
			likesContainer.classList.add("hidden");
			loadingSpinner?.classList.add("flex");
			loadingSpinner?.classList.remove("hidden");
		} else {
			dealsContainer.style.visibility = "visible";
			likesContainer.classList.remove("hidden");
			loadingSpinner?.classList.remove("flex");
			loadingSpinner?.classList.add("hidden");
		}
	}
};
