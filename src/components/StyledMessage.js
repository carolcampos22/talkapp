import styled from "styled-components";

export const MessageContainer = styled.div`
    margin: 5px 0;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
`;


export const MessageBox = styled.div`
    border-radius: 10px;
    background-color: white;
    max-width: 40%;
    padding: 10px 15px;
    height: 100%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
    align-self: ${(props) => props.position === 'right' ? "flex-end" : "flex-start"};
    background-color: ${(props) => props.position === 'right' ? "lightgreen" : "white"}
    `

