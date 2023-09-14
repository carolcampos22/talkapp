import { MessageBox, MessageContainer } from "./StyledMessage";

function Message({ msg, deleteMessage }) {

    const position = msg.user === 'Me' ? 'right' : 'left'
    return (
        <>
            <MessageContainer onDoubleClick={() => deleteMessage(msg) }>
                <MessageBox position={position}>
                    {msg.text}
                </MessageBox>
            </MessageContainer>
        </>
    )

}

export default Message;
