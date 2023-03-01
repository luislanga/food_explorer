import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 5.6rem 2.8rem 2.4rem;

    background-color: var(--bg-dark-700);


    #desktopNav{
            display: none;
    }


    #hamburgerMenu{
        height: 1.8rem;
        width: 2.4rem;
        
    }

    input, button, #signOutIcon{
        
    }

    .logo{
        justify-content: center;
        gap:8px;
        img{
            height: 2.6rem;
        }
        span{
            font-size: 2.2rem;
        }
        
    }

    .orders{
        position: relative;
        height: 3.8rem;
        min-width: 3.8rem;
        

        >img{
            position: absolute;
            bottom: 8px;
            left: 3px;
        }

        >span{
            position: absolute;
            background-color: var(--bg-button);
            width: 2rem;
            height: 2rem;
            text-align: center;
            border-radius: 50%;
            top: -3px;
            right: 0px;

            font-size: 1.4rem;
            color: var(--tx-main);
            font-family: var(--ff-main);
            font-weight: 500;
        }
    }

    @media (min-width: 1025px){
        
        #desktopNav{
            flex-grow: 1;
            display: flex;
            align-items: center;
            gap: 3.2rem;
            padding-right: 6rem;
            button{
                min-width: 216px;
                max-width: 216px;
                height: 5.6rem;
            }
            input{
                height: 4.8rem;
            }          
        }

        #hamburgerMenu, .orders{
            display: none;
        }
    }

`