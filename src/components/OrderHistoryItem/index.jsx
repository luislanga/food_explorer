import { Container } from "./styles"
import { api } from "../../services/api"
import dot from "../../assets/icons/Ellipse.svg"
import { useEffect, useState } from "react"

export function OrderHistoryItem({order}){
    const day = order.updated_at.slice(8,10)
    const month = order.updated_at.slice(5,7)
    const hours = order.updated_at.slice(11,13)
    const minutes = order.updated_at.slice(14,16)
    const [dishes, setDishes] = useState([])

    useEffect(() => {
        function getDishes(){
            order.orderDishes.dishes.map(async dish => {
                const results = await api.get(`dishes/${dish}`)
                setDishes(prev => [...prev, results.data])
            })
        }
        getDishes()
    },[])

    useEffect(() => {
        console.log(dishes)
    },[dishes])


    return(
        <Container>
            <div className="topRow">
                <span>{String(order.id).padStart(8,'0')}</span>
                <div className="status">
                    <img src={dot} alt="" />
                    <span>{order.order_status}</span>
                </div>
                <span>{day}/{month} às {hours}h{minutes}</span>
            </div>
            <span>
                {dishes.map( (dish, index) => {
                    return(`${order.orderDishes.quantities[index]}x 
                    ${dish.name}
                    ${index === order.orderDishes.quantities.length -1 ? "" : ', ' }`)
                },[])}
            </span>
            
        </Container>
    )
}