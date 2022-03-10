import { FeaturesBox, FeaturesSection, Icon } from "./style";

export default function Features() {
    return (
        <FeaturesSection>
            <div className="container">
                <div className="row">
                    <FeaturesBox className="col-lg-4">
                        <Icon className="fa-solid fa-heart fa-5x"></Icon>
                        <h3>Fácil de usar</h3>
                        <p>O sistema possui uma interface muito simples e fácil de utilizar</p>
                    </FeaturesBox>
                    <FeaturesBox className="col-lg-4">
                        <Icon className="fa-solid fa-earth-americas fa-5x"></Icon>
                        <h3>Em qualquer lugar</h3>
                        <p>Gerencie seu fluxo de negócios de forma eficiente, onde quer que você esteja</p>
                    </FeaturesBox>
                    <FeaturesBox className="col-lg-4">
                        <Icon className="fa-solid fa-table-columns fa-5x"></Icon>
                        <h3>Organização é tudo</h3>
                        <p>Tenha sua carteira de clientes sempre muito bem organizada</p>
                    </FeaturesBox>
                </div>
            </div>
        </FeaturesSection>
    )
}