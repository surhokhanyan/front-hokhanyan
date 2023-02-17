import React from 'react';
import css from "./Header.module.scss";
import LogoSearch from "./LogoSearch/LogoSearch";
import Nav from "./Nav/Nav";

const Header = ({headerChange}) => {

    return (
        <header className={css.header} style={headerChange ? {position: "fixed", background: "#ffffff"} : {position: "sticky"}}>
            <LogoSearch/>
            <Nav/>
        </header>
    );
};

export default Header;