import styled from "styled-components"

export const Container = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;

    div{
        font-size: 100px;
        color: white;
    }
`