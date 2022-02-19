import { Component } from "react";
import FavouriteDishesList from "../favouriteDishesList/FavouriteDishesList";
import CreateRecipeModal from "../createRecipeModal/CreateRecipeModal";

import './favouritesPage.css';

class FavouritesPage extends Component {
    state = {
        openModal: false,
    }

    onModalOpen = () => {
        this.setState(({openModal}) => ({
            openModal: !openModal
        }));
    }
 
    render() {
        return (
            <div className="favourites__page">
                <button className="create__button" onClick={this.onModalOpen}>Create Recipe</button>
                <CreateRecipeModal 
                    addCustomRecipe={this.props.addCustomRecipe} 
                    visible={this.state.openModal} 
                    toggleModal={this.onModalOpen} />
                <FavouriteDishesList savedDishes={this.props.savedDishes} />
            </div>
        )
    }
}

export default FavouritesPage;