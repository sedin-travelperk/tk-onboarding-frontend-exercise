import React, {useState} from "react";

import RecipeListItem from "./RecipeListItem";
import Divider from "../../app/components/Divider";
import Button from "../../app/components/Button";
import Modal from "../../app/components/Modal";

const RecipeList = ({recipeList}) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <>
            <h1>Recipe List</h1>
            <Button onClick={openModal}>Add recipe</Button>
            <Modal showModal={showModal} setShowModal={setShowModal} >
                <p>Add recipe form</p>
            </Modal>
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