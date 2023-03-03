import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    height: 292px;
    min-width: 210px;
    background-color: var(--bg-dark-200);
    border: 1px solid var(--bg-dark-300);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    padding: 2.4rem;

    .favoriteButton{
        background-color: transparent;
        border: none;
        cursor: pointer;
        position: absolute;
        top: 1.6rem;
        right: 1.6rem;

    }

    >img{
        width: 88px;
        height: 88px;
    }

    h2{
      color: var(--tx-sub);
      font-size: 1.4rem;
      line-height: 2.4rem;
      font-family: var(--ff-main);
      font-weight: 500;
    }

    >span{
        font-family: var(--ff-secondary);
        color: var(--tx-accent);
        font-size: 1.6rem;
        font-weight: 400;
    }

    >div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        
        >button{
            height: 32px;
        }
    }

    .dishAdder{
        width: 100px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap:1.4rem;

        >span{
            font-family: var(--ff-secondary);
            font-size: 1.6rem;
            color: var(--tx-sub); 
        }

        >button{
            
            background: transparent;
            margin: none;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            
        }
    }

    #titleArrow{
        display: none;
    }

    >p{
        display: none;
    }

    @media (min-width: 1025px){
        min-width: 304px;
        max-width: 304px;
        height: 462px;
        gap: 1.5rem;

        h2{
            font-weight: 700;
            font-size: 2.4rem;
            line-height: 140%;
        }

        #titleArrow{
            display: block;
        }

        #dishTitle{
            display: flex;
            flex-direction: row;
        }
        
        p{
            color: var(--tx-secondary);
            font-family: var(--ff-secondary);
            font-size: 1.4rem;
            line-height: 160%;
            text-align: center;

            display: -webkit-box;   
            -webkit-line-clamp: 2;   
            -webkit-box-orient: vertical;     
            overflow: hidden; 
        }
        
        >span{
            height: 52px;
            display: flex;
            align-items: center;
            font-size: 3.2rem;
            line-height: 160%;
            
        }

        >div{
            display: flex;
            flex-direction: row;
            height: 4.8rem;

            button{
                height: 100%;
                width: 9.2rem;
            }
        }
    }

`