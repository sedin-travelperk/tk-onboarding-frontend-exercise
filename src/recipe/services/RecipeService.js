import HttpService from "../../app/services/HttpService";

const RECIPE_URL = 'http://localhost:8000/recipes/'

function RecipeService() {
    const _http_service = HttpService();

    return {
        async find_all_recipes() {
            const response = await _http_service.get(RECIPE_URL)

            return response
        },

    };
}

export default RecipeService;