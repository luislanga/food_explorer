import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: none;
    display: flex;
    gap: 1.1rem;
    justify-content: center;
    align-items: center;

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

`