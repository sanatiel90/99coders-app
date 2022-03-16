import { Link } from "react-router-dom";

interface ClienteType {
    id: string;
    nome: string;
    email: string;
    fone: string;
}

interface TableClientProps {
    arrayClientes: ClienteType[]
}

export default function TableClient({ arrayClientes }: TableClientProps) {

    function deleteCliente(id: string) {
        
    }
    
    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr className="table-secondary">
                <th scope="col">Código</th>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
                <th scope="col">Telefone</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {arrayClientes.map(c => (
                    <tr key={c.id}>
                        <th scope="row">{c.id}</th>
                        <td>{c.nome}</td>
                        <td>{c.email}</td>
                        <td>{c.fone}</td>
                        <td>
                            <Link to={`/edit-client/${c.id}`} style={{ color: 'blue' }} ><i className="fa-solid fa-pen-to-square"></i></Link>
                            <Link to="" onClick={() => deleteCliente(c.id)} style={{ color: 'red', marginLeft: 10 }} ><i className="fa-solid fa-trash-can"></i></Link>
                        </td>
                    </tr>                                                
                ))}
                
            </tbody>
        </table>
    )
}