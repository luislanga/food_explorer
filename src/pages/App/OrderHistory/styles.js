import styled from "styled-components"

export const Container = styled.div`

    padding: 3.4rem 12.3rem;

    h2{
        font-family: var(--ff-main);
        color: var(--tx-sub);
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;
        margin-bottom: 1.7rem;
    }

    .orderContainer{
        display: flex;
        flex-direction: column;
        gap: 1.7rem;
    }

    @media (max-width: 1025px){
        padding: 1.7rem 3.5rem;
        
        .orderContainer{
            align-items: center;
        }
    }
`