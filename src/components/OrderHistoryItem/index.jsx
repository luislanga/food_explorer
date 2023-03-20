import { Container } from "./styles"
import { api } from "../../services/api"
import redDot from "../../assets/icons/redDot.svg"
import orangeDot from "../../assets/icons/orangeDot.svg"
import greenDot from "../../assets/icons/greenDot.svg"
import { useEffect, useState } from "react"

export function OrderHistoryItem({order, isAdmin}){
    const day = order.updated_at.slice(8,10)
    const month = order.updated_at.slice(5,7)
    const hours = (order.updated_at).slice(11,13)
    const minutes = order.updated_at.slice(14,16)
    const [dishes, setDishes] = useState([])
    const [statusDot, setStatusDot] = useState({redDot})
    const [toggle, setToggle] = useState(false)

    function tog(){
        setToggle(prev => !prev)
    }

    useEffect(() => {
        function getDishes(){
            order.orderDishes.dishes.map(async dish => {
                const results = await api.get(`dishes/${dish}`)
                setDishes(prev => [...prev, results.data])
            })
        }
        getDishes()
    },[])

    async function handleChange(e){
        const selectedStatus = e.target.value
        order.order_status = e.target.value
        tog()
        await api.patch('/orders',{order_id: order.id, status: selectedStatus})
    }

    useEffect(() => {
        let status
        switch(order.order_status){
            case 'Pendente':
                status = redDot
                break
            case 'Preparando':
                status = orangeDot
                break
            case 'Entregue':
                status = greenDot
                break 
        }
        setStatusDot(status)
    },[toggle])


    return(
        <Container>
            <div className="topRow">
                <span>{String(order.id).padStart(8,'0')}</span>
                { isAdmin === 1 ? 
                    <></> : 
                    <div className="status">
                        <img src={statusDot} alt="" />
                        <span>{order.order_status}</span>
                    </div>}
                <span>{day}/{month} às {hours}h{minutes}</span>
            </div>
            <span>
                {dishes.map( (dish, index) => {
                    return(`${order.orderDishes.quantities[index]}x 
                    ${dish.name}
                    ${index === order.orderDishes.quantities.length -1 ? "" : ', ' }`)
                },[])}
            </span>
            { isAdmin === 1 ? 
                <div className="statusSelector">
                    <img src={statusDot} alt="" />
                    <select defaultValue={order && order.order_status } onChange={handleChange}>
                        <option value="Pendente">Pendente</option>
                        <option value="Preparando">Preparando</option>
                        <option value="Entregue">Entrgue</option>    
                    </select>
                </div> :
                <></>
            }
            
        </Container>
    )
}