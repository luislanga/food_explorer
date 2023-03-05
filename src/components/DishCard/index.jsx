import { Container } from "./styles";
import { Button } from "../Button";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import dish from "../../assets/icons/Dish.png"
import minus from "../../assets/icons/Minus.svg"
import plus from "../../assets/icons/Plus.svg"
import heart from "../../assets/icons/Heart.svg"
import heartRed from "../../assets/icons/HeartRed.svg"
import { Link } from "react-router-dom";

export function DishCard({isAdmin, fetchedDish}) {
    const imageUrl = `${api.defaults.baseURL}/files/${fetchedDish.image}`
    const dishDetailUrl = `/details/${fetchedDish.id}`
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
            {fetchedDish && <img className="dishImage" src={imageUrl} alt="" />}
            <div id="dishTitle">
                {fetchedDish && <Link to={dishDetailUrl}><h2>{fetchedDish.name}</h2></Link>}
                <h2 id="titleArrow">&gt;</h2>
            </div>
            {fetchedDish && <p>{fetchedDish.description}</p>}
            {fetchedDish && <span>R$ {(fetchedDish.price).toFixed(2).toString().replace('.',',')}</span>}

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