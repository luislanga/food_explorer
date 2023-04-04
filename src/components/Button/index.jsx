import { Container } from "./styles"
import loading from "../../assets/icons/loading.svg"
export function Button({title, icon, ...rest}){
    return(
        <Container {...rest}>
            {icon && <img src={icon} />}
            {title}
        </Container>
    )
}