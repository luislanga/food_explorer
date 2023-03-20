import { Container, LogForm } from "./styles";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { Logo } from "../../../components/Logo";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";
import { useState, useEffect } from "react";

export function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [disableButton, setDisableButton] = useState(false)

    const { signIn } = useAuth()

    function handleSignIn() {
            signIn({ email, password })
            setDisableButton(true)
    }

    
    function handleEmailChange(e){
        setEmail(e.target.value)
        setDisableButton(false)
    }
    
    function handlePasswordChange(e){
        setPassword(e.target.value)
        setDisableButton(false)
    }
    
    useEffect(() => {
        const keyDownHandler = event => {
          if (event.key === 'Enter') {
            event.preventDefault()
            handleSignIn()
          }
        }
        document.addEventListener('keydown', keyDownHandler)
        return () => {
          document.removeEventListener('keydown', keyDownHandler)
        }
      }, [email,password])

    return(
        <Container>
                <div id="signInLogo">
                    <Logo />
                </div>
            <LogForm>
                <h1 id="desktopSignInTitle">Faça login</h1>
                <div>
                    <h2>Email</h2>
                    <Input onChange={handleEmailChange} placeholder="Exemplo: exemplo@exemplo.com.br"/>
                </div>
                <div>
                    <h2>Senha</h2>
                    <Input onChange={handlePasswordChange} type="password" placeholder="No mínimo 6 caracteres"/>
                </div>
                <Button disabled={disableButton} type="button" onClick={handleSignIn} title="Entrar"/>
                <Link to="/register">Criar uma conta</Link>
            </LogForm>
        </Container>
    )
}