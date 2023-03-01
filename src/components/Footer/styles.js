import styled from "styled-components"

export const Container = styled.footer`
    background-color: var(--bg-main-container);

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 2.7rem;
    height: 7.7rem;

    .footerLogo{
        display: flex;
        align-items: center;
        gap: 0.6rem;

        >span{
            color: var(--tx-footer-logo);
            font-family: var(--ff-secondary);
            font-weight: 700;
            font-size: 1.5rem;
        }

        >img{
            height: 2rem;    
            }
    }

    span{
        font-family: var(--ff-secondary);
        color: var(--tx-copyright);
        font-size: 1rem;
    }

    @media (min-width: 1025px){
        padding: 0 12rem;

        .footerLogo{
            gap: 1.12rem;

            >span{
                font-size: 2.4rem;
            }

            >img{
                height: 2.9rem;
            }
        }
        span{
            font-size: 1.4rem;
    }
    }
`