import { Container } from "./styles"
import { Input } from "../../components/Input"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import Close from "../../assets/icons/Close.svg"
import search from "../../assets/icons/search.svg"
import { useAuth } from "../../hooks/auth"
import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"


export function App(){
    const [viewMenu, setViewMenu] = useState(false)
    const width = useWidth()
    const { signOut } = useAuth()
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
                    <div className="searchInput">
                        <Input icon={search} placeholder="Busque por pratos ou ingredientes"/>
                    </div>
                    <div className="menuLinks">
                        <button onClick={signOut}>Sair</button>
                    </div>
                </div>
                <Footer />
            </div>
            <Footer />
                
        </Container>

    )
}