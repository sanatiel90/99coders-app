import { BannerSection } from "./style";
//import bannerImg from '../../../../assets/images/banner.JPG';

export default function Banner() {
    return (
        <BannerSection>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>Uma plataforma de CRM simples de configurar e fácil de usar</h1>
                        <h4>Gerencie seus clientes em um único lugar</h4>
                        <button type="button" className="btn btn-dark btn-lg">Criar uma conta</button>
                        <button type="button" className="btn btn-outline-light btn-lg" >Fazer login</button>
                    </div>
                    <div className="col-lg-6">
                        <img src="images/banner.jpg" alt="" />
                    </div>
                </div>
            </div>
        </BannerSection>
    )
}