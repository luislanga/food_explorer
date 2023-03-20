import styled from "styled-components"

export const Container = styled.div`

    form{
        font-family: var(--ff-secondary);
        color: var(--tx-secondary);
        font-size: 1.6rem;
        display: flex;
        flex-direction: column;
        gap: 3.2rem;

    }

    .inputContainer{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 3.2rem;

    }
    .name{
        flex-grow: 2;
    }

    .category{
        flex-grow: 1;
    }

    .elementContainer{
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        
        >select, >input{
            height: 4.8rem;
            font-size: 1.6rem;
            color: var(--tx-input);
            background-color: var(--bg-dark-800);
            border-radius: 5px;
            border: none;
            padding: 0 1rem;
        }
        

        button{
            height: 4.8rem;
            background-color: var(--bg-dark-800);
            width: 23rem;
            img{
                rotate: 270deg;
            }
        }
    }

    .tagAdder{
        display: flex;
        gap: 1.6rem;
        flex-wrap: wrap;
        background-color: var(--bg-dark-800);
        border-radius: 5px;
        padding: .8rem;
        >div{
            display: flex;
            align-items: center;
            gap: 0.8rem;
            height: 3.2rem;
            border-radius: 5px;
            font-size: 1.6rem;
            padding: 1rem 1.6rem;
        }
        button{
            background-color: transparent;
            border: none;          
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 8px;
            width: 8px;
            
            >img{
                height: .8rem;
                width: .8rem;
            }
        }
    }

    .price{
        width: 25rem;
    }

    .ingredients{
        flex-grow: 1;
    }

    .description{
        width: 100%;
    }

    textarea{
        background-color: var(--bg-dark-800);
        border: none;
        resize: none;
        height: 17.2rem;
        font-family: var(--ff-secondary);
        font-size: 1.6rem;
        padding: 1.4rem;
        border-radius: 5px;
        color: var(--tx-input);
    }

    .buttonsContainer{
        display: flex;
        justify-content: end;
        gap: 3.2rem;
        >button{
            height: 4.8rem;
            width: 17.2rem;
        }
    }

    .deleteButton{
        background-color: var(--bg-dark-800);
    }

    .deleteButton:disabled{
        background-color: var(--bg-button-disabled);
        &:hover{
            background-color: var(--bg-button-disabled)
        }
    }

    .deleteButton:hover{
        background-color: var(--bg-button-hover);
    }

    .hidden{
        display: none;
    }

    .uploadIcon{
        transform: rotate(270deg)
    }

    label{
        display: flex;
        align-items: center;
        background-color: ${({imageSelected}) => imageSelected ? "green" : "var(--bg-dark-800)" } ;
        height: 4.8rem;
        border-radius: 5px;
        padding: 0 1rem;
        gap: 0.8rem;
        cursor: pointer;
    }

    label:hover{
        opacity: 0.8;
    }

    @media (max-width: 1024px){
        .inputContainer{
            flex-direction: column;
        }

        .elementContainer{
            width: 100%;
        }
        
        .buttonsContainer{
            width: 100%;
            justify-content: space-around;

            >button{
                width: 100%;
            }
        }
        
    }
`