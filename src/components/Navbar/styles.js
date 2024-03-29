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
                min-width: 17.5rem;
                max-width: 17.5rem;
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

        .favorites{
            font-family: var(--ff-main);
            font-weight: 400;
            font-size: 1.6rem;
            color: var(--tx-secondary);
            min-width: 12rem;
        }

        .history{
            font-family: var(--ff-main);
            font-weight: 400;
            font-size: 1.6rem;
            color: var(--tx-secondary);
            min-width: 12rem;
            text-align: center;
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

                ::-webkit-scrollbar{
                     display: none;
                 }

                ::-webkit-scrollbar:vertical{
                    all: unset;
                    width: 4px;
                }
                ::-webkit-scrollbar-thumb {
                    background: var(--bg-dark-1000);
                }
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

    .newDishButton{
        width: 100%;
    height: 100%;
    border-radius: 5px;
    border: none;
    display: flex;
    gap: 1.1rem;
    justify-content: center;
    align-items: center;
    height: 4.8rem;
    width: 21.6rem;

    background-color: var(--bg-button);
    color: var(--tx-main);
    font-family: var(--ff-main);
    font-weight: 500;
    font-size: 1.4rem;

    cursor: pointer;

    &:hover{
        background-color: var(--bg-button-hover)
    }
    &:disabled{
        background-color: var(--bg-button-disabled)
    }
    }



`
