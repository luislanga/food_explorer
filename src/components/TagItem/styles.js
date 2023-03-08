import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    
    background-color: ${({isNew}) => isNew ? "transparent" : "var(--bg-ingredient)"};
    border: ${({isNew}) => isNew ? "1px dashed var(--tx-secondary)" : "none"};
    color: var(--tx-main);
    

    .tagInput{
        background-color: transparent;
        border: none;
        color: ${({isNew}) => isNew ? "1px dashed var(--tx-secondary)" : "var(--tx-main)"};
        font-family: var(--ff-secondary);
        font-size: 1.6rem;
        width: 11rem;        
    }


`