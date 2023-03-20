import { Container, LogForm } from "./styles";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { Logo } from "../../../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../../services/api"

export function SignUp(){
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disableButton, setDisableButton] = useState(false)

    function handleSignUp(){
        if(!name || !email || !password) {
            return alert("Preencha todos os campos!")
        }
        if(password.length < 6){
            return alert("A senha precisa ter no mínimo 6 caracteres")
        }
        setDisableButton(true)
        api.post("/users", {name, email, password, is_admin: 0})
            .then(() => {
                alert("Usuário cadastrado com sucesso")
                navigate("/")
            })
            .catch((error) => {
                if(error.response){
                    alert(error.response.data.message)
                } else{
                    alert("Não foi possível cadastrar o usuário")
                }
            })
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
                    <Input required onChange={e => setEmail(e.target.value)} type="email" placeholder="Exemplo: exemplo@exemplo.com.br"/>
                </div>
                <div>
                    <h2>Senha</h2>
                    <Input onChange={e => setPassword(e.target.value)} type="password" placeholder="No mínimo 6 caracteres"/>
                </div>
                <Button disabled={disableButton} onClick={handleSignUp} title="Cadastrar"/>
                <Link to="/">Já tenho uma conta</Link>
            </LogForm>
        </Container>
    )
}