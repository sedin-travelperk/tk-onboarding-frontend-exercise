import React, {useEffect} from "react";
import Button from "../../app/components/Button";
import Modal from "../../app/components/Modal";
import RecipeForm from "./RecipeForm";
import useRecipeState from "../hooks/useRecipeState";
import useFlagState from "../../app/hooks/useFlagState";

const AddRecipeModal = ({addRecipe}) => {
    const [showModal, setShowModal] = useFlagState(false);
    const [recipe, updateRecipeField, resetState, isValid] = useRecipeState({});
    const [validRecipe, setValidRecipe] = useFlagState(false);

    const handleSaveRecipe = () => {
        addRecipe(recipe)
        resetState()
        setShowModal()
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

                <Button onClick={handleSaveRecipe} disabled={validRecipe}>Save</Button>
            </Modal>
        </div>

    )
}

export default AddRecipeModal