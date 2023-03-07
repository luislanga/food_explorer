import { Container } from "./styles"
import { Input } from "../Input"
import search from "../../assets/icons/search.svg"
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { SearchItem } from "../SearchItem"

export function SearchBar(){
    const [dishes, setDishes] = useState("")
    const [searchWord, setSearchWord] = useState("")

    useEffect(() => {
        if(searchWord !== ""){
            async function getDishes(){
                const results = await api.get(`/dishes?nameOrIngredient=${searchWord}`)
                setDishes(results.data)
            }
            getDishes()
        }else{
            setDishes("")
        }
    },[searchWord])

    return(
        <Container>
            <div className="searchBar">
                <div className="searchInput">
                    <Input 
                        icon={search} 
                        placeholder="Busque por pratos ou ingredientes" 
                        onChange={(e) => setSearchWord(e.target.value)}
                    />
                </div>
                <div 
                    className={searchWord !== "" ? 
                        "searchModal" : 
                        "searchModal searchModalHidden"}
                >
                    {dishes.length ? dishes.map(dish => {
                                return <SearchItem key={dish.id} fetchedDish={dish}/>
                            }) : <span className="notFound"> 
                                    Nenhum item encontrado 
                                </span>
                    }  
                </div>
            </div>
        </Container>
    )    
}