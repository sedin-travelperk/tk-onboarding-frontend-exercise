import React from "react";

import RecipeListItem from "./RecipeListItem";
import Divider from "../../app/components/Divider";
import AddRecipeModal from "./AddRecipeModal";
import SearchRecipes from "./SearchRecipes";

const RecipeList = ({recipeList, addRecipe, removeRecipe, updateRecipeList}) => {

    return (
        <>
            <h1>Recipe List</h1>
            <AddRecipeModal addRecipe={addRecipe}/>
            <SearchRecipes updateRecipeList={updateRecipeList}/>
            <Divider />
            {
                recipeList.map(recipe => (
                    <div key={recipe.id}>
                        <RecipeListItem
                            recipe={recipe}
                            removeRecipe={removeRecipe}
                        />
                        <Divider />
                    </div>
                    )
                )
            }
        </>
)
}

export default RecipeList