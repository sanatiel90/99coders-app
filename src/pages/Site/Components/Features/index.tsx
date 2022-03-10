import { FeaturesBox, FeaturesSection } from "./style";
//import bannerImg from '../../../../assets/images/banner.JPG';

export default function Features() {
    return (
        <FeaturesSection>
            <div className="container">
                <div className="row">
                    <FeaturesBox className="col-lg-4">
                        <h3>Fácil de usar</h3>
                        <p>O sistema possui uma interface muito simples e fácil de utilizar</p>
                    </FeaturesBox>
                    <FeaturesBox className="col-lg-4">
                        <h3>Em qualquer lugar</h3>
                        <p>Gerencie seu fluxo de negócios de forma eficiente, onde quer que você esteja</p>
                    </FeaturesBox>
                    <FeaturesBox className="col-lg-4">
                        <h3>Organização é tudo</h3>
                        <p>Tenha sua carteira de clientes sempre muito bem organizada</p>
                    </FeaturesBox>
                </div>
            </div>
        </FeaturesSection>
    )
}