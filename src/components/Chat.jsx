
import MessageForm from './MessageForm';
import { AppContainer, MessagesContainer } from '../AppStyled';
import { useState } from 'react';
import Message from './Message';

function Chat() {
    const [messages, setMessages] = useState([])

    const addNewMessage = (newMessage) => {
        const updateArrayMessages = [...messages, newMessage]
        setMessages(updateArrayMessages)
    }

    const deleteMessage = (message) => {
        const updateArrayMessages = messages.filter((msg) => msg !== message)
        setMessages(updateArrayMessages)
    }

    const renderMessages = messages.map((msg, index) => {
        return <Message key={index} msg={msg} deleteMessage={deleteMessage}/>
    })

    return (
        <AppContainer>
            <MessagesContainer>{renderMessages}</MessagesContainer>
              
            <MessageForm
                addNewMessage={addNewMessage}
            />

        </AppContainer>
    );
}

export default Chat;
