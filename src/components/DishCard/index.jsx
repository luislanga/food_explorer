import { Container } from "./styles";
import { Button } from "../Button";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import minus from "../../assets/icons/Minus.svg"
import plus from "../../assets/icons/Plus.svg"
import heart from "../../assets/icons/Heart.svg"
import pencil from "../../assets/icons/Pencil.svg"
import heartRed from "../../assets/icons/HeartRed.svg"
import placeholder from "../../assets/images/placeholder.png"

export function DishCard({fetchedDish}) {
    const imageUrl = `${api.defaults.baseURL}/files/${fetchedDish.image}`
    const dishDetailUrl = `/details/${fetchedDish.id}`
    const [dishCount, setDishCount] = useState(1)
    const [imageFound, setImageFound] = useState(true)
    const [toggle, setToggle] = useState(false)
    const user = JSON.parse(localStorage.getItem("@foodexplorer:user"))
    let isAdmin = 0
    if(user){
        isAdmin = user.id
    }    
    
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
  
    async function handleIsFavorite(){
        if(fetchedDish.isFavorite){
            await api.delete(`favorites/${user.id}`,{ data: {dish_id: fetchedDish.id}})
            fetchedDish.isFavorite = false;
        }else{
            await api.post(`favorites/${user.id}`,{ dish_id: fetchedDish.id})
            fetchedDish.isFavorite = true;
        }
        setToggle(prev => !prev)
    }

    useEffect(()=>{},[fetchedDish.isFavorite])

    async function getLink(){
        try{
            await api.get(imageUrl)
        }catch(e) {
            setImageFound(false)
        }
    }
    getLink()

    return(
        <Container>
            <img 
                className="dishImage" 
                src={imageFound ? imageUrl : placeholder} 
            />
            <div id="dishTitle">
                <a href={dishDetailUrl}>
                    <h2>{fetchedDish.name}</h2>
                </a>
                <h2 id="titleArrow">&gt;</h2>
            </div>
            <p>{fetchedDish.description}</p>
            <span>R$ {(fetchedDish.price).toFixed(2).toString().replace('.',',')}</span>
            {
                isAdmin === 1 ? 
                    <></> : 
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
            }

            {   
                isAdmin === 1 ? 
                    <a href={`/editdish/${fetchedDish.id}`}>
                        <button className="favoriteButton">
                            <img src={pencil} alt="Favorito" />
                        </button> 
                    </a>
                    :
                    <button onClick={handleIsFavorite} className="favoriteButton">
                        <img src={fetchedDish.isFavorite ? heartRed : heart} alt="Favorito" />
                    </button>
            }
        </Container>
    )
}