/* eslint-disable react/no-unescaped-entities */
import { Component } from "react";

import "./orderPage.css";

export default class OrderPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            disabledButton: true,
            correctNumber: false,
            number: "",
            name: ""
        }

        this.onChangeValueNumber = this.onChangeValueNumber.bind(this);
        this.onChangeValueName = this.onChangeValueName.bind(this);
        this.checkCorrectNumber = this.checkCorrectNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeValueName(event) {
        this.setState({
            name: event.target.value
        })
    }

    onChangeValueNumber(event) {
        if (!/^\+\d*$/.test(event.target.value)) {
            event.target.value = "380";
        }
    }

    checkCorrectNumber(event) {
        if ((event.target.value).length >= 10 && this.state.correctNumber == false) {
            this.setState({
                correctNumber: !this.state.correctNumber,
                disabledButton: !this.state.disabledButton
            })
        }
        if (this.state.correctNumber == true && (event.target.value).length <= 3) {
            this.setState({
                correctNumber: !this.state.correctNumber
            })
        }

        this.setState({
            number: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault(false);

        let body = new FormData();
        body.append("name", this.state.name);
        body.append("number", this.state.number);

        fetch('sender.php', {
            method: "POST",
            body: body
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {

        return (
            <section className="section-form">
                <form
                    className="form"
                    action="#"
                    method="POST"
                    onSubmit={this.onSubmit}>
                    <label className="label label-text">ЗАМОВИТИ ПОСЛУГУ</label>

                    <label htmlFor="name" className="label label-name">Ваше Прізвище та Ім'я</label>
                    <input
                        name="name"
                        className="input input-name"
                        value={this.state.name}
                        onChange={this.onChangeValueName}>
                    </input>

                    <label htmlFor="number" className="label label-number">Номер телефону</label>
                    <input
                        name="number"
                        className="input input-number"
                        value={this.state.number}
                        onFocus={this.onChangeValueNumber}
                        onChange={this.checkCorrectNumber}>

                    </input>

                    <label className="label label-info">Після надсилання заявки вам перетелефонує наш менеджер</label>
                    <button
                        type="submit"
                        disabled={this.state.disabledButton}
                        className="form-send-button">
                        НАДІСЛАТИ ЗАЯВКУ
                    </button>
                </form>
            </section>
        )
    }
}