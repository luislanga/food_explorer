import styled from "styled-components"

export const Container = styled.div`

    background: var(--gradient-200);
    height: 26rem;
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 16.4rem auto 6.2rem;
    position: relative;
    max-width: 1250px;

    .heroImageMobile{
        display: none;
    }

    .heroImage{
        position: absolute;
        bottom: 0;
        left: -5.5rem;
    }

    .heroText{
        width: 50%;
        text-align: center;
        margin-top: -1.5rem;
    }

    .heroTitle{
        font-family: var(--ff-main);
        font-weight: 500;
        font-size: 4rem;
        color: var(--tx-sub);
        line-height: 140%;
    }

    .heroSubtitle{
        font-family: var(--ff-secondary); 
        font-weight: 400;
        font-size: 1.6rem;
        color: var(--tx-sub)
    }

    @media (max-width: 1300px) {
        height: 18rem;
        max-width: 920px;
        margin-top: 10rem;

        .heroText{
            width: 70%;
        }
        .heroTitle{
            font-size: 3.2rem;
        }
        .heroSubtitle{
            font-size: 1.4rem;
        }
        .heroImage{
            height: 22rem;
        }
    }

    @media (max-width: 1024px){

        height: 12rem;
        max-width: 37.6rem;
        margin-top: 4.4rem;

        .heroImage{
            display: none;
        }

        .heroImageMobile{
            display: block;
            position: absolute;
            bottom: 0;
            left: -3rem;
        }

        .heroText{
            text-align: start;
            width: 20.2rem;
        }

        .heroTitle{
            font-size: 1.8rem;
        }

        .heroSubtitle{
            font-size: 1.2rem;
        }
    }
`