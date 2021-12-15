import React from "react";

import RecipeListItem from "./RecipeListItem";
import Divider from "../../app/components/Divider";

const RecipeList = ({recipeList}) => {
    return (
        <>
            <h1>Recipe List</h1>
            <Divider />
            {
                recipeList.map(recipe => (
                    <>
                        <RecipeListItem recipe={recipe}/>
                        <Divider />
                    </>

                    )
                )
            }
        </>
)
}

export default RecipeList