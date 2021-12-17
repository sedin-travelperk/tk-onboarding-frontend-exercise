import {useState} from "react";

import _ from "lodash"

const useIngredientsState = (initialVal) => {
    const [ingredients, setIngredients] = useState(initialVal)

    const updateIngredients = (ingredients) => {
        setIngredients(ingredients);
    }
    const addIngredient = (name) => {
            setIngredients([...ingredients, {"name": name}]);
    }

    const removeIngredient = (name) => {
        setIngredients(ingredients.filter(ingredient => ingredient.name !== name));
    }

    return {ingredients, updateIngredients, addIngredient, removeIngredient}
}

export default useIngredientsState