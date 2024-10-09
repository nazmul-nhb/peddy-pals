import { TCategory } from "./types";

export interface ICategory {
	id: number;
	category: TCategory;
	category_icon: string;
}

export interface IPet {
	petId: number;
	breed?: string;
	category: TCategory;
	date_of_birth?: string | null;
	price: number;
	image: string;
	gender: "Male" | "Female";
	pet_details: string;
	vaccinated_status?: "Fully" | "Partially" | "Not" | null;
	pet_name: string;
}

export interface IPetsRes {
	status: boolean;
	message: string;
	pets: IPet[];
}

export interface IPetRes {
	status: boolean;
	message: string;
	petData: IPet;
}

export interface ICategoryOnlyRes {
	status: boolean;
	message: string;
	categories: ICategory[];
}

export interface ICategoryWithPetsRes {
	status: boolean;
	message: string;
	data: IPet[];
}

export interface ILikesData {
	petId: number;
	like: number;
}
