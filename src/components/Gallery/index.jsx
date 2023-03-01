import { Container } from "./styles"
import { useRef } from "react"
import caretLeft from "../../assets/icons/CaretLeft.svg"
import caretRight from "../../assets/icons/CaretRight.svg"

export function Gallery({children, title}){
    const carousel = useRef(null)

    function handleLeftClick(e){
        e.preventDefault()
        carousel.current.scrollLeft -= 320
    }

    function handleRightClick(e){
        e.preventDefault()
        carousel.current.scrollLeft += 320
    }

    return(
        <Container >
            {title && <h2 className="categoryTitle">{title}</h2>}
            <div ref={carousel} className="galleryDisplay">
                {children}
            </div>
            <div className="carousel" >
                <div className="leftScroll">
                    <button onClick={handleLeftClick}>
                        <img src={caretLeft} alt="Rolar para a esquerda" />
                    </button>
                </div>
                <div className="rightScroll">
                    <button onClick={handleRightClick}>
                        <img src={caretRight} alt="Rolar para a direita" />
                    </button>
                </div>
            </div>
        </Container>
    )
}