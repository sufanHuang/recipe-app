import React, {Component} from 'react';
import { Modal,Button} from 'semantic-ui-react'
import {Link} from "react-router-dom";
//const API_KEY = "be9f82e5b88eba7f4e9563eb6a460c63";


class ModalRecipe extends Component {
   /* state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);

        const res = await req.json();
        this.setState({ activeRecipe: res.recipes[0] });
        console.log(this.state.activeRecipe);
    }*/
    render() {
        const recipe = this.props.recipe
        return (
            <Modal  trigger={<Button >View Recipe</Button>}
                    dimmer='inverted'
                    size='tiny'
                    closeIcon='close'
            >
                <Modal.Header>{recipe.title}</Modal.Header>
                <Modal.Content>
                   <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
                    <h4 className="active-recipe__publisher">
                        Publisher: <span>{ recipe.publisher }</span>
                    </h4>
                    <p className="active-recipe__website">Website:
                        <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
                    </p>
                    <button className="active-recipe__button">
                        <Link to="/">Go Home</Link>
                    </button>
                </Modal.Content>
            </Modal>
        );
    }
}


export default ModalRecipe;
