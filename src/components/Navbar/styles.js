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

        cursor: pointer;
        
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
                min-width: 21.6rem;
                max-width: 21.6rem;
                height: 5.6rem;
            }
            input{
                height: 4.8rem;
            }          
            .signout{
                cursor: pointer;
                background-color: transparent;
                border: none;
                min-width: 3.3rem;
                max-width: 3.3rem;
            }
        }
        
        .searchBar{
            width: 100%;
            position: relative;
        }
        .searchModal{
                z-index: 1;
                width: 100%;
                min-width: 450px;
                position: absolute;
                border-radius: 5px;
                background-color: rgba(200,195,200,0.7);
                backdrop-filter: blur(12px);
                top: 6rem;
                padding: 1.5rem;
                max-height: 40rem;
                overflow: scroll;
        }

        .notFound{
            font-size: 1.4rem;
            color: var(--tx-main);
            font-family: var(--ff-main);
            font-weight: 500;
        }

        .searchModalHidden{
            display: none;
        }

        .searchItem + .searchItem{
            border-top: 1px solid gray;
            padding-top: 1rem;
            margin-top: 1rem;
        }
        
        #hamburgerMenu, .orders{
            display: none;
        }
    }

`
