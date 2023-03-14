import { Container } from "./styles"
import { OrderItem } from "../OrderItem"
import { api } from "../../services/api"
import { useEffect, useState } from "react"

export function OrderList(){
    
    const cartItems = JSON.parse(localStorage.getItem("@foodexplorer:cart"))

    const [items, setItems] = useState([])
    const [price, setPrice] = useState(0)

    useEffect(() => {
        function getItemArray(){
            cartItems.map(async (item) => {
                const fetchedItem = await api.get(`/dishes/${item.dish_id}`)
                const data = fetchedItem.data
                setItems(prev => [...prev, data])
            })
        }
        getItemArray()
    },[])

    useEffect(() => {
        function getTotal(){
            let sum = 0
            items.map((item, i) =>{
                sum = sum + (cartItems[i].quantity * item.price)
            })
            setPrice(sum)
        }
        getTotal()
    },[items])

    return(
        <Container>
            <div className="order">
                <h2 className="listTitle">Meu pedido</h2>
                <div className="list">
                    { items && items.map((item, i) => {
                        return(
                            <OrderItem key={ item.id } item={ item } quantity={cartItems[i].quantity} />
                        )
                    })
                    }
                </div>
                <span>Total: R$ {String(price.toFixed(2)).replace(".",",")}</span>
            </div>
        </Container>
    )
}