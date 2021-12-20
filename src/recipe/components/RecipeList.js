import React from "react";
import RecipeListItem from "./RecipeListItem";
import Table from "../../app/components/Table";


const RecipeList = ({recipeList, removeRecipe}) => {

    return (
        <>
            <Table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                {
                    recipeList.map(recipe => (
                            <RecipeListItem
                                recipe={recipe}
                                removeRecipe={removeRecipe}
                            />
                        )
                    )
                }
            </Table>

        </>
)
}

export default RecipeList
