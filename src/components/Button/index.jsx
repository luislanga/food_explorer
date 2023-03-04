import { Container } from "./styles"
export function Button({title, icon, ...rest}){
    return(
        <Container {...rest}>
            {icon && <img src={icon} />}
            {title}
        </Container>
    )
}