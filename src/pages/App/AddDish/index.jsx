import { Container } from "./styles"
import caretLeft from "../../../assets/icons/CaretLeft.svg"
import { DishEditor } from "../../../components/DishEditor"
import { api } from "../../../services/api"

export function AddDish(){
    async function createDish(name, description, price, ingredients, categories, imageFile){
        const user = JSON.parse(localStorage.getItem("@foodexplorer:user"))

        await api.post(`/dishes/${user.id}`,{name, description, price, ingredients, categories})

        const results = await api.get(`/dishes?nameOrIngredient`)
        const dishArray =  results.data
        const dish_id =  dishArray[dishArray.length-1].id
        
        if(imageFile){
            const fileUploadForm = new FormData()
            fileUploadForm.append("image", imageFile)
            await api.patch(`/dishes/${dish_id}/image`, fileUploadForm)
        }
        
    }
    return(
        <Container>
            <a href="/">
                <img src={caretLeft} alt="" />
                <h2>voltar</h2>
            </a>
            <h1>Adicionar prato</h1>
            <DishEditor createDish={createDish} />
        </Container>
    )
}