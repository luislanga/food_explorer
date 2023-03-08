import { Container } from "./styles";
import LogoImg from "../../assets/icons/Logo.svg"

export function Logo(){
    
    let isAdmin = 0
    const user = JSON.parse(localStorage.getItem("@foodexplorer:user"))
    if(user){
        isAdmin = user.id
    }
    
    return(
        <Container>
            <a href="/" className="logo">
                <img src={LogoImg} alt="" />
                <div>
                    <span className="userLogo">food explorer</span>
                    {isAdmin === 1 && <h3 className="adminLogo">admin</h3>}
                </div>
            </a >
        </Container>
    )
}