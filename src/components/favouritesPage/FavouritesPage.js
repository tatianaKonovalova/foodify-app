import { useState } from "react";
import FavouriteDishesList from "../favouriteDishesList/FavouriteDishesList";
import CreateRecipeModal from "../createRecipeModal/CreateRecipeModal";

import './favouritesPage.css';

function FavouritesPage ({addCustomRecipe, savedDishes}) {
    const [openModal, setModal] = useState(false);

    const onModalOpen = () => {
        setModal(!openModal);
    }
 
    return (
        <div className="favourites__page">
            <button className="create__button" onClick={onModalOpen}>Create Recipe</button>
            <CreateRecipeModal 
                addCustomRecipe={addCustomRecipe} 
                visible={openModal} 
                toggleModal={onModalOpen} />
            <FavouriteDishesList savedDishes={savedDishes} />
        </div>
    )
}

export default FavouritesPage;