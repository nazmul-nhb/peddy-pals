import { fetchAllCategories } from "../utilities/fetchData";
import { getElementById } from "../utilities/utilities";
import { loadPetsByCategory } from "./loadPetsByCategory";

export const displayAllCategories = async () => {
	const categories = await fetchAllCategories();
	const categoriesContainer = getElementById("categories");

	let activeCategoryId: number | null = null;

	if (categoriesContainer) {
		categoriesContainer.innerHTML = "";

		categories.forEach((c) => {
			const { id, category, category_icon } = c;

			const categoriesDiv = document.createElement("div");

			categoriesDiv.innerHTML = `
				<button
					id="category-${id}"
					class="flex gap-2 md:gap-6 items-center justify-between text-xl font-bold border border-peddy-primary/50 bg-peddy-primary/5 rounded-full text-peddy-primary px-4 py-1.5 md:px-8 md:py-3 hover:text-white hover:bg-peddy-primary/75 transition-all duration-500"
				>
					<image class="md:w-7 md:h-8 w-4 h-5" src="${category_icon} alt="${category}" />
					<span>${category}</span>
				</button/>
			`;

			categoriesContainer.appendChild(categoriesDiv);

			const categoryButton = getElementById(`category-${id}`);

			categoryButton?.addEventListener("click", () => {
				loadPetsByCategory(category);
				if (activeCategoryId !== null) {
					// Reset the previously active category button's background
					const prevCategoryButton = getElementById(
						`category-${activeCategoryId}`
					);
					prevCategoryButton?.classList.remove(
						"bg-peddy-primary/95",
						"text-white"
					);
					prevCategoryButton?.classList.add(
						"bg-peddy-primary/5",
						"text-peddy-primary"
					);
				}

				// Set the clicked button as active
				activeCategoryId = id;
				categoryButton.classList.add(
					"bg-peddy-primary/95",
					"text-white"
				);
				categoryButton.classList.remove(
					"bg-peddy-primary/5",
					"text-peddy-primary"
				);
			});
		});
	}
};
