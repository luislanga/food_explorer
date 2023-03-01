import { Container } from "./styles"
import grayLogo from "../../assets/icons/grayLogo.svg"

export function Footer() {
    return(
        <Container>
            <div className="footerLogo">
                <img src={grayLogo} alt="" />
                <span>food explorer</span>
            </div>
            <span>© 2023 - Todos os direitos reservados.</span>
        </Container>
    )
}