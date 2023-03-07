import { Container } from "./styles";
import { FavoriteCard } from "../../../components/FavoriteCard";
import { useState, useEffect } from "react";
import { api } from "../../../services/api";

export function Favorites(){

    const [favorites, setFavorites] = useState([])

    const user = JSON.parse(localStorage.getItem("@foodexplorer:user"))




    useEffect(() => {
        async function getFavorites(){
            const results = await api.get(`/favorites/${user.id}`)
            setFavorites(results.data)
        }
        getFavorites()
        
    },[])

    return(
        <Container>
            <h1>Meus favoritos</h1>
            <div className="favoritesList">
                {favorites && favorites.map(favorite => {
                    return <FavoriteCard key={favorite.id} dish_id={favorite.dish_id} user={user} />
                })}
            </div>
        </Container>
    )
}