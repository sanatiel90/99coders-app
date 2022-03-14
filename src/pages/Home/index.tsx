import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import TableClient from "../../components/TableClient";
import { Container } from "./style";

export default function Home() {

    const [clientes, setClientes] = useState<ClienteType[]>([]);
    const [busca, setBusca] = useState('');
    const [texto, setTexto] = useState('');

    interface ClienteType {
        id: string;
        nome: string;
        email: string;
        fone: string;
    }

    useEffect(() => {
        
        const clientesRef = collection(getFirestore(), 'clientes');

        let listClientes: ClienteType[] = [];
        
        onSnapshot(clientesRef, clienteSnapshot => {
            clienteSnapshot.forEach(cliente => {
                if (cliente.data().nome.indexOf(busca) >= 0) {
                    listClientes.push({
                        id: cliente.id,
                        nome: cliente.data().nome,
                        email: cliente.data().email,
                        fone: cliente.data().fone,
                    });                
                }                
            })

            setClientes(listClientes);
        });
    }, [busca]);


    return (
        <>
            <Header/>
            <Container className="container-fluid">  
                <h1>Cadastro de Clientes</h1>
                <div className="row">
                    <div className="col-5">
                        <Link className="btn btn-primary" to={"/new-client"} ><i className="fa-solid fa-plus"></i> Cliente</Link>
                    </div>    
                    <div className="col-7">
                        <div className="input-group mb-3">
                            <input type="text" onChange={event => setTexto(event.target.value)} className="form-control" placeholder="Pesquisar por nome" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button onClick={() => setBusca(texto)}  className="btn btn-primary" type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>       
                    </div>    
                </div>
                <TableClient arrayClientes={clientes}  />
            </Container>
        </>
    )
}