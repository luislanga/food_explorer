import styled from "styled-components"

export const Container = styled.div`
    color: var(--tx-sub);
    font-family: var(--ff-secondary);
    font-size: 1.4rem;
    line-height: 160%;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    width: 35.8rem;
    padding: .8rem 2rem;

    border: 2px solid var(--bg-dark-1000);
    border-radius: .8rem;

    .topRow{
        display: flex;
        gap: 3.1rem;
        justify-content: space-between;
    }

    .status{
        img{
            margin-right: .8rem;
        }
    }
`