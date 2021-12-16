import {useState} from "react";

import _ from "lodash"

const useRecipeState = (initialVal) => {
    const [recipe, setRecipe] = useState(initialVal)

    const updateRecipeField = (value, key) => {
        recipe[key] = value;
        setRecipe(Object.assign({}, recipe))
    }

    const resetState = () => {
        setRecipe(Object.assign({}, initialVal))
    }

    const isValid = () => {
        return _.isEmpty(recipe.name) || _.isEmpty(recipe.description);
    }

    return [recipe, updateRecipeField, resetState, isValid]
}

export default useRecipeState