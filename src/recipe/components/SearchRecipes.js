import React, {useEffect, useState} from "react";
import Input from "../../app/components/Input";
import Button from "../../app/components/Button";

import _ from "lodash"
import useFlagState from "../../app/hooks/useFlagState";
import RecipeService from "../services/RecipeService";

const SearchRecipes = ({updateRecipeList}) => {
    const recipeService = RecipeService();
    const [name, setName] = useState("")
    const [validName, setValidName] = useFlagState(false);

    useEffect(() => {
        setValidName(_.isEmpty(name))
    }, [name]);

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSearchRecipes = async () => {
        const result = await recipeService.findAllRecipesByName(name);

        updateRecipeList(result);
    }

    const handleClearSearch = async () => {
        const result = await recipeService.findAllRecipes();
        setName("");
        updateRecipeList(result);
    }
    return (
        <div>
            <Input
                label={"Enter recipe name: "}
                value={name}
                onChange={handleChange}
            />
            <Button onClick={handleSearchRecipes} disabled={validName}>Search</Button>
            <Button onClick={handleClearSearch} disabled={validName}>Clear</Button>
        </div>

    )
}

export default SearchRecipes