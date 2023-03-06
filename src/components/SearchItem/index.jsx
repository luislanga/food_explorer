import { Container } from "./styles"
import { api } from "../../services/api"


export function SearchItem({fetchedDish}){
    const imageUrl = `${api.defaults.baseURL}/files/${fetchedDish.image}`
    const dishUrl = `/details/${fetchedDish.id}` 
    return(
        <Container className="searchItem">
            <a href={dishUrl} className="itemContainer">
                <img src={imageUrl}/>
                <div>
                    <span className="title">{fetchedDish.name}</span>
                    <span>{`R$ ${(fetchedDish.price).toFixed(2).toString().replace('.',',')}`}</span>
                </div>
            </a>
        </Container>
    )
}