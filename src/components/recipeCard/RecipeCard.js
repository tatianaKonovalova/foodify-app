import { Component } from "react";
import RecipeView from "../recipeView/RecipeView";

import './recipeCard.css';

class RecipeCard extends Component {
    render() {
        const {recipe, fetchRandomRecipe, saveDish, active} = this.props;
        return (
            <div className="recipe-card">
                <RecipeView recipe={recipe} />
                <div className='buttons'>
                    <button onClick={fetchRandomRecipe}>Skip dish</button>
                    <button onClick={() => saveDish(recipe)} disabled={active ? 'disabled' : ''}>Save dish</button>
                </div>
            </div>
        )
    }
}

export default RecipeCard;

