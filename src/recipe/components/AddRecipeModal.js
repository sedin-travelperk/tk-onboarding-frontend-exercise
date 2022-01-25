import React, {useEffect} from "react";
import Button from "../../app/components/Button";
import Modal from "../../app/components/Modal";
import RecipeForm from "./RecipeForm";
import useRecipeState from "../hooks/useRecipeState";
import useFlagState from "../../app/hooks/useFlagState";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";

const AddRecipeModal = ({addRecipe}) => {
    const [showModal, setShowModal] = useFlagState(false);
    const {recipe, updateRecipeField, resetState, isValid, addIngredient, removeIngredient} = useRecipeState({});
    const [validRecipe, setValidRecipe] = useFlagState(false);

    const handleSaveRecipe = () => {
        addRecipe(recipe)
        resetState()
        setShowModal(false)
    }

    useEffect(() => {
       setValidRecipe(isValid())
    }, [recipe]);

    return (
        <div>
            <Button onClick={setShowModal}>Add recipe</Button>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <RecipeForm
                    recipe={recipe}
                    updateRecipeField={updateRecipeField}
                />
                <IngredientList
                    ingredients={recipe.ingredients || []}
                    addIngredient={addIngredient}
                    removeIngredient={removeIngredient}
                />
                <Button onClick={handleSaveRecipe} disabled={validRecipe}>Save</Button>
            </Modal>
        </div>

    )
}

export default AddRecipeModal