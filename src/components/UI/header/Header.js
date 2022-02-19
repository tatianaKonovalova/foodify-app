import { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import '../../../assets/fonts/style.css';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <h1 style={{fontFamily: "Arturo"}}> The Foodify</h1>
                <h2>Delicious food for every mood</h2>
                <div className='buttons'>
                    <Link className="button" to="/">Random</Link>
                    <Link className="button" to="/favourites"> Favourites <FontAwesomeIcon icon={faHeart} className={this.props.active ? "heart active" : ''} /></Link>
                </div>
            </header>
        )
    }
}

export default Header;