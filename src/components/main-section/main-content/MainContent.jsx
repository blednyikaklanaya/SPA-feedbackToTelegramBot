/* eslint-disable react/prop-types */
import { Component } from "react";

import "./mainContent.css"

import MainContentButton from "../main-content-button/MainContentButton";
import MainLocationItem from "../main-location-item/MainLocationItem";

export default class MainContent extends Component {

    render() {

        const { location } = this.props;

        return (
            <main>
                <div
                    className="main-content">
                    <h1>Професійник клінінг</h1>
                    <h2>Приберемо за 1 день</h2>
                </div>
                <MainContentButton />
                <MainLocationItem textLocation={location}/>
            </main>
        )
    }
}