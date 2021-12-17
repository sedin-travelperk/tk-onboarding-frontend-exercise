import HttpService from "../../app/services/HttpService";

const RECIPE_URL = 'http://localhost:8000/recipes/'

function RecipeService() {
    const _httpService = HttpService();

    return {
        async find_all_recipes() {
            const response = await _httpService.get(RECIPE_URL)

            return response
        },

        async get_recipe(recipeId) {
            const recipeUrl = `${RECIPE_URL}${recipeId}`;
            const response = await _httpService.get(recipeUrl);

            return response
        },

        async create_recipe(recipe) {
            const response = await _httpService.post(RECIPE_URL, recipe);

            return response
        }

    };
}

export default RecipeService;