import styled from "styled-components"

export const Container = styled.div`
    color: var(--tx-sub);
    font-family: var(--ff-main);
    >h1{
        font-weight: 500;
        font-size: 2.7rem;
        line-height: 140%;
    }

    >p{
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 140%;
    }

    .tags{
        display: flex;
        gap: 2.4rem;
    }
`

export const Tag = styled.div`
    color: var(--tx-main);
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    background-color: var(--bg-dark-1000);
    padding: 0.4rem 0.8rem;
    border-radius: 5px;
    
`