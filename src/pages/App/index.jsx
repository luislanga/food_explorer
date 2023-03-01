import { Container } from "./styles"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import {Home} from "../App/Home"

export function App(){
    return (
        <Container>
            <Navbar />
                <Home />
            <Footer />
        </Container>

    )
}