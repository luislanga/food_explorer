import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api"
import CartContext from "./cart";


export const AuthContext = createContext({})

function AuthProvider({ children }){
    const [data, setData] = useState({})
    const { resetCart } = useContext(CartContext)

    async function signIn({ email, password }){
        try{
            const response = await api.post("/sessions", { email, password })
            const {user, token} = response.data

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
            localStorage.setItem("@foodexplorer:token", token)

            api.defaults.headers.authorization = `Bearer ${token}`
            setData({user, token})

        }catch (error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível fazer login")
            }
        }
    }

    function signOut(){
        localStorage.removeItem("@foodexplorer:user")
        localStorage.removeItem("@foodexplorer:token")
        resetCart()
        window.location.replace("/") 

        setData({})
    }

    useEffect(() => {
        const user = localStorage.getItem("@foodexplorer:user")
        const token = localStorage.getItem("@foodexplorer:token")

        if(token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }

    },[])

    return (
        <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }