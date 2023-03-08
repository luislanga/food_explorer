import { Container } from "./styles"
import { Button } from "../Button"
import upload from "../../assets/icons/SignOut.svg"

export function DishEditor(){
    return(
        <Container>
            <h1 className="editorTitle">Adicionar prato</h1>
            <form>
                <div className="inputContainer">
                    <div className="elementContainer">
                        <span>Imagem do prato</span>
                        <Button icon={upload} title="Selecione imagem"/>
                    </div>
                    <div className="elementContainer name">
                        <span>Nome</span>
                        <input placeholder="Ex.: Salada Caesar" className="editorInput" />
                    </div>
                    <div className="elementContainer category">
                        <span>Categoria</span>
                        <select>
                            <option>asdff</option>
                            <option>fdfds</option>
                            <option>retert</option>
                        </select>
                    </div>
                </div>
                <div className="inputContainer" >
                    <div className="elementContainer ingredients">
                        <span>Ingredientes</span>
                        <div className="tagAdder">
                            <div className="tag">
                                <span>dsfgdfs</span>
                                <button>X</button>
                            </div>
                            <div className="newTag">
                                <span>Adicionar</span>
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="elementContainer price">
                        <span>Preço</span>
                        <input placeholder="R$ 0,00" className="editorInput" />
                    </div>
                </div>
                <div className="inputContainer" >
                    <div className="elementContainer description">
                        <span>Descrição</span>
                        <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
                    </div>
                </div>
                <Button className="saveButton" title="Salvar alterações" />
            </form>
        </Container>
    )
}