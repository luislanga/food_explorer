import { Container } from "./styles"
import caretLeft from "../../../assets/icons/CaretLeft.svg"
import { DishEditor } from "../../../components/DishEditor"

export function AddDish(){
    return(
        <Container>
            <a href="/">
                <img src={caretLeft} alt="" />
                <h2>voltar</h2>
            </a>
            <DishEditor />
        </Container>
    )
}