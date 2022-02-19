import { Component } from "react";

import './createRecipeModal.css';

class CreateRecipeModal extends Component {
    state = {
        recipeName: '',
        recipeInstruction: '',
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onAddCustomRecipe = (e) => {
        const {recipeName, recipeInstruction} = this.state;
        e.preventDefault();
        if (!recipeName || !recipeInstruction) {
            this.setState({
                recipeName: '',
                recipeInstruction: ''
            })
            this.props.toggleModal();
        } else {
            this.props.addCustomRecipe(recipeName, recipeInstruction);
            this.setState({
            recipeName: '',
            recipeInstruction: ''
        })
        this.props.toggleModal();
        }
    }

    render() {
        const {recipeName, recipeInstruction} = this.state;
        let rootClass = "modal";
        if (this.props.visible) {
            rootClass = "modal active";
        }
        return (
            <div className={rootClass} onClick={this.props.toggleModal}>
                <form 
                    className="modal__content" 
                    onClick={(e) => e.stopPropagation()}>
                    <input 
                        type="text" 
                        name="recipeName"
                        className="modal__title"
                        placeholder="Enter recipe name" 
                        value={recipeName} 
                        onChange={this.onInputChange} />
                    <textarea 
                        name="recipeInstruction"
                        className="modal__description"
                        placeholder='I am waiting here for cooking instructions...'  
                        value={recipeInstruction} 
                        onChange={this.onInputChange} />
                    <button onClick={this.onAddCustomRecipe}>Add Recipe</button>
                </form>
            </div>
        )
    }
}

export default CreateRecipeModal;