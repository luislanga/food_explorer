import { Container } from "./styles"
import { OrderList } from "../../../components/OrderList"
import { Payment } from "../../../components/Payment"
import { useContext } from "react"
import CartContext from "../../../hooks/cart"

export function OrderCheckout(){
    const {items} = useContext(CartContext)
    return(
        <Container>
            { items ?
            <>
                <OrderList />
                <Payment />
            </> :
            <h2>Nenhum pedido no carrinho</h2>
            }
        </Container>
    )
}