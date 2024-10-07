import axios from "axios";
import { baseUrl } from "../constants";
import { Pet, PetsResponse } from "../types/interfaces";

export const fetchAllPets = async (): Promise<Pet[]> => {
	const { data } = await axios<PetsResponse>(`${baseUrl}/pets`);
	return data.pets;
};
