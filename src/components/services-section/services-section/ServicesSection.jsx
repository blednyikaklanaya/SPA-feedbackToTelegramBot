import { Component } from "react";

import "./servicesSection.css"

import ServicesCard from "../serveces-card/ServicesCard";

export default class ServicesSection extends Component {

    render() {
        
        const ServicesCardTextArray = {
            generalClean: "Це комплексне очищення приміщення. Миття вікон, меблів, техніки, хімчистку, дезінфекцію ванних кімнат, прибирання кухні. Ми забезпечимо чистоту та комфорт у вашому просторі!",
            cleanWindow: "Це професійне очищення віконних поверхонь як зсередини, так і ззовні. Ми забезпечуємо видалення пилу, бруду та плям з вікон, рам і підвіконь, використовуючи спеціальні засоби та обладнання. Наша послуга гарантує кришталево чисті вікна.",
            supportClean: "це регулярне очищення вашого приміщення для збереження чистоти і порядку. Послуга включає витирання пилу, миття підлоги, очищення поверхонь, дезінфекцію ванних кімнат та кухні. Ми допоможемо вам підтримувати комфорт і гігієну у вашому просторі на щоденній основі.",
            trashClean: "це професійне та оперативне видалення побутових і будівельних відходів з вашого приміщення. Ми забезпечуємо збір, сортування та безпечне транспортування сміття до місць утилізації, гарантуючи чистоту та порядок у вашому просторі."
        }
        
        return (
            <section
                className="services">
                <h3>Послуги:</h3>

                <ServicesCard
                    text={"ГЕНЕРАЛЬНЕ ПРИБИРАННЯ"}
                    textServicesCard={ServicesCardTextArray.generalClean} />
                <ServicesCard
                    text={"МИТТЯ ВІКОН"}
                    textServicesCard={ServicesCardTextArray.cleanWindow} />
                <ServicesCard
                    text={"ПІДТРИМУЮЧЕ ПРИБИРАННЯ"}
                    textServicesCard={ServicesCardTextArray.supportClean} />
                <ServicesCard
                    text={"ВИВІЗ СМІТТЯ"}
                    textServicesCard={ServicesCardTextArray.trashClean} />
            </section>
        )
    }
}