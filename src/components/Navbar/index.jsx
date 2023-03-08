import { Container } from "./styles";
import menu from "../../assets/icons/Menu.svg"
import receipt from "../../assets/icons/Receipt.svg"
import signOutIcon from "../../assets/icons/SignOut.svg"
import search from "../../assets/icons/search.svg"
import { Logo } from "../../components/Logo"
import { SearchItem } from "../SearchItem";
import { Input } from "../../components/Input"
import { Button } from "../Button";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api"
import { useState, useEffect } from "react"
 
export function Navbar({onClick}){

    let isAdmin = 0
    const user = JSON.parse(localStorage.getItem("@foodexplorer:user"))
    if(user){
        isAdmin = user.id
    }
    const [dishes, setDishes] = useState("")
    const [searchWord, setSearchWord] = useState("")

    useEffect(() => {
        if(searchWord !== ""){
            async function getDishes(){
                const results = await api.get(`/dishes?nameOrIngredient=${searchWord}`)
                setDishes(results.data)
            }
            getDishes()
        }else{
            setDishes("")
        }
    },[searchWord])

    const { signOut } = useAuth()

    const pedidos = 20

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
                <div className="searchBar">
                    <Input
                        placeholder="Pesquisar" 
                        icon={search} 
                        onChange={(e) => setSearchWord(e.target.value)}
                    />
                    <div 
                        className={searchWord !== "" ? 
                            "searchModal" : 
                            "searchModal searchModalHidden"}
                    >
                        {dishes.length ? dishes.map(dish => {
                                    return <SearchItem key={dish.id} fetchedDish={dish}/>
                                }) : <span className="notFound"> 
                                        Nenhum item encontrado 
                                    </span>
                        }  
                    </div>
                </div>
                <a className="favorites" href="/favorites">Meus Favoritos</a>
                {isAdmin === 1 ? 
                    <a className="newDishButton" href="/adddish">Novo Prato</a> :
                    <Button 
                        title={`Pedidos (${pedidos})`}
                        icon={receipt}
                    />
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
            <a href="" className="orders">
                <img src={receipt} alt="Pedidos" />
                <span>10</span>
            </a>
        </Container>
    )
}