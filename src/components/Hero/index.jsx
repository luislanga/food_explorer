import { Container } from "./styles"
import HeroImage from "../../assets/images/HeroImage.png"
import HeroImageMobile from "../../assets/images/HeroImageMobile.png"

export function Hero() {
    return(
        <Container>
            <img className="heroImage" src={HeroImage}/>
            <img className="heroImageMobile" src={HeroImageMobile}/>
            <div className="heroText">
                <h2 className="heroTitle">Sabores inigualáveis</h2>
                <p className="heroSubtitle">Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
        </Container>
    )
}