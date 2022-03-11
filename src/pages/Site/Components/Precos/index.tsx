import { PrecoSection, Titulo } from "./style";

export default function Precos() {
    return (
        <PrecoSection id="precos">
            <div className="container">
                <div className="row text-center">
                    <Titulo>
                        <h1>Planos de preços</h1>
                        <p>Comece sua avaliação gratuita</p>
                    </Titulo>
                </div>

                <div className="row">

                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <h1>Free</h1>
                            </div>
                            <div className="card-body">
                                <h2>R$ 0,00</h2>
                                <p>Até 50 clientes</p>
                                <p>Sem suporte</p>
                                <button className="btn btn-lg btn-primary">Começar Agora</button>
                            </div>
                        </div>    
                    </div>

                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <h1>Free</h1>
                            </div>
                            <div className="card-body">
                                <h2>R$ 0,00</h2>
                                <p>Até 50 clientes</p>
                                <p>Sem suporte</p>
                                <button className="btn btn-lg btn-primary">Começar Agora</button>
                            </div>
                        </div>    
                    </div>

                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <h1>Free</h1>
                            </div>
                            <div className="card-body">
                                <h2>R$ 0,00</h2>
                                <p>Até 50 clientes</p>
                                <p>Sem suporte</p>
                                <button className="btn btn-lg btn-primary">Começar Agora</button>
                            </div>
                        </div>    
                    </div>
                
                </div>
                
                
            </div>
        </PrecoSection>
    )
}