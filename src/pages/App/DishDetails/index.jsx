import { Container } from "./styles"
import { Details } from "../../../components/Details"
import caretLeft from "../../../assets/icons/CaretLeft.svg"
import { api } from "../../../services/api"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

export function DishDetails(){
    const { id } = useParams()
    const [dish, setDish] = useState("")
    useEffect(() => {
        async function getDish(){
            const results = await api.get(`/dishes/${id}`)
            setDish(results.data)
        }
        getDish()
    },[])

    return (
        <Container>
            <Link to="/">
                <img src={caretLeft} alt="" />
                <h2>voltar</h2>
            </Link>
            <div className="detailsContainer">
                {dish !== "" && <Details fetchedDish={dish} />}
            </div>
        </Container>

    )
}