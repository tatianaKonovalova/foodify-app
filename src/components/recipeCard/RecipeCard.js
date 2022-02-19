import RecipeView from "../recipeView/RecipeView";

import './recipeCard.css';

function RecipeCard ({recipe, fetchRandomRecipe, saveDish, active}) {
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

export default RecipeCard;

