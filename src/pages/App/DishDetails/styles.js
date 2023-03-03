import styled from "styled-components";

export const Container = styled.div`
    padding: 3.3rem 5.6rem;
    margin-bottom: 3.3rem;

    .detailsContainer{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

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

    @media (min-width: 1025px){
        padding: 3.3rem 12.1rem;
    }
`

