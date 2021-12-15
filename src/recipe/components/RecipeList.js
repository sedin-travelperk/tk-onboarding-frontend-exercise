import React from "react";

import RecipeListItem from "./RecipeListItem";
import Divider from "../../app/components/Divider";

const RecipeList = ({recipes}) => {
    return (
        <>
            <h1>Recipe List</h1>
            <Divider />
            {
                recipes.map(recipe => (
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