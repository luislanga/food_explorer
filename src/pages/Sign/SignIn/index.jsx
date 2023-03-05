import { Container, LogForm } from "./styles";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { Logo } from "../../../components/Logo";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";
import { useState } from "react";


export function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()

    function handleSignIn() {
        signIn({ email, password })
    }

    return(
        <Container>
                <div id="signInLogo">
                    <Logo />
                </div>
            <LogForm>
                <h1 id="desktopSignInTitle">Faça login</h1>
                <div>
                    <h2>Email</h2>
                    <Input onChange={(e) => setEmail(e.target.value)} placeholder="Exemplo: exemplo@exemplo.com.br"/>
                </div>
                <div>
                    <h2>Senha</h2>
                    <Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="No mínimo 6 caracteres"/>
                </div>
                <Button type="button" onClick={handleSignIn} title="Entrar"/>
                <Link to="/register">Criar uma conta</Link>
            </LogForm>
        </Container>
    )
}