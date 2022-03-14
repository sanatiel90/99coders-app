import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormContainer, LoginLinks } from "./style";



export default function Login() {

    const [email, setEmail] = useState('');    
    const [password, setPassword] = useState('');    
    const [success, setSuccess] = useState(true);    

    const navigate = useNavigate();

    async function handleLogin(){
        try {
            const userCredential = await signInWithEmailAndPassword(getAuth(), email, password);
            console.log(userCredential.user)
            if (userCredential.user) {
                setSuccess(true);
                navigate('/home');
                
            } else {
                setSuccess(false);
            }
            
        } catch (err) {
            setSuccess(false);
            console.log('ERRO LOGIN');
            console.log(err);
        }
    }

    return (
        <FormContainer className="d-flex align-items-center text-center">
            <Form>
                <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal">Login</h1>

                <div className="form-floating">
                <input type="email" onChange={event => setEmail(event.target.value)} className="form-control" id="floatingInput" placeholder="E-mail" />
                <label htmlFor="floatingInput">E-mail</label>
                </div>
                <div className="form-floating">
                <input type="password" onChange={event => setPassword(event.target.value)} className="form-control" id="floatingPassword" placeholder="Senha" />
                <label htmlFor="floatingPassword">Senha</label>
                </div>

                <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Lembre me
                </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" onClick={handleLogin} type="button">Acessar</button>
                
                { !success && <div className="alert alert-danger mt-2" role="alert"> Erro ao logar </div> }
                
                <p className="mt-5 mb-3 text-muted">&copy;Desenvolvido por 99 Coders</p>

                <LoginLinks>
                    <Link to={"/reset"}>Esqueci minha senha</Link>
                    <Link to={"/register"}>Criar uma conta</Link>
                </LoginLinks>
            </Form>

        </FormContainer>
    )
}