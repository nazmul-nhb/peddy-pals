/**
 * # APIs
 * ## The following APIs are available in Peddy:
 * -----------------------------------------
 * - **Fetch All Pets**
 *
 *   **Endpoint**: `${baseUrl}/pets`
 *
 *   **Description**: Retrieves a list of all available pets for adoption.
 *   The data includes details like pet name, type, age, and adoption status.
 * -----------------------------------------
 * - **Fetch Pet Details by ID**
 *
 *   **Endpoint**: `${baseUrl}/pet/{petId}`
 *
 *   @example
 *   Example: `${baseUrl}/pet/1`
 *
 *   **Description**: Fetches detailed information for a specific pet based on its ID. This can be used to view additional information about the pet, such as vaccination history and description.
 * -----------------------------------------
 * - **Fetch All Pet Categories**
 *
 *   **Endpoint**: `${baseUrl}/categories`
 *
 *   **Description**: Fetches a list of all pet categories available in the platform, such as dogs, cats, rabbits, birds, etc.
 * -----------------------------------------
 * - **Fetch Pets by Category**
 *
 *   **Endpoint**: `${baseUrl}/category/{categoryName}`
 *
 *   @example
 *   Example: `${baseUrl}/category/dog`
 *
 *   **Description**: Fetches data of pets under a specific category, such as dogs. This can be used to filter pets based on their category.
 *
 */
export const baseUrl = "https://openapi.programming-hero.com/api/peddy";

