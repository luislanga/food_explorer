import { Container } from "./styles"
import { Button } from "../Button"
import { useState } from "react"
import upload from "../../assets/icons/SignOut.svg"
import { TagItem } from "../TagItem"

export function DishEditor({createDish}){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")
    const [categories, setCategories] = useState(["Refeições"])
    const [image, setImage] = useState(null) //recuperar imagem atual
    const [imageFile, setImageFile] = useState(null) 

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
    }

    return(
        <Container>
            <h1 className="editorTitle">Adicionar prato</h1>
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
                            required
                            placeholder="Ex.: Salada Caesar" 
                            className="editorInput"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="elementContainer category">
                        <span>Categoria</span>
                        <select onChange={(e) => setCategories([e.target.value])}>
                            <option>Refeições</option>
                            <option>Sobremesas</option>
                            <option>Bebidas</option>
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
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            onChange={(e) => setDescription(e.target.value)} />
                    </div>
                </div>
                <Button type="button" onClick={() => createDish(name, description, price, ingredients, categories, imageFile)} className="saveButton" title="Salvar alterações" />
            </form>
        </Container>
    )
}