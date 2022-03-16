import { Link } from "react-router-dom";
import { NavBar } from "./style";

export default function Header() {
    return (
        <NavBar className="navbar fixed-top navbar-expand-md navbar-dark ">            
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/home"}>99 CRM</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#banner">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Novo Cliente</a>
                            </li>                        
                            <li className="nav-item">
                                <a className="nav-link" href="">Sair</a>
                            </li>                        
                            
                        </ul>                
                    </div>
                </div>
           
        </NavBar>
    )
}