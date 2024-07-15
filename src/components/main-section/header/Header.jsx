/* eslint-disable react/prop-types */
import { Component } from "react"
import { Link } from "react-router-dom";

import "./header.css"

export default class Header extends Component {

    render() {
        return (
            <ul className="nav-bar">
                <li className="nav-bar__item">
                    <Link to="/" className="nav-bar__item__button">Головна</Link>
                </li>
                <li className="nav-bar__item">
                    <Link to="/services" className="nav-bar__item__button">Послуги</Link>
                </li>
                <li className="nav-bar__item">
                    <Link to="/howWeWork" className="nav-bar__item__button">Як ми працюємо</Link>
                </li>
                <li className="nav-bar__item">
                    <Link to="/order" className="nav-bar__item__button">Замовити послугу</Link>
                </li>
            </ul>
        )
    }
}