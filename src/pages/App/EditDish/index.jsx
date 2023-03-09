import { Container } from "./styles"
import caretLeft from "../../../assets/icons/CaretLeft.svg"
import { DishEditor } from "../../../components/DishEditor"
import { api } from "../../../services/api"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export function EditDish(){
    const user = JSON.parse(localStorage.getItem("@foodexplorer:user"))
    const [dish, setDish] = useState()
    const {id} = useParams()

    useEffect(()=>{
        async function getDish(){
            const results = await api.get(`/dishes/${id}`)
            setDish(results.data)
        }
        getDish()
    },[])

    async function deleteDish(){
        await api.delete(`dishes/${user.id}/${id}`)
    }

    async function updateDish(name, description, price, ingredients, categories, imageFile){
        await api.patch(`/dishes/${user.id}/${id}`,{name, description, price, ingredients, categories})
        if(imageFile){
            const fileUploadForm = new FormData()
            fileUploadForm.append("image", imageFile)
            await api.patch(`/dishes/${id}/image`, fileUploadForm)
        }
    }
    return(
        <Container>
            <a href="/">
                <img src={caretLeft} alt="" />
                <h2>voltar</h2>
            </a>
            <h1>Editar prato</h1>
            { dish && <DishEditor updateDish={updateDish} dish={dish} deleteDish={deleteDish} /> }
        </Container>
    )
}