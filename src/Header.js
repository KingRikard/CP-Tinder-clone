import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";


function Header() {
  return (
    <div className="header">
        <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
        <img className="header__logo"
        src="https://img.favpng.com/16/8/15/punisher-logo-marvel-comics-decal-png-favpng-Q02WTVQE3aMJFmjBSMZvzgYw7.jpg" alt=""/>
        <IconButton>
            <ForumIcon className="header__icon" fontSize="Large"/>
        </IconButton>
    </div>
  );
}

export default Header;