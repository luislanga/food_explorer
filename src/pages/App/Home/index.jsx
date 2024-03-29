import { Container } from "./styles"
import { DishCard } from "../../../components/DishCard"
import { Gallery } from "../../../components/Gallery"
import { Hero } from "../../../components/Hero"
import { useEffect, useState } from "react"
import { api } from "../../../services/api"

export function Home(){
    const [dishes, setDishes] = useState([])
    const [categories, setCategories] = useState([])
    const [favorites, setFavorites] = useState([])
    const user = JSON.parse(localStorage.getItem("@foodexplorer:user"))

    useEffect(() => {
        async function getFavorites(){
            const results = await api.get(`favorites/${user.id}`)
            setFavorites(results.data)
            console.log(user.is_admin)
        }
        getFavorites()
    },[])

    useEffect(() => {
        async function getDishes(){
            const results = await api.get("/dishes?nameOrIngredient")
            setDishes(results.data)
        }
        getDishes()
        
    },[])

    useEffect(() => {
        if(dishes.length > 0){
            const categoryArr = []
            for (let i = 0; i < dishes.length; i++) {
                for (let j = 0; j < dishes[i].dishCategories.length; j++) {
                    categoryArr.push(dishes[i].dishCategories[j].name)            
                }
            }
            let uniqueCategories = [...new Set(categoryArr)]
            setCategories(uniqueCategories)
        }
        for (let i = 0; i < dishes.length; i++) {
            for (let j = 0; j < favorites.length; j++) {
                if(dishes[i].id === favorites[j].dish_id){
                    dishes[i] = {...dishes[i], isFavorite: true}
                }    
            }    
        }
    },[dishes, favorites])
        
    return (
        <Container>
            <Hero />
            <div className="featured">
                {
                    categories && categories.map((category) => {
                        return(
                            <Gallery
                            key={category} 
                            title={category}
                            >
                                { 
                                    dishes.map((dish) => {
                                        for (let i = 0; i < dish.dishCategories.length; i++) {
                                            if(dish && dish.dishCategories[i].name === category){
                                                return(
                                                    <DishCard
                                                        key={dish.id} 
                                                        fetchedDish={dish}
                                                    />
                                                )
                                            } 
                                        }
                                    })
                                }
                            </Gallery>
                        )
                    })
                }

            </div>
        </Container>

    )
}