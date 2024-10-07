export interface Pet {
	petId: number;
	breed: string;
	category: "Cat" | "Dog" | "Rabbit" | "Bird";
	date_of_birth: string;
	price: number;
	image: string;
	gender: "Male" | "Female";
	pet_details: string;
	vaccinated_status: "Fully" | "Not" | null;
	pet_name: string;
}

export interface PetsResponse {
	status: boolean;
	message: string;
	pets: Pet[];
}

export interface PetResponse {
	status: boolean;
	message: string;
	petData: Pet;
}

export interface CategoryResponse {
	status: boolean;
	message: string;
	data: Pet[];
}
