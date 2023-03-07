import { Container, Hidden } from "./styles"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

export function FavoriteCard({dish_id, user, }){

    const [hidden, setHidden] = useState(false)
    const [dish, setDish] = useState("")
    const imageUrl = `${api.defaults.baseURL}/files/${dish.image}`

    useEffect(() => {
        async function getDish(){
            const results = await api.get(`dishes/${dish_id}`)
            setDish(results.data)
        }
        getDish()
    },[])

    async function removeFavorite() {
        await api.delete(`favorites/${user.id}`,{ data: {dish_id}})
        setDish(false)
        setHidden(true)
    }

    return(
        <>        
            {hidden ? 
                <Hidden /> : 
                <Container className={hidden ? "hidden" : ".favoriteText"}>
                    {dish && <img src={imageUrl} alt="" />}
                    {dish && <div className="favoriteText">
                        <a href={`/details/${dish.id}`}>{dish.name}</a>
                        <button onClick={removeFavorite} type="button">Remover dos Favoritos</button>
                    </div>}
                </Container>}
        </>
    )
}