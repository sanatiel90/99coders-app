import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { Container, ButtonForm } from "./style";

export default function NewClient() {
    return (
        <>
            <Header />
            <Container className="container-fluid">
                <div className="offset-lg-3 col-lg-6">
                    <h1>Novo Cliente</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputNome" aria-describedby="emailHelp" />                        
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />                        
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputFone" className="form-label">Telefone</label>
                            <input type="text" className="form-control" id="inputFone" aria-describedby="emailHelp" />                        
                        </div>
                    
                        <div className="text-center" >
                            <ButtonForm type="submit" className="btn btn-outline-primary">Cancelar</ButtonForm>
                            <ButtonForm type="submit" className="btn btn-primary">Salvar</ButtonForm>
                        </div>
                        
                    </form>
                </div>
            </Container>
        </>
    )
}