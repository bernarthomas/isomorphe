"use strict";
import React from "react";
import { Link } from "react-router";
export default class Layout extends React.Component {
    render() {
        return (
            <div className="app-container">
                <header>
                    <Link to="/">Isomorphe</Link>
                    <Link to="/autre_page/1">Autre page 1</Link>
                    <Link to="/autre_page/2">Autre page 2</Link>
                </header>
                <div className="app-content">{this.props.children}</div>
                <footer>
                    <p>
                        Autoformation BT, site minimal avec page d'accueil, une autre page par id et une page d'erreur en React.js.
                    </p>
                </footer>
            </div>
        );
    }
}
