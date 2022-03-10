import { NavBar } from "./style";


export default function Menu() {
    return (
        <NavBar className="navbar navbar-expand-md navbar-dark ">            
                <div className="container">
                    <a className="navbar-brand" href="#">99 CRM</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>                        
                            <li className="nav-item">
                                <a className="nav-link" href="#">Clientes</a>
                            </li>                        
                            <li className="nav-item">
                                <a className="nav-link" href="#">Planos e Preços</a>
                            </li>                        
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contato</a>
                            </li>                        
                        </ul>                
                    </div>
                </div>
           
        </NavBar>
    )
}