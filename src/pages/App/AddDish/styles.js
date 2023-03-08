import styled from "styled-components"

export const Container = styled.div`
    padding: 4rem 12.3rem;

    >a{
        display: flex;
        align-items: center;
        gap: 1.1rem;
        text-decoration: none;
        h2{
            font-family: var(--ff-main);
            color: var(--tx-sub);
            font-weight: 500;
            font-size: 2.4rem;
        }
    }

    @media (max-width: 1024px){
        padding: 1.1rem 3.2rem;
    }
`