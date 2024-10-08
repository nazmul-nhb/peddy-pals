import type { IPet } from "../types/interfaces";

export const sortPetsByPrice = (pets: IPet[], ascending: boolean) => {
	 return pets.slice().sort((a, b) => {
		if (ascending) {
			return a?.price - b?.price;
		} else {
			return b?.price - a?.price;
		}
	});
};
