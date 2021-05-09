import React from "react";
import { Link, useHistory } from "react-router-dom"; 
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./Header.css";

function Header({ backButton }) {
    const history = useHistory();
    return (
    <div className="header">
        {backButton ? (
            <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIosIcon fontSize="large" className="header__back" />
            </IconButton>
        ): (
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large" />
            </IconButton> 
        )}
       
        <Link to="/">
        <img className="header__logo"
        src="https://img.favpng.com/16/8/15/punisher-logo-marvel-comics-decal-png-favpng-Q02WTVQE3aMJFmjBSMZvzgYw7.jpg" alt=""/>
        </Link>

        
        <Link to="/chat">
            <IconButton>
                <ForumIcon className="header__icon" fontSize="Large"/>
            </IconButton>
        </Link>
    </div>
  );
}

export default Header;