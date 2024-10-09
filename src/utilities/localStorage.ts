import type { ILikesData } from "../types/interfaces";

export const getFromLocalStorage = (): ILikesData[] | [] => {
	const items = localStorage.getItem("peddy-pals") || "[]";

	return JSON.parse(items) as ILikesData[] | [];
};

export const saveToLocalStorage = (likesData: ILikesData) => {
	const items = getFromLocalStorage();

	const needsUpdate = items.find((item) => item.petId === likesData.petId);

	let modifiedItems: ILikesData[];

	if (needsUpdate) {
		modifiedItems = items.map((item) => {
			if (item.petId === likesData.petId) {
				return { ...item, like: likesData.like };
			} else {
				return item;
			}
		});
	} else {
		modifiedItems = [...items, likesData];
	}

	const stringifiedItem = JSON.stringify(modifiedItems);

	localStorage.setItem("peddy-pals", stringifiedItem);
};
