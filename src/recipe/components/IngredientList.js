import React from "react";
import IngredientListItem from "./IngredientListItem";
import Table from "../../app/components/Table";
import IngredientForm from "./IngredientForm";


const IngredientList = ({ingredients,addIngredient, removeIngredient}) => {
    return (
        <>
            <h4>Ingredient List</h4>
            <IngredientForm addIngredient={addIngredient}/>
            <Table>
                <tr>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                {
                    ingredients.map(ingredient => (
                                <IngredientListItem
                                    ingredient={ingredient}
                                    removeIngredient={removeIngredient}
                                />
                        )
                    )
                }
            </Table>

        </>
    )
}

export default IngredientList