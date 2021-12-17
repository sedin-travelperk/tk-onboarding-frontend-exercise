import React, {useEffect, useState} from "react";
import Input from "../../app/components/Input";
import Button from "../../app/components/Button";

import _ from "lodash"
import useFlagState from "../../app/hooks/useFlagState";

const IngredientForm = ({addIngredient}) => {
    const [ingredient, setIngredient] = useState("")
    const [validIngredient, setValidIngredient] = useFlagState(false);

    useEffect(() => {
        setValidIngredient(_.isEmpty(ingredient))
    }, [ingredient]);

    const handleChange = (e) => {
        setIngredient(e.target.value);
    }

    const handleAddIngredient = () => {
        addIngredient(ingredient)
        setIngredient("")
    }
    return (
        <>
            <Input
                label={"New ingredient"}
                value={ingredient}
                onChange={handleChange}
            />
            <Button onClick={handleAddIngredient} disabled={validIngredient}>Add Ingredient</Button>
        </>

    )
}

export default IngredientForm