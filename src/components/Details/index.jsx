import { Container, Tag } from "./styles"
import { useState } from "react"
import { Button } from "../Button"
import Receipt from "../../assets/icons/Receipt.svg"
import Plus from "../../assets/icons/Plus.svg"
import Minus from "../../assets/icons/Minus.svg"
import DishLarge from "../../assets/icons/DishLarge.png"
import { api } from "../../services/api"

export function Details({fetchedDish}) {
    let isAdmin = 0
    const user = JSON.parse(localStorage.getItem("@foodexplorer:user"))
    if(user){
        isAdmin = user.id
    }
    const imageUrl = `${api.defaults.baseURL}/files/${fetchedDish.image}`
    const [dishCount, setDishCount] = useState(1)
    const unitPrice = fetchedDish.price
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
            <img src={imageUrl} alt="" />
            <div className="bottomContainer">
                <h1>{fetchedDish.name}</h1>
                <p>{fetchedDish.description}</p>
                <div className="tags">
                    {fetchedDish.ingredients.map(ingredient => {
                        return(
                            <Tag key={ingredient.id}>{ingredient.name}</Tag>
                        )
                    })}            
                </div>
                <div className="addDish">
                    { isAdmin === 1 ?
                        <></> : 
                        <div className="adder">
                            <button onClick={handleSubtract}>
                                <img  src={Minus} alt="Remover unidade" />
                            </button>
                            <span>{dishCount}</span>
                            <button onClick={handleAdd}>
                                <img src={Plus} alt="Adicionar unidade" />
                            </button>
                        </div> 
                    }
                    { isAdmin === 1 ? 
                        <a href={`/editdish/${fetchedDish.id}`}>
                            <Button className="editButton" title="Editar Prato" /> 
                        </a> : 
                        <Button icon={Receipt} title={`pedir - R$ ${currentPrice}`} />
                    }
                </div>
            </div>
        </Container>
    )
}