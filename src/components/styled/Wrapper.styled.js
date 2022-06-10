import styled from 'styled-components'

export const Wrapper = styled.div `
    margin: 2rem;
`
export const Card = styled.div`
    min-height: 20rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    p{
        position: absolute;
        z-index: 10;
        left: 50%
        bottom: 0%;
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.5px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`
export const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));
    `
