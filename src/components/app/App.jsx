import { Component } from "react";
import "./app.css"
//import

import { BrowserRouter, Routes, Route } from "react-router-dom";
//import routing



import Header from "../main-section/header/Header";
import MainContent from "../main-section/main-content/MainContent";
import ServicesSection from "../services-section/services-section/ServicesSection";
import HowWeWorkSection from "../how-we-work-section/HowWeWorkSection";
import OrderPage from "../order-page/OrderPage";
//components


export default class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <BrowserRouter>
                   <header>
                        <Header/>
                    </header>

                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/services"  element={<ServicesSection />} />
                        <Route path="/howWeWork" element={<HowWeWorkSection />} />
                        <Route path="/order" element={<OrderPage />}/>
                    </Routes>
            </BrowserRouter>
        )
    }
}