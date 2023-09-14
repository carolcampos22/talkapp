import React from 'react';
import GlobalStyle from './GlobalStyled';
import Chat from './components/Chat'; 
import { Title } from './AppStyled';

function App() {
    return (
        <>
            <Title>TalkApp</Title>
            <GlobalStyle />
            <Chat />
        </>
    );
}

export default App;
