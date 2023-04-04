import { Container } from "./styles"
import { Button } from "../Button"
import { api } from "../../services/api"
import pix from "../../assets/icons/PIX.svg"
import creditCard from "../../assets/icons/CreditCard.svg"
import qr from "../../assets/icons/qrcode.png"
import { useState, useContext } from "react"
import clock from "../../assets/images/Clock.svg"
import CartContext from "../../hooks/cart"

export function Payment(){
    const [pixActive, setPixActive] = useState(true)
    const [creditActive, setCreditActive] = useState(false)
    const [isPaid, setIsPaid] = useState(false)
    const {resetCart} = useContext(CartContext)
    const cartItems = JSON.parse(localStorage.getItem("@foodexplorer:cart"))
    const dishes = cartItems.map(item => {
        return(item.dish_id)
    })
    const quantities = cartItems.map(item => {
        return(item.quantity)
    })

    function handleClickPix(){
        setPixActive(true)
        setCreditActive(false)
    }

    
    function handleClickCredit(){
        setPixActive(false)
        setCreditActive(true)
    }

    async function simulatePayment(){

        setIsPaid(true)
        await api.post("/orders", {orderDishes: {dishes, quantities}})
        resetCart()
        window.location.href = '/history';

    }
    return(
        <Container>
            <h2 className="paymentTitle">Pagamento</h2>
            { isPaid ?
                <>
                    <img className="loadingPayment" src={clock} alt=""/>
                </> :
                <div className="paymentContainer">
                    <div className="paymentMethodSelector">
                        <Button 
                            onClick={handleClickPix} 
                            className={pixActive ? "activeButton" : ""} 
                            icon={pix} 
                            title="PIX"/>
                        <Button 
                            onClick={handleClickCredit} 
                            className={creditActive ? "activeButton" : ""}
                            icon={creditCard}  
                            title="Crédito"/>
                    </div>
                    { pixActive ? 
                        <div onClick={simulatePayment} className="qrContainer">
                            <img src={qr} alt="" />
                            <span>( clique para simular pagamento )</span>
                        </div> :
                        <div className="creditContainer">
                            <div className="cardField">
                                <span>Número do cartão</span>
                                <input type="number" />
                            </div>
                            <div className="creditSecondRow">
                                <div className="cardField">
                                    <span>Validade</span>
                                    <input type="date" />
                                </div>
                                <div className="cardField">
                                    <span>CVC</span>
                                    <input type="number" />
                                </div>
                            </div>
                            <Button onClick={simulatePayment} className="submitButton" title="Simular pagamento"/>
                        </div>
                    }
                </div>
            }
        </Container>
    )
}