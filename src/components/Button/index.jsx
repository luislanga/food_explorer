import { Container } from "./styles"
export function Button({title, icon}){
    return(
        <Container>
            {icon && <img src={icon} />}
            {title}
        </Container>
    )
}