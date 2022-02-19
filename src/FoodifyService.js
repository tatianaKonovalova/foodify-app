export default class FoodifyService {
    _apiURL = 'https://www.themealdb.com/api/json/v1/1/random.php';

    getRandomRecipe = async () => {
        let response = await fetch(this._apiURL)

        if(!response.ok) {
          throw new Error (`Could not fetch the data, status: ${response.status}`)
        }
        const data = await response.json();
        return this._transformRecipe(data.meals[0]);
    }

    _transformRecipe = (recipe) => {
        return {
            dishId: recipe.idMeal,
            dishName: recipe.strMeal,
            dishDescr: recipe.strInstructions ? `${recipe.strInstructions.slice(0, 500)}...` : 'There is no description for this recipe in the database.',
            dishImg: recipe.strMealThumb,
        }
    }
}