import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    font-family: var(--ff-secondary);
    font-size: 2rem;

    .title{
        color: var(--tx-main);
        font-family: var(--ff-main);
        font-size: 2.4rem;
    }
    img{
        width: 6.5rem;
        height: 6.5rem;
    }

    .itemContainer{
        color: var(--tx-accent);
        width: 100%;
        gap: 1.5rem;
        >div{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    .searchItem + .searchItem{
        border-top: 1px solid red;
    }

    .itemContainer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0.65rem;
        border-radius: 5px;
        &:hover{
            background-color: rgba(0,0,0,0.2);
            cursor: pointer;
        }
    }


`