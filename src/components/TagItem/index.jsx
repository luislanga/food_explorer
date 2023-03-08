import { Container } from "./styles"
import plus from "../../assets/icons/Plus.svg"
import close from "../../assets/icons/Close.svg"

export function TagItem({isNew, value, onClick, ...rest}){
    return(
        <Container isNew={isNew}>
            { isNew ? 
                <input
                    placeholder="Adicionar"
                    className="tagInput"
                    type="text"
                    value={value}
                    {...rest}
                /> : 
                <span>{value}</span>
            }
            <button
                type="button"
                onClick={onClick}    
            >
                { isNew ? <img src={plus}/> : <img src={close}/> }
            </button>
        </Container>
    )
}