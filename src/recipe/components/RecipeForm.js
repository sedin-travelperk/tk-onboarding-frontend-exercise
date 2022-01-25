import React from 'react'
import Input from "../../app/components/Input";
import Row from "../../app/components/Row";

const RecipeForm = ({recipe, updateRecipeField}) => {

    return (
        <>
            <Row>
                <Input
                    label={"Name"}
                    value={recipe.name}
                    onChange={event => updateRecipeField(event.target.value, "name")}
                />
            </Row>
            <Row>
                <Input
                    label={"Description"}
                    value={recipe.description}
                    onChange={event => updateRecipeField(event.target.value, "description")}
                />
            </Row>


        </>
    )
}

export default RecipeForm