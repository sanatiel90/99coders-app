import { Link } from "react-router-dom";
import { Form, FormContainer, LoginLinks } from "./style";

export default function Register() {
    return (
        <FormContainer className="d-flex align-items-center text-center">
            <Form>
                <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal">Criar conta</h1>

                <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
                <label htmlFor="floatingInput">E-mail</label>
                </div>
                <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
                <label htmlFor="floatingPassword">Senha</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Criar Conta</button>
                <p className="mt-5 mb-3 text-muted">&copy;Desenvolvido por 99 Coders</p>

                <LoginLinks>
                    Já tem uma conta? Faça o <Link to={"/login"}>login</Link>
                </LoginLinks>
            </Form>

        </FormContainer>
    )
}