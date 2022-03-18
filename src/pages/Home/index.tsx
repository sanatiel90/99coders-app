import { collection, deleteDoc, doc, getFirestore, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import TableClient from "../../components/TableClient";
import { AuthContext } from "../../contexts/AuthContext";
import clientesPDF from "../../reports/clientes";
import { Container } from "./style";

export default function Home() {

    /*const navigate = useNavigate();
    const { logado } = useContext(AuthContext);

    if (!logado) {
        navigate('/login');
    }*/

    const [clientes, setClientes] = useState<ClienteType[]>([]);
    const [busca, setBusca] = useState('');
    const [texto, setTexto] = useState('');
    const [deletado, setDeletado] = useState('');
    const [confirma, setConfirma] = useState(false);
    const [confirmaId, setConfirmaId] = useState('');
    

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
    }, [busca, deletado]);

    
    function deleteClient(id: string) {
        
            deleteDoc(doc(getFirestore(), 'clientes', id)).then((response) => {
                setDeletado(id);
                setConfirma(false);
            });            
        
    }

    function confirmDeleteClient(id: string){
        setConfirmaId(id);
        setConfirma(true);
    }

    return (
        <>
            <Header/>
            <Container className="container-fluid">  
                <h1>Cadastro de Clientes</h1>
                <div className="row">
                    <div className="col-5">
                        <Link className="btn btn-primary" style={{marginRight: 8}} to={"/new-client"} ><i className="fa-solid fa-plus"></i> Cliente</Link>
                        <button onClick={(event) => clientesPDF(clientes)}  className="btn btn-danger" type="button" id="button-addon2"><i style={{marginRight: 6}} className="fa-solid fa-file-pdf"></i>Gerar PDF</button>
                    </div>    
                    <div className="col-7">
                        <div className="input-group mb-3">
                            <input type="text" onChange={event => setTexto(event.target.value)} className="form-control" placeholder="Pesquisar por nome" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button onClick={() => setBusca(texto)}  className="btn btn-primary" type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>       
                    </div>    
                </div>
                <TableClient arrayClientes={clientes} deleteCliente={confirmDeleteClient}  />

                { confirma &&                 
                    <SweetAlert
                        warning
                        showCancel
                        confirmBtnText="Sim"
                        confirmBtnBsStyle="danger"
                        cancelBtnText="Não"                    
                        title="Excluir Cliente"
                        cancelBtnStyle={{ textDecoration: 'none' }}
                        onConfirm={() => deleteClient(confirmaId)}
                        onCancel={() => setConfirma(false)}
                        reverseButtons                    
                    >
                    Deseja excluir o cliente?
                </SweetAlert>
                }
            </Container>
        </>
    )
}
