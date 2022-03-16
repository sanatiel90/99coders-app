import { collection, getFirestore, addDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { Container, ButtonForm } from "./style";



export default function EditClient() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [fone, setFone] = useState('');

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (params.id){
            const docRef = doc(getFirestore(), 'clientes', params.id);
            getDoc(docRef).then(response => {
                if(response.exists()){
                    response.data();
                }
            });
        }
        

    }, []);

    return (
        <>
            <Header />
            <Container className="container-fluid">
                <div className="offset-lg-3 col-lg-6">
                    <h1>Novo Cliente</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="inputNome" className="form-label">Código</label>
                            <input type="text" className="form-control" id="inputNome" aria-describedby="emailHelp" disabled />                        
                        </div>

                        <div className="mb-3">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input onChange={event => setNome(event.target.value)} type="text" className="form-control" id="inputNome" aria-describedby="emailHelp" />                        
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input onChange={event => setEmail(event.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />                        
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputFone" className="form-label">Telefone</label>
                            <input onChange={event => setFone(event.target.value)} type="text" className="form-control" id="inputFone" aria-describedby="emailHelp" />                        
                        </div>
                    
                        <div className="text-center" >
                            <ButtonForm type="reset" className="btn btn-outline-primary">Cancelar</ButtonForm>
                            <ButtonForm type="button"  className="btn btn-primary">Salvar</ButtonForm>
                        </div>
                        
                    </form>
                </div>
            </Container>
        </>
    )
}