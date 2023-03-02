import { Container, Tag } from "./styles"
import { Button } from "../Button"
import Receipt from "../../assets/icons/Receipt.svg"
import Plus from "../../assets/icons/Plus.svg"
import Minus from "../../assets/icons/Minus.svg"
import DishLarge from "../../assets/icons/DishLarge.png"

export function Details() {
    return(
        <Container>
            <img src={DishLarge} alt="" />
            <h1>Salada Ravanello</h1>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
            <div className="tags">            
                <Tag>
                    alface
                </Tag>
                <Tag>
                    cebola
                </Tag>
                <Tag>
                    pão naan
                </Tag>
                <Tag>
                    pepino
                </Tag>
                <Tag>
                    rabanete
                </Tag>
            </div>
            <div className="addDish">
                <div className="adder">

                </div>
                <Button icon={Receipt} title={`pedir - R$ 25,00`} />
            </div>
        </Container>
    )
}