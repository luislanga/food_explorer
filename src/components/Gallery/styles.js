import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    position: relative;

    .categoryTitle{
        font-family: var(--ff-main);
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;
        color: var(--tx-sub);
    }

    .galleryDisplay{
        position: relative;
        display: flex;
        padding-right: 170px;
        padding-left: 100px;
        gap: 1.6rem;
        width: 100%;
        overflow: scroll;
        scroll-behavior: smooth;
        ::-webkit-scrollbar{
             display: none;
        }
    }

    .carousel{
        button{
            background-color: transparent;
            border: none;
            cursor: pointer;
        }
        width: 100%;
        height: 46.2rem;
        position: absolute;
        bottom: 0;
        pointer-events: none;
    }

    .leftScroll{
        width: 20.4rem;
        height: 100%;
        background: var(--gradient-100);
        transform: rotate(180deg);
        display: flex;
        justify-content: right;
         >button{
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 10.7rem;
            transform: rotate(180deg);
            pointer-events: auto;
         }
    }

    .rightScroll{
        width: 25.4rem;
        height: 100%;
        background: var(--gradient-100);
        display: flex;
        justify-content: right;
        position: absolute;
        top: 0;
        right: 0;
         >button{
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 10.7rem;           
            pointer-events: auto;
         }
    }

    @media(max-width: 1024px){

        .categoryTitle{
            font-size: 1.8rem;
            margin-left: 2.4rem;
        }

        .carousel{
            display: none;
        }
        .galleryDisplay{

            padding: 0 2.4rem;
            ::-webkit-scrollbar:horizontal{
                all: unset;
                height: 5px;
            }
            ::-webkit-scrollbar-thumb {
                background: var(--bg-dark-900);
                border: 1px solid var(--bg-dark-1000);
                border-radius: 5px;
            }
        }       
    }
`