import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1.3rem;
    width: 40rem;

    >img{
        height: 7.2rem;
        width: 7.2rem;
    }

    .text{
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    .quantity, .title{
        font-family: var(--ff-main);
        color: var(--tx-sub);
        font-size: 2rem;
        font-weight: 500;
        line-height: 160%;
    }

    .price{
        font-family: var(--ff-secondary);
        color: var(--tx-secondary);
        font-size: 1.2rem;
        font-weight: 400;
    }

    .deleteButton{
            background-color: transparent;
            border: none;
            line-height: 160%;
            color: var(--bg-button-disabled);
            cursor: pointer;
    }

    @media (max-width: 1025px){
        width: 100%;
        .quantity, .title{
            font-size: 1.5rem;
        }
        >img{
            height: 5.6rem;
            width: 5.6rem;
        }

    }

`