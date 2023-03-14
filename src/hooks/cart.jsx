import { createContext, useEffect, useState } from "react"

const CartContext = createContext()

const localCart = JSON.parse(localStorage.getItem("@foodexplorer:cart")) || ""

export function CartProvider({children}){
    const [items, setItems] = useState(localCart)

    function addToCart(dish_id, quantity){
        if(items){
            let hasItem = false
            items.map((item, i=0) => {
                i++
                if(item.dish_id === dish_id){
                    item.quantity = item.quantity + quantity
                    localStorage.setItem("@foodexplorer:cart", JSON.stringify(items))
                    hasItem = true
                }else if(!hasItem && i === items.length){
                    setItems(prev => [...prev, {dish_id, quantity}])
                }
            })       
        }else{
            setItems(prev => [...prev, {dish_id, quantity}])
        }
    }

    function removeFromCart(dish_id){
        if(items.length === 1){
            setItems("")
        }else{
            const newArr = items.filter(item => item.dish_id !== dish_id)
            setItems(newArr)
        }
    }

    function resetCart(){
        setItems("")
    }
    
    useEffect(() => {
        localStorage.setItem("@foodexplorer:cart", JSON.stringify(items))
    },[items])

    return(
        <CartContext.Provider value={{ items, addToCart, removeFromCart, resetCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext