import styled from "styled-components"

export const Container = styled.div`
    
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;

    .sideMenu{
        background-color: var(--bg-dark-400);
        position: fixed;
        
        height: 100%;
        width: 100%;

        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-columns: 100%;
    }

    .hiddenMenu{
        transform: translateX(-100%);
        transition: 650ms ease;
    }

    .activeMenu{
        transform: translateX(0);
        transition: 650ms ease;
    }

    .menuTitle{
        background-color: var(--bg-dark-700);
        font-size: 2.1rem;
        font-family: var(--ff-secondary);
        color: var(--tx-main);
        
        display: flex;
        align-items: center;
        gap: 1.6rem;

        padding: 5.6rem 2.8rem 2.4rem;

        >button{
            background-color: transparent;
            border: none;
            display: flex;
            align-items: center; 
            cursor: pointer;           
        }
    }

    .menuContent{
        padding: 5rem 2.8rem 0;        
    }

    .searchInput{
        height: 4.8rem;
    }

    .menuLinks, >button{
        margin-top: 3.6rem;
        >button{
            font-family: var(--ff-main);
            color: var(--tx-secondary);
            background-color: transparent;
            font-size: 2.4rem;
            width: 100%;
            text-align: start;
            padding: 1rem;
            border: none;
            cursor: pointer;
        }

        >a{
            color: var(--tx-secondary);
            font-family: var(--ff-main);
            font-size: 2.4rem;
            width: 100%;
            padding: 1rem;
            cursor: pointer;
        }
    }

`