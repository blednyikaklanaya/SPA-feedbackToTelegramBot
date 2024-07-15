/* eslint-disable react/prop-types */
import { Component } from "react";

import "./mainLocationItem.css"

export default class MainLocationItem extends Component {

    render() {

        const { textLocation } = this.props;

        return (
            <span className="main-location-item">
                {textLocation}
            </span>
        )
    }
}