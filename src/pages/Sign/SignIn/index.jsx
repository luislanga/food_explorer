import { Container, LogForm } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";

export function SignIn(){
    return(
        <Container>
                <div id="signInLogo">
                    <Logo />
                </div>
            <LogForm>
                <h1 id="desktopSignInTitle">Faça login</h1>
                <div>
                    <h2>Email</h2>
                    <Input placeholder="Exemplo: exemplo@exemplo.com.br"/>
                </div>
                <div>
                    <h2>Senha</h2>
                    <Input placeholder="No mínimo 6 caracteres"/>
                </div>
                <Button title="Entrar"/>
                <a href="">Criar uma conta</a>
            </LogForm>
        </Container>
    )
}