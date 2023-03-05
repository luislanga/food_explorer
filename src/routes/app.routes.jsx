import { Route, Routes } from "react-router-dom";
import { App } from "../pages/App";
import { Home } from "../pages/App/Home";
import { Navigate } from "react-router-dom";

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/" element={<Home/>} />
            </Route>
        </Routes>
    )
}