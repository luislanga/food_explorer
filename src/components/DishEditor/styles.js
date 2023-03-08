import styled from "styled-components"

export const Container = styled.div`
    h1{
        font-family: var(--ff-main);
        font-size: 3.2rem;
        color: var(--tx-secondary);
        font-weight: 500;
        margin: 2.4rem 0 3.2rem;
    }

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
        
        select, input{
            height: 4.8rem;
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
            width: 1rem;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%
        }
    }

    .price{
        width: 25rem;
    }

    .tag{
        background-color: var(--bg-ingredient);
        color: var(--tx-main);
    }

    .newTag{
        border: 1px dashed var(--tx-secondary);;
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

    .saveButton{
        height: 4.8rem;
        width: 17.2rem;
        align-self: end;
    }

    @media (max-width: 1024px){
        .inputContainer{
            flex-direction: column;
        }

        .elementContainer{
            width: 100%;
        }

        .saveButton{
            width: 100%;
        }


    }
`