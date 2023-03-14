import { Container } from "./styles"
import { api } from "../../services/api"
import { useContext } from "react"
import CartContext from "../../hooks/cart"

export function OrderItem({ item, quantity }){
    const imageUrl = `${api.defaults.baseURL}/files/${item.image}`
    const {removeFromCart} = useContext(CartContext)
    function handleClick(){
        removeFromCart(item.id)
        location.reload()
    }

    return(
        <Container>
            <img src={imageUrl} alt="" />
            <div>
                <div className="text">
                    <span className="quantity">{quantity}x</span>
                    <span className="title">{item.name}</span>
                    <span className="price">R$ {String((item.price * quantity).toFixed(2)).replace(".",",")}</span>
                </div>
                <div className="delete">
                    <button onClick={handleClick} className="deleteButton">Excluir</button>
                </div>
            </div>
        </Container>
    )
}