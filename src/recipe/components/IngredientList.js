import React from "react";
import Divider from "../../app/components/Divider";
import IngredientListItem from "./IngredientListItem";

const IngredientList = ({ingredients, removeIngredient}) => {
    return (
        <>
            <h1>Ingredient List</h1>
            <Divider />
            {
                ingredients.map(ingredient => (
                        <div>
                            <IngredientListItem
                                ingredient={ingredient}
                                removeIngredient={removeIngredient}
                            />
                            <Divider />
                        </div>
                    )
                )
            }
        </>
    )
}

export default IngredientList