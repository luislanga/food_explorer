import styled from "styled-components"

export const Container = styled.div`
    .list{
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
    }

    .listTitle{
        font-family: var(--ff-main);
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;
        color: var(--tx-secondary);
        margin-bottom: 3.2rem;
    }

    .order{
        >span{
            font-family: var(--ff-main);
            font-weight: 500;
            font-size: 2rem;
            line-height: 160%;
            color: var(--tx-secondary);
            display: block;
            padding-top: 3.2rem;
        }
    }
`