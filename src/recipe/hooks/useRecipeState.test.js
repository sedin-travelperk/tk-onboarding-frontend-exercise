import {renderHook, act} from "@testing-library/react-hooks";
import useRecipeState from "./useRecipeState";

const testRecipe = {
    'name': 'Test',
    'description': 'Test description',
    'ingredients': [
        {
            'name': 'Test ingredient'
        }
    ]
};

test('should create empty recipe', () => {
    const {result} = renderHook(() => useRecipeState({}));

    const recipe = result.current.recipe;

    expect(recipe.name).toBe(undefined);
    expect(recipe.description).toBe(undefined);
    expect(recipe.ingredients).toBe(undefined);
});

test('should set init value recipe', () => {
    const {result} = renderHook(() => useRecipeState(testRecipe));

    const recipe = result.current.recipe;

    expect(recipe.name).toBe(testRecipe.name);
    expect(recipe.description).toBe(testRecipe.description);
    expect(recipe.ingredients[0].name).toBe(testRecipe.ingredients[0].name);
});

test('should update recipe', () => {
    const {result} = renderHook(() => useRecipeState({}));

    act(() => {
        result.current.updateRecipe(testRecipe);
    });

    const recipe = result.current.recipe;

    expect(recipe.name).toBe(testRecipe.name);
    expect(recipe.description).toBe(testRecipe.description);
    expect(recipe.ingredients[0].name).toBe(testRecipe.ingredients[0].name);

});

test('should update recipe name', () => {
    const {result} = renderHook(() => useRecipeState(testRecipe));

    const newName = "New name";

    act(() => {
        result.current.updateRecipeField(newName, "name");
    });

    const recipe = result.current.recipe;

    expect(recipe.name).toBe(newName);
    expect(recipe.description).toBe(testRecipe.description);
});

test('should add ingredient', () => {
    const {result} = renderHook(() => useRecipeState(testRecipe));

    const testIngredient = {
        'name': 'New ingredient'
    }
    act(() => {
        result.current.addIngredient(testIngredient);
    })

    const recipe = result.current.recipe;

    expect(recipe.ingredients.length).toBe(2);
});

test('should remove ingredient', () => {
    const {result} = renderHook(() => useRecipeState(testRecipe));

    act(() => {
        result.current.removeIngredient(testRecipe.ingredients[0].name);
    })

    const recipe = result.current.recipe;

    expect(recipe.ingredients.length).toBe(1);
});