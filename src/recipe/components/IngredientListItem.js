import React from "react";
import Button from "../../app/components/Button";
import {useNavigate} from "react-router";

const IngredientListItem = ({ingredient, removeIngredient}) => {

    return (
        <tr>
            <td>{ingredient.name}</td>
            <td>
                <Button onClick={() => removeIngredient(ingredient.name)}>Remove</Button>
            </td>
        </tr>
    )
}

export default IngredientListItem