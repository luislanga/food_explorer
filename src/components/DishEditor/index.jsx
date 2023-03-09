import { Container } from "./styles"
import { Button } from "../Button"
import { useState, useSyncExternalStore } from "react"
import { useNavigate } from "react-router-dom"
import upload from "../../assets/icons/SignOut.svg"
import { TagItem } from "../TagItem"

export function DishEditor({createDish, updateDish, dish, deleteDish}){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")
    const [displayCategory, setDisplayCategory] = useState([])
    const [categories, setCategories] = useState(["Refeições"])
    const [imageFile, setImageFile] = useState(null)
    const [imageSelected, setImageSelected] = useState(false)
    const options = ["Refeições", "Sobremesas", "Bebidas"] 

    const navigate = useNavigate()

    if(dish){
        useState(() => {
            function setDishValues(){
                setName(dish.name)
                setDescription(dish.description)
                setPrice(dish.price)
                setCategories([dish.categories[0].name])
                setDisplayCategory(dish.categories[0].name)
                setIngredients(dish.ingredients.map((ingredient) => {
                    return(
                        ingredient.name
                    )
                }))
            }
            setDishValues()
        },[])
    }
        
    function handleAddIngredient(){
        setIngredients(prev => [...prev, newIngredient])
        setNewIngredient("")
    }

    function handleDeleteIngredient(deleted){
        setIngredients(prev => prev.filter(ingredient => ingredient !== deleted))
    }

    function handleChangeImage(event){
        const file = event.target.files[0]
        setImageFile(file)
        {file ? setImageSelected(true) : setImageSelected(false)}
    }

    async function handleSave(){

        { dish ? 
            await updateDish(name, description, price, ingredients, categories, imageFile) :
            await createDish(name, description, price, ingredients, categories, imageFile)
        }
        alert("Prato salvo com sucesso")
        navigate("/")
    }

    async function handleDelete(){
        if (confirm("Tem certeza que deseja excluir o prato?")){
            await deleteDish()
            navigate("/")
        }
    }

    return(
        <Container imageSelected={imageSelected}>
            <form>
                <div className="inputContainer">
                    <div className="elementContainer">
                        <span>Imagem do prato</span>
                            <label htmlFor="upload">
                                <img 
                                    className="uploadIcon" 
                                    src={upload}   
                                    alt="Fazer upload" 
                                />
                                Selecionar imagem
                                <input 
                                    id="upload" 
                                    className="hidden" 
                                    type="file"
                                    onChange={handleChangeImage}
                                />
                            </label>  
                    </div>
                    <div className="elementContainer name">
                        <span>Nome</span>
                        <input
                            value={name}
                            required
                            placeholder="Ex.: Salada Caesar" 
                            className="editorInput"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="elementContainer category">
                        <span>Categoria</span>
                        <select defaultValue={dish ? displayCategory : "Refeições"} 
                                onChange={(e) => {
                                    categories[0] = e.target.value
                                    setDisplayCategory(e.target.value)         
                                    setCategories(categories)                              
                                }
                            }>
                            {options.map(option => {
                                return(
                                    <option key={option} value={option}>{option}</option>
                                )
                            })}
                        </select>
                        
                    </div>
                </div>
                <div className="inputContainer" >
                    <div className="elementContainer ingredients">
                        <span>Ingredientes</span>
                        <div className="tagAdder">
                            {
                                ingredients.map((ingredient, index) => {
                                    return(
                                        <TagItem
                                            key={String(index)} 
                                            value={ingredient}
                                            onClick={() => handleDeleteIngredient(ingredient)}
                                        />
                                    )
                                })
                            }
                            <TagItem 
                                isNew
                                value={newIngredient}
                                onChange={e => setNewIngredient(e.target.value)}
                                onClick={handleAddIngredient}
                            />
                        </div>
                    </div>
                    <div className="elementContainer price">
                        <span>Preço</span>
                        <input 
                            required
                            value={price}
                            type="number"
                            placeholder="R$ 0,00" 
                            className="editorInput"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className="inputContainer" >
                    <div className="elementContainer description">
                        <span>Descrição</span>
                        <textarea 
                            required
                            value={description}
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            onChange={(e) => setDescription(e.target.value)} />
                    </div>
                </div>
                <div className="buttonsContainer">
                    {dish && <Button type="button" onClick={handleDelete} className="deleteButton" title="Excluir prato"/>}
                    <Button type="button" onClick={handleSave} className="saveButton" title={dish ? "Salvar alterações" : "Adicionar prato"} />
                </div>
            </form>
        </Container>
    )
}