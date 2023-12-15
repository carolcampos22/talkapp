
import MessageForm from './MessageForm';
import { AppContainer, MessagesContainer } from '../AppStyled';
import { useEffect, useState } from 'react';
import Message from './Message';

function Chat() {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        setMessages(storedMessages);
    }, []);

    const addNewMessage = (newMessage) => {
        const updateArrayMessages = [...messages, newMessage]
        setMessages(updateArrayMessages)
        localStorage.setItem('chatMessages', JSON.stringify(updateArrayMessages));
    }

    const deleteMessage = (message) => {
        const updateArrayMessages = messages.filter((msg) => msg !== message)
        setMessages(updateArrayMessages)
        localStorage.setItem('chatMessages', JSON.stringify(updateArrayMessages));
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
