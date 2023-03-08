import { Route, Routes } from "react-router-dom";
import { App } from "../pages/App";
import { Home } from "../pages/App/Home";
import { DishDetails } from "../pages/App/DishDetails";
import { Favorites } from "../pages/App/Favorites";
import { AddDish } from "../pages/App/AddDish";


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/" element={<Home/>} />
                <Route path="/details/:id" element={<DishDetails/>} />
                <Route path="/favorites" element={<Favorites/>} />
                <Route path="/adddish" element={<AddDish/>} />

            </Route>
        </Routes>
    )
}