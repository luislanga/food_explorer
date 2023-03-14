import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 11.6rem;
    padding: 3.4rem 12.3rem;

    h2{
        color: var(--tx-secondary);
        font-family: var(--ff-main);
        font-weight: 400;
        font-size: 1.6rem;
    }

    @media (max-width: 1025px) {
        flex-direction: column;
        padding: 5.6rem 3.4rem;
        gap: 5.6rem;
    }
`