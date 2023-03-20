import { Container } from "./styles"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { useAuth } from "../../hooks/auth"
import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import { SearchBar } from "../../components/SearchBar"
import Close from "../../assets/icons/Close.svg"


export function App(){
    const [viewMenu, setViewMenu] = useState(false)
    const { signOut } = useAuth()
    const user = JSON.parse(localStorage.getItem("@foodexplorer:user"))
    const width = useWidth()

    function getWidth(){
        const { innerWidth: width} = window
        return width
    }

    function useWidth(){
        const [windowWidth, setWindowWidth] = useState(getWidth())
        useEffect(() => {
            function handleResize(){
                setWindowWidth(getWidth())
            }
            window.addEventListener('resize', handleResize)
            return () => {
                document.removeEventListener("resize", handleResize);
            }
        },[])
        return windowWidth
    }

    useEffect(() => {
        if(width > 1024){
            setViewMenu(false)
        }
    },[width])
    
    function handleMenu(){
        setViewMenu((prev) => !prev)
    }

    return (
        <Container>
            <Navbar onClick={handleMenu} />
            <Outlet />
            <div className={viewMenu ? "sideMenu activeMenu" : "sideMenu hiddenMenu"}>
                <div className="menuTitle">
                    <button onClick={handleMenu}>
                        <img src={Close} alt="Fechar Menu" />
                    </button>
                    <span>Menu</span>
                </div>
                <div className="menuContent">
                    <SearchBar />
                    <div className="menuLinks">
                        { user.id === 1 ? 
                            <a href="/adddish">Novo prato</a> :
                            <a href="/favorites">Meus favoritos</a>
                        }
                        <a href="/history">Histórico de pedidos</a>
                        <button onClick={signOut}>Sair</button>
                    </div>
                </div>
                <Footer />
            </div>
            <Footer />
                
        </Container>

    )
}