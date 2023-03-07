import styled from "styled-components"

export const Container = styled.div`

    padding: 3.4rem 12.3rem;
    
    h1{
        color: var(--tx-secondary);
        font-family: var(--ff-main);
        font-weight: 500;
        font-size: 3.2rem;
    }

    .favoritesList{
        margin-top: 3.2rem;
        display: flex;
        flex-wrap: wrap;
        gap: 4.8rem;
    }

    @media (max-width: 1024px){
        padding: 5.6rem 3.5rem;
    }
`