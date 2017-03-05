"use strict";
import React from "react";
import { Link } from "react-router";
export default class AccueilPage extends React.Component {
    render() {
        const id = this.props.params.id;
        return (
            <div className="autre-page">
                <h1>Autre page n° {id}</h1>
            </div>
        );
    }
}