import { Container } from "./styles";
import { Button } from "../Button";
import { useState } from "react";
import dish from "../../assets/icons/Dish.png"
import minus from "../../assets/icons/Minus.svg"
import plus from "../../assets/icons/Plus.svg"
import heart from "../../assets/icons/Heart.svg"
import heartRed from "../../assets/icons/HeartRed.svg"

export function DishCard({isAdmin}) {
    const [dishCount, setDishCount] = useState(1)
    const [isFavorite, setIsFavorite] = useState(false)

    function handleAdd(){
        if(dishCount < 99){
            setDishCount(prev => ++prev)
        }
    }

    function handleSubtract(){
        if (dishCount > 1){
            setDishCount(prev => --prev)
        }
    }

    function handleIsFavorite(){
        setIsFavorite(prev => !prev)
    }

    return(
        <Container>
            <img src={dish} alt="" />
            <div id="dishTitle">
                <h2>Salada Ravanello</h2>
                <h2 id="titleArrow">&gt;</h2>
            </div>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
            <span>R$ 49,97</span>

            <div>
                <div className="dishAdder">
                    <button onClick={handleSubtract}>
                        <img src={minus} alt="Remover uma unidade" />
                    </button>
                    <span>{dishCount}</span>
                    <button onClick={handleAdd}>
                        <img src={plus} alt="Adicionar uma unidade" />
                    </button>
                </div>
                <Button title="incluir" />

            </div>
                <button onClick={handleIsFavorite} className="favoriteButton">
                    <img src={isFavorite ? heartRed : heart} alt="Favorito" />
                </button>
        </Container>
    )
}