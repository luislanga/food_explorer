import { Container } from "./styles"
import { Details } from "../../../components/Details"
import caretLeft from "../../../assets/icons/CaretLeft.svg"

export function DishDetails(){
    return (
        <Container>
            <a href="">
                <img src={caretLeft} alt="" />
                <h2>voltar</h2>
            </a>
            <div className="detailsContainer">
                <Details />
            </div>
        </Container>

    )
}