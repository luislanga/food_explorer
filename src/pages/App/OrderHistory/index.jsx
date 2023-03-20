import { Container } from "./styles"
import { OrderHistoryItem } from "../../../components/OrderHistoryItem"
import { api } from "../../../services/api"
import { useEffect, useState } from "react"

export function OrderHistory(){

    const [orders, setOrders] = useState("")

    const user = JSON.parse(localStorage.getItem("@foodexplorer:user"))

    const isAdmin = user.id

    useEffect(() => {
        async function getOrders(){
            const results = await api.get('/orders')
            setOrders(results.data)
        }
        getOrders()
    },[])
    return(
        <Container>
            <h2>Pedidos</h2>
            <div className="orderContainer">
                { orders && orders.map( order => {
                    return(
                        <OrderHistoryItem key={order.id} order={order} isAdmin={isAdmin}/>
                    )
                }) }
            </div>
        </Container>
    )
}