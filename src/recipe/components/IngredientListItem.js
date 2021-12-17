import React from "react";
import Button from "../../app/components/Button";
import {useNavigate} from "react-router";

const IngredientListItem = ({ingredient, removeIngredient}) => {

    return (
        <>
            <p>{ingredient.name}</p>
            <Button onClick={() => removeIngredient(ingredient.name)}>Remove</Button>
        </>
    )
}

export default IngredientListItem