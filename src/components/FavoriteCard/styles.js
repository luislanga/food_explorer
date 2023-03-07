import styled from "styled-components"

export const Container = styled.div`

    display: flex;
    align-items: center;
    gap: 1.3rem;

    img{
        width: 7.2rem;
        height: 7.2rem;
    }

    .favoriteText{
        a{
            font-family: var(--ff-main);
            color: var(--tx-secondary);
            font-weight: 500;
            font-size: 2rem;
            line-height: 160%;
            display: block;
        }
        button{
            font-family: var(--ff-secondary);
            font-size: 1.2rem;
            background-color: transparent;
            border: none;
            color: var(--bg-button-disabled);
            line-height: 160%;
            cursor: pointer;
        }
    }
`

export const Hidden = styled.div`
    display: none;
`