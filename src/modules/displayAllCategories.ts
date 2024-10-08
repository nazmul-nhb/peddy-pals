import { fetchAllCategories } from "../utilities/fetchData";
import { getElementById } from "../utilities/utilities";
import { loadPetsByCategory } from "./loadPetsByCategory";

export const displayAllCategories = async () => {
    const categories = await fetchAllCategories();
    const categoriesContainer = getElementById("categories");

	if (categoriesContainer) {
		categoriesContainer.innerHTML = "";

		categories.forEach((c) => {
			const { id, category, category_icon } = c;

			const categoriesDiv = document.createElement("div");

			categoriesDiv.innerHTML = `
				<button id="category-${id}" class="flex gap-6 items-center justify-between">
					<image src="${category_icon} alt="${category}" />
					<span>${category}</span>
				</button/>
			`;

			categoriesContainer.appendChild(categoriesDiv);

			const categoryButton = getElementById(`category-${id}`);

			categoryButton?.addEventListener("click", () => {
				loadPetsByCategory(category);
			});
		});
	}
};
