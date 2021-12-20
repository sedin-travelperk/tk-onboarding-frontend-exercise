import {renderHook, act} from "@testing-library/react-hooks";
import useRecipeListState from "./useRecipeListState";

const testRecipeList = [{
        'name': 'Test',
        'description': 'Test description',
        'ingredients': [
            {
                'name': 'Test ingredient'
            }
        ]
    }
];

test('should create recipe list from init value', () => {
    const {result} = renderHook(() => useRecipeListState(testRecipeList));

    const recipeList = result.current.recipeList;

    expect(recipeList.length).toBe(1);
    expect(recipeList[0].name).toBe(testRecipeList[0].name);
    expect(recipeList[0].description).toBe(testRecipeList[0].description);
})

test('should update recipe list', () => {
    const {result} = renderHook(() => useRecipeListState({}));

    act(() => {
        result.current.updateRecipeList(testRecipeList);
    })

    const recipeList = result.current.recipeList;

    expect(recipeList.length).toBe(1);
    expect(recipeList[0].name).toBe(testRecipeList[0].name);
    expect(recipeList[0].description).toBe(testRecipeList[0].description);
})

test('should add recipe to recipe list', () => {
    const {result} = renderHook(() => useRecipeListState(testRecipeList));

    act(() => {
        result.current.addRecipe(testRecipeList[0]);
    })

    const recipeList = result.current.recipeList;

    expect(recipeList.length).toBe(2);
})

test('should remove recipe to recipe list', () => {
    const {result} = renderHook(() => useRecipeListState(testRecipeList));

    act(() => {
        result.current.removeRecipe(testRecipeList[0].name);
    })

    const recipeList = result.current.recipeList;

    expect(recipeList.length).toBe(1);
})