import { useState } from "react";

import './createRecipeModal.css';

function CreateRecipeModal({toggleModal, visible, addCustomRecipe}) {
    const [recipeName, setRecipeName] = useState('');
    const [recipeInstruction, setRecipeInstructions] = useState('');

    const onAddCustomRecipe = (e) => {
        e.preventDefault();
        if (!recipeName || !recipeInstruction) {
            setRecipeName('');
            setRecipeInstructions('');
            toggleModal();
        } else {
            addCustomRecipe(recipeName, recipeInstruction);
            setRecipeName('');
            setRecipeInstructions('');
            toggleModal();
        }
    }

    let rootClass = "modal";
    if (visible) {
        rootClass = "modal active";
    }
    return (
        <div className={rootClass} onClick={toggleModal}>
            <form 
                className="modal__content" 
                onClick={(e) => e.stopPropagation()}>
                <input 
                    type="text" 
                    className="modal__title"
                    placeholder="Enter recipe name" 
                    value={recipeName} 
                    onChange={(e) => setRecipeName(e.target.value)} />
                <textarea 
                    className="modal__description"
                    placeholder='I am waiting here for cooking instructions...'  
                    value={recipeInstruction} 
                    onChange={(e) => setRecipeInstructions(e.target.value)} />
                <button onClick={onAddCustomRecipe}>Add Recipe</button>
            </form>
        </div>
    )
}

export default CreateRecipeModal;