import { Container } from "./styles"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { DishDetails } from "../App/DishDetails"

export function App(){
    return (
        <Container>
            <Navbar />
                <DishDetails />
            <Footer />
        </Container>

    )
}