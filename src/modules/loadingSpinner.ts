import { getElementById } from "../utilities/utilities";

export const setIsLoading = (isLoading: boolean) => {
	const loadingSpinner = getElementById("loading-spinner");
	if (isLoading) {
		loadingSpinner?.classList.add("flex");
		loadingSpinner?.classList.remove("hidden");
	} else {
		loadingSpinner?.classList.remove("flex");
		loadingSpinner?.classList.add("hidden");
	}
};
