import { Container } from "./styles";
import menu from "../../assets/icons/Menu.svg"
import receipt from "../../assets/icons/Receipt.svg"
import signOutIcon from "../../assets/icons/SignOut.svg"
import search from "../../assets/icons/search.svg"
import { Logo } from "../../components/Logo"
import { Input } from "../../components/Input"
import { Button } from "../Button";
import { useAuth } from "../../hooks/auth";
 
export function Navbar(){
    const pedidos = 20

    const { signOut } = useAuth()

    return(
        <Container>
            <img id="hamburgerMenu" src={menu} alt="Menu" />
            <Logo />
            <div id="desktopNav">
                <Input placeholder="Pesquisar" icon={search}/>
                <Button title={`Pedidos (${pedidos})`} icon={receipt}/>
                <button onClick={signOut} className="signout">
                    <img id="signOutIcon" src={signOutIcon} alt="Sair" />
                </button>
            </div>
            <a href="" className="orders">
                <img src={receipt} alt="Pedidos" />
                <span>10</span>
            </a>
        </Container>
    )
}