import { Component } from "react";

import HowWeWorkCard from "./how-we-work-card/HowWeWorkCard";

import "./howWeWorkSection.css";

export default class HowWeWorkSection extends Component {

    render() {

        const arrowRight = <i className="bi bi-arrow-right"></i>;

        return (
            <section className="howWeWorkSection">
                <div>
                    <HowWeWorkCard text={"ПІСЛЯ ТОГО, ЯК ВИ ЗАЛИШИТЕ ЗАЯВКУ, МИ ЗВ’ЯЖЕМОСЯ З ВАМИ"} />
                    <HowWeWorkCard text={"МЕНЕДЖЕР ОГЛЯДАЄ ОБ'ЄКТ ТА ПРОРАХОВУЄ ВАРТІСТЬ"} />
                    <HowWeWorkCard text={"МИ НАДАЄМО ЯКІСНУ ПОСЛУГУ"} />
                    <HowWeWorkCard text={"ВИ ПЕРЕВІРЯЄТЕ РОБОТУ, ВИКОРИСТОВУЮЧИ ЧЕК-ЛИСТ"} />
                </div>
                <span>А ДАЛІ {arrowRight}</span>
                <span className="focus-span">ЗДІЙСНЮЄТЕ ОПЛАТУ</span>
            </section>
        )
    }
}