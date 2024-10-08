import axios from "axios";
import { baseUrl } from "../constants";
import type {
	ICategory,
	ICategoryOnlyRes,
	ICategoryWithPetsRes,
	IPet,
	IPetRes,
	IPetsRes,
} from "../types/interfaces";
import { TCategory } from "../types/types";

// Get all the pets data
export const fetchAllPets = async (): Promise<IPet[]> => {
	const { data } = await axios<IPetsRes>(`${baseUrl}/pets`);
	return data.pets;
};

// Get a single pet data by petId
export const fetchPetById = async (id: number): Promise<IPet> => {
	const { data } = await axios<IPetRes>(`${baseUrl}/pet/${id}`);
	return data.petData;
};

// Get all the categories data
export const fetchAllCategories = async (): Promise<ICategory[]> => {
	const { data } = await axios<ICategoryOnlyRes>(`${baseUrl}/categories`);
	return data.categories;
};

// Get all pets that belongs to a specific category
export const fetchPetsByCategory = async (
	category: TCategory
): Promise<IPet[]> => {
	const { data } = await axios<ICategoryWithPetsRes>(
		`${baseUrl}/category/${category}`
	);
	return data.data;
};
