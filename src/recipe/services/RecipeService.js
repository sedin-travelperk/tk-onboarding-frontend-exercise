import HttpService from "../../app/services/HttpService";

const RECIPE_URL = 'http://localhost:8000/recipes/'

function RecipeService() {
    const _httpService = HttpService();

    return {
        async findAllRecipes() {
            const response = await _httpService.get(RECIPE_URL)

            return response
        },

        async getRecipe(recipeId) {
            const recipeUrl = `${RECIPE_URL}${recipeId}`;
            const response = await _httpService.get(recipeUrl);

            return response
        },

        async createRecipe(recipe) {
            const response = await _httpService.post(RECIPE_URL, recipe);

            return response
        },

        async removeRecipe(recipeId) {
            const recipeUrl = `${RECIPE_URL}${recipeId}`;
            await _httpService.delete(recipeUrl);
        }

    };
}

export default RecipeService;