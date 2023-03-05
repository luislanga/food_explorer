import { Container } from "./styles"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { Outlet } from "react-router-dom"



export function App(){

    return (
        <Container>
            <Navbar />
            <Outlet />
            <Footer />
        </Container>

    )
}