import { Container, Tag } from "./styles"
import { useState } from "react"
import { Button } from "../Button"
import Receipt from "../../assets/icons/Receipt.svg"
import Plus from "../../assets/icons/Plus.svg"
import Minus from "../../assets/icons/Minus.svg"
import DishLarge from "../../assets/icons/DishLarge.png"

export function Details() {
    const [dishCount, setDishCount] = useState(1)
    const unitPrice = 25
    const currentPrice = (unitPrice*dishCount).toFixed(2).toString().replace('.',',');
    
    function handleAdd() {
        if(dishCount < 99){
            setDishCount(prev => ++prev)
        }
    }

    function handleSubtract(){
        if(dishCount > 1){
            setDishCount(prev => --prev)
        }
    }

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
                <button onClick={handleSubtract}>
                    <img  src={Minus} alt="Remover unidade" />
                </button>
                <span>{dishCount}</span>
                <button onClick={handleAdd}>
                    <img src={Plus} alt="Adicionar unidade" />
                </button>
                </div>
                <Button icon={Receipt} title={`pedir - R$ ${currentPrice}`} />
            </div>
        </Container>
    )
}