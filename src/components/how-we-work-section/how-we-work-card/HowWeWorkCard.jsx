/* eslint-disable react/prop-types */
import { Component } from "react";

import "./howWeWorkCard.css"

export default class HowWeWorkCard extends Component {

    render() {

        let { text } = this.props;

        return (
            <div
                className="how-we-work-card">
                {text}
            </div>
        )
    }
}