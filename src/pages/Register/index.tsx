import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormContainer, LoginLinks } from "./style";

export default function Register() {

    const [email, setEmail] = useState('');    
    const [password, setPassword] = useState('');    

    async function handleRegister() {
        try {
            console.log('1')
            const auth = getAuth();
            const userCredencial = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredencial.user);
            console.log('2')

        } catch (err) {
            console.log('ERRO');
            console.log(err);
        }

    }

    return (
        <FormContainer className="d-flex align-items-center text-center">
            <Form  >
                <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal">Criar conta</h1>

                <div className="form-floating">
                <input type="email" onChange={event => setEmail(event.target.value)} className="form-control" id="floatingInput" placeholder="E-mail" />
                <label htmlFor="floatingInput">E-mail</label>
                </div>
                <div className="form-floating">
                <input type="password" onChange={event => setPassword(event.target.value)} className="form-control" id="floatingPassword" placeholder="Senha" />
                <label htmlFor="floatingPassword">Senha</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" onClick={handleRegister} type="button">Criar Conta</button>
                <p className="mt-5 mb-3 text-muted">&copy;Desenvolvido por 99 Coders</p>

                <LoginLinks>
                    Já tem uma conta? Faça o <Link to={"/login"}>login</Link>
                </LoginLinks>
            </Form>

        </FormContainer>
    )
}