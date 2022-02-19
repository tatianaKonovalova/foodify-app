import RecipeView from "../recipeView/RecipeView";

import './favouriteDishesList.css';

function FavouriteDishesList({savedDishes}) {
    const dishList = savedDishes.map(item => {
        return (<div className="list__item" key={item.dishId}><RecipeView recipe={item} column="true"/></div>)
    })
    return (
        <div className="dish__list">
            {dishList}
        </div>
    )
}

export default FavouriteDishesList;