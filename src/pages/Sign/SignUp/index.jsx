import { Container, LogForm } from "./styles";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { Logo } from "../../../components/Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../../services/api"

export function SignUp(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignUp(){
        
        api.post("/users", {name, email, password, is_admin: 0})
    }
    return(
        <Container>
                <div id="signInLogo">
                    <Logo />
                </div>
            <LogForm>
                <h1 id="desktopSignUpTitle">Crie sua conta</h1>
                <div>
                    <h2>Seu nome</h2>
                    <Input onChange={e => setName(e.target.value)} placeholder="Exemplo: Maria da Silva"/>
                </div>
                <div>
                    <h2>Email</h2>
                    <Input onChange={e => setEmail(e.target.value)} placeholder="Exemplo: exemplo@exemplo.com.br"/>
                </div>
                <div>
                    <h2>Senha</h2>
                    <Input onChange={e => setPassword(e.target.value)} type="password" placeholder="No mínimo 6 caracteres"/>
                </div>
                <Button type="button" onClick={handleSignUp} title="Entrar"/>
                <Link to="/">Já tenho uma conta</Link>
            </LogForm>
        </Container>
    )
}