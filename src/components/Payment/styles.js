import styled from "styled-components"

export const Container = styled.div`

.paymentMethodSelector{
    button{
        background-color: transparent;
    }
    
    button:hover{
        background-color: var(--bg-dark-1000);
    }
    .activeButton{
        background-color: var(--bg-dark-800);
    }
    }
    
    .submitButton{
        height: 4.8rem;
    }

    .paymentTitle{
        font-family: var(--ff-main);
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;
        color: var(--tx-secondary);
        margin-bottom: 3.2rem;
    }

    .paymentContainer{
        border: 1px solid var(--bg-ingredient);
        border-radius: .8rem;
    }

    .paymentMethodSelector{
        display: flex;
        justify-content: space-around;
        height: 8.1rem;
        >button{
            &:nth-child(1){
                border-right: 1px solid var(--bg-ingredient);
                border-radius: .8rem 0 0 0;
            }
            &:nth-child(2){
                border-radius: 0 .8rem 0 0;
            }
            
            width: 100%;
            height: auto;
        }
    }

    .loadingPayment{
        width: 100%;
        display: flex;
        justify-content: center;
        opacity: 0.8;
    }

    .qrContainer{
        min-width: 45rem;
        height: 36.4rem;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        border-top: 1px solid var(--bg-ingredient);
        border-radius: 0 0 .8rem .8rem;
        
        color: var(--tx-sub);
        font-family: var(--ff-secondary);
        font-size: 1.2rem;
        font-weight: 400;

        cursor: pointer;
    }

    .qrContainer:hover{
        background-color: var(--bg-dark-1000)
    }


    .creditContainer{
        border-top: 1px solid var(--bg-ingredient);
        padding: 5.7rem 2.6rem;
        display: flex;
        flex-direction: column;
        gap: 3.7rem;
    }


    .creditSecondRow{
        justify-content: center;
        display: flex;
        width: 100%;
        gap: 1.7rem;

    }

    .cardField{
        display: flex;
        flex-direction: column;
        gap: .8rem;
        width: 100%;
        color: var(--tx-sub);
        font-family: var(--ff-secondary);
        font-size: 1.6rem;
        font-weight: 400;
        >input{
            background-color: transparent;
            border: 1px solid var(--tx-main);
            border-radius: 5px;
            height: 4.8rem;
            color: var(--tx-secondary);
            padding: 0 1rem;
        }
    }

    @media (max-width: 1025px) {
        .qrContainer{
            min-width: 10rem;
            >img{
                height: 16.6rem;
                width: 16.6rem;
            }
        }
    }
`