import { Component } from 'react';
import './recipeView.css';
import thumb from '../../assets/img/not-found.png';

class RecipeView extends Component {
  render() {
    const {recipe, column} = this.props;
    const {dishImg, dishDescr, dishName} = recipe;
    let thumbnail = !dishImg ? thumb : dishImg;
    return (
      <div className={column ? 'recipe-container-column' : 'recipe-container-row'}>
        <div className="image">
          <img src={thumbnail} alt="Recipe" />
        </div>
        <div className="recipe-info">
          <div className="dish-info">
              <h3 className="dish-name">{dishName}</h3>
              <div className="dish-description">{dishDescr}</div>
          </div>
        </div>
      </div>
    )
  }
}
export default RecipeView;


