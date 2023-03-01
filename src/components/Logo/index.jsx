import { Container } from "./styles";
import LogoImg from "../../assets/icons/Logo.svg"

export function Logo(){
    const isAdmin = false;
    return(
        <Container>
            <div className="logo">
                <img src={LogoImg} alt="" />
                <span className="userLogo">food explorer</span>
                {isAdmin && <h3 className="adminLogo">admin</h3>}
            </div>
        </Container>
    )
}