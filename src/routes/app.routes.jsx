import { Route, Routes } from "react-router-dom"
import { App } from "../pages/App"
import { Home } from "../pages/App/Home"
import { DishDetails } from "../pages/App/DishDetails"
import { Favorites } from "../pages/App/Favorites"
import { AddDish } from "../pages/App/AddDish"
import { EditDish } from "../pages/App/EditDish"
import { OrderCheckout } from "../pages/App/OrderCheckout"
import { OrderHistory } from "../pages/App/OrderHistory"


export function AppRoutes(){
    return(
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="/" element={<Home/>} />
                    <Route path="/details/:id" element={<DishDetails/>} />
                    <Route path="/favorites" element={<Favorites/>} />
                    <Route path="/adddish" element={<AddDish/>} />
                    <Route path="/editdish/:id" element={<EditDish/>} />
                    <Route path="/checkout" element={<OrderCheckout/>} />
                    <Route path="/history" element={<OrderHistory/>} />
                </Route>
            </Routes>
    )
}