import styled from "styled-components";


export const Container = styled.div`
    height: 100%;
    padding: 0 6rem;
    max-width: 850px;
    margin: 0 auto;

    #signInLogo {
        width:  27.8rem;
        margin: 25% auto 7.3rem;
    }

    @media (min-width: 1025px){
        #signInLogo {
            margin: 0;
        }

        height: 100vh;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    `

export const LogForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem ;

    #desktopSignInTitle{
        font-family: var(--ff-main);
        color: var(--tx-main);
        font-weight: 500;
        font-size: 3.2rem;
        display: none;
    }

    >div{
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;

        h2{
            font-family: var(--ff-secondary);
            color: var(--tx-input);
            font-weight: 400;
            font-size: 1.6rem
        }

        input{
            height: 4.8rem;
        }
    }

    >button{
        height: 4.8rem;
    }

    >a{
        text-decoration: none;
        font-family: var(--ff-main);
        color: var(--tx-main);
        font-size: 1.4rem;
        font-weight: 500;

        &:hover{
            color: var(--tx-accent); 
        }
    }
    @media (min-width: 1025px){
        background-color: var(--bg-dark-700);
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 32px;
        padding: 64px;
        width: 476px;
        height: 541px;
        border-radius: 16px;

        #desktopSignInTitle{
            display: block;
        }
    }

`