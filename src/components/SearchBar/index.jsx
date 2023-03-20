import { Container } from "./styles"
import { Input } from "../Input"
import search from "../../assets/icons/search.svg"
import { useState, useEffect, useRef } from "react"
import { api } from "../../services/api"
import { SearchItem } from "../SearchItem"

export function SearchBar(){
    const [dishes, setDishes] = useState("")
    const [searchWord, setSearchWord] = useState("")
    const [searchActive, setSearchActive] = useState(false)

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setSearchActive(false)
                }
                if (ref.current && ref.current.contains(event.target)) {
                    setSearchActive(true)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);


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
            <div ref={wrapperRef} className="searchBar">
                <div className="searchInput">
                    <Input 
                        icon={search} 
                        placeholder="Busque por pratos ou ingredientes" 
                        onChange={(e) => setSearchWord(e.target.value)}
                    />
                </div>
                <div 
                    className={searchWord !== "" && searchActive ? 
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