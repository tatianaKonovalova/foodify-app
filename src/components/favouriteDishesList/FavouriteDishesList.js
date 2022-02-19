import { Component } from "react";
import RecipeView from "../recipeView/RecipeView";

import './favouriteDishesList.css';

class FavouriteDishesList extends Component {
    render() {
            const dishList = this.props.savedDishes.map(item => {
            return (
                    <div className="list__item" key={item.dishId}><RecipeView recipe={item} column="true"/></div>
            )})
        return (
            <div className="dish__list">
                {dishList}
            </div>
        )
    }
}

export default FavouriteDishesList;