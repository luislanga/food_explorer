import { Container } from "./styles";

export function Input({icon, ...rest}){
    return(
        <Container >
            {icon && <img src={icon} />}
            <input {...rest} />
            
        </Container>
    )
}