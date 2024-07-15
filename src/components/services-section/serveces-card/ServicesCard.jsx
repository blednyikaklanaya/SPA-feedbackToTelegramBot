/* eslint-disable react/prop-types */
import { Component } from "react";

import "./servicesCard.css"

export default class ServicesCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCard: false
        }

        this.showDescriptionCard = this.showDescriptionCard.bind(this);
    }

    showDescriptionCard() {
        this.setState({
            showCard: !this.state.showCard
        });
    }

    render() {

        const { text, textServicesCard } = this.props;

        if (this.state.showCard) {
            return (
                <div 
                    className="services-card--active"
                    onClick={this.showDescriptionCard}>
                    <div
                        className="services-card__text">
                        {textServicesCard}
                    </div>
                </div>
            )
        }

        return (
            <div
                className="services-card"
                onClick={this.showDescriptionCard}>
                <div
                    className="services-card__button">
                    {text}
                </div>
            </div>
        )
    }
}