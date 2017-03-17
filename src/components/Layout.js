"use strict";
import React from "react";
import Menu from "./Menu";
export default class Layout extends React.Component {
    render() {
        return (
            <div id="bt-container">
                <header id="bt-header"><Menu /></header>
                <div id="bt-content">{this.props.children}</div>
                <footer id="bt-footer">
                    <p>
                        Autoformation BT, site minimal avec page d'accueil, une autre page par id et une page d'erreur en React.js.
                    </p>
                </footer>
            </div>
        );
    }
}
