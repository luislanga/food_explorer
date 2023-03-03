import styled from "styled-components"

export const Container = styled.div`
    color: var(--tx-sub);
    font-family: var(--ff-main);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 31.6rem;

    >h1{
        font-weight: 500;
        font-size: 2.7rem;
        line-height: 140%;
        margin: 1.6rem 0 2.4rem;
    }

    >p{
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 140%;
        margin-bottom: 2.4rem;
        text-align: center;
    }

    >img{
        width: 26.4rem;
        height: 26.4rem;
    }

    .tags{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2.4rem;
        margin-bottom: 4.8rem;
    }

    .addDish{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 1.6rem;

        >button{
            height: 3.8rem;
            font-size: 0.95rem;
            
            >img{
                width: 2.16rem;
                height: 2.16rem;
            }
        }
    }

    .adder{
        display: flex;
        gap: 1.6rem;
        
        >button{
            display: flex;
            align-items: center;
            background: none;
            border: none;
            height: 2.7rem;
            cursor: pointer;
        }

        >span{
            font-family: var(--ff-secondary);
            font-weight: 700;
            font-size: 2.3rem;
        }
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