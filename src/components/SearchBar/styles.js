import styled from "styled-components"

export const Container = styled.div`

    .title{
        font-size: 1.5rem;
    }

    span{
        font-size: 1.8rem;
    }

    .dishImage{
        width: 4rem;
        height: 4rem;
    }

    .notFound{
        font-size: 2rem;
        font-family: var(--ff-main);
        color: var(--tx-main);
    }
    
    .searchModal{        
                margin-top: 1.5rem;        
                width: 100%;
                border-radius: 5px; 
                min-height: 28rem;
                max-height: 28rem;
                background-color: rgba(200,195,200,0.7);
                overflow: scroll;    
    }

    .searchModalHidden{
        display: none;
    }

    .searchItem + .searchItem{
        border-top: 1px solid gray;
        padding-top: 1rem;
        margin-top: 1rem;
    }
`