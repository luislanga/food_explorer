import styled from "styled-components";

export const Container = styled.div`
    div{
        position: relative;
    }
    >a{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 27.8rem;
        span{
            color: var(--tx-main);
            font-family: var(--ff-secondary);
            font-size: 37.2431px;
            line-height: 44px;
            font-weight: 700;
            position: relative;
        }
        img{
            height: 4.4rem;
        }
    }

    .adminLogo{
        color: var(--tx-accent);
        font-weight: 400;
        font-family: var(--ff-secondary);
        font-size: 1.2rem;
        position: absolute;
        bottom: -.2rem;
        right: 0;

    }
`