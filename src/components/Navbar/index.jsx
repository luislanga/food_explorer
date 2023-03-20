import { Container } from "./styles";
import menu from "../../assets/icons/Menu.svg"
import receipt from "../../assets/icons/Receipt.svg"
import signOutIcon from "../../assets/icons/SignOut.svg"
import { Logo } from "../../components/Logo"
import { Button } from "../Button";
import { useAuth } from "../../hooks/auth";
import CartContext from "../../hooks/cart";
import { SearchBar } from "../../components/SearchBar"
import { useContext } from "react"
 
export function Navbar({onClick}){
    let isAdmin = 0
    const user = JSON.parse(localStorage.getItem("@foodexplorer:user"))
    if(user){
        isAdmin = user.id
    }
    
    const {items} = useContext(CartContext)
    const { signOut } = useAuth()

    return(
        <Container>
            <img 
                onClick={onClick}
                id="hamburgerMenu" 
                src={menu} 
                alt="Menu" 
            />
            <Logo />
            <div id="desktopNav">
                <SearchBar />
                <a className="history" href="/history">Histórico de pedidos</a>
                {isAdmin === 1 ? 
                    <a className="newDishButton" href="/adddish">Novo Prato</a> :
                    <>
                        <a className="favorites" href="/favorites">Meus Favoritos</a>
                        <a href="/checkout">
                            <Button                    
                                title={`Pedidos (${items.length})`}
                                icon={receipt}
                                />
                        </a>
                    </>
                }
                <button
                    onClick={signOut} 
                    className="signout"
                >
                    <img 
                        id="signOutIcon" 
                        src={signOutIcon} 
                        alt="Sair" 
                    />
                </button>
            </div>
            <a href="/checkout" className="orders">
                <img src={receipt} alt="Pedidos" />
                <span>{items.length}</span>
            </a>
        </Container>
    )
}