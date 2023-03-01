import styled from "styled-components";
export const Container = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;

    font-family: var(--ff-secondary);
    font-weight: 400;
    font-size: 1.6rem;

    background-color: var(--bg-input-container);
    outline: none;

    display: flex;
    align-items: center;

    >img{
        margin-left: 1.4rem;
    }

    >svg{
        fill: var(--tx-input);
    }
    
    >input{
        height: 100%;
        width: 100%;

        color: var(--tx-input);
        background-color: transparent;
        border: none;
        margin-left: 1.4rem;
        margin-right: 1.4rem;
    }
`