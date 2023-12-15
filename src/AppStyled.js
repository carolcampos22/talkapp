import styled from "styled-components";
import img from "../src/assets/sky.jpg"


export const Title = styled.h1`
    color: white;
    margin: 1vw;
`

export const AppContainer = styled.div`
    margin: 0 auto; 
    width: 50vw; 
    height: 90vh; 
    background-image: url(${img}); 
    background-repeat: no-repeat;
    background-position: center;
    background-size-cover;
    display: flex;
    flex-direction: column; 
    overflow-y: auto; 
    max-width: 600px; 
`;

export const MessagesContainer = styled.div`
    flex: 1;
    display: flex; 
    flex-direction: column; 
    justify-content: flex-end; 
    padding: 20px; 
    position: sticky; 
    bottom: 0;   
`;
