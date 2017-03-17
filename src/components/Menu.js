"use strict";
import React from "react";
import { Link } from "react-router";
export default class Menu extends React.Component {
    render() {
        return (
            <nav id="header">
                <Link id="bt-react-logo" to="/">BT React.js isomorphe</Link>
                <Link className="bt-menu-item" to="/autre_page/1" activeClassName="active">autre page 1</Link>
                <Link className="bt-menu-item" to="/autre_page/2" activeClassName="active">autre page 2</Link>
            </nav>
        );
    }
}