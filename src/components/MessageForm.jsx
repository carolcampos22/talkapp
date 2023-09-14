import { useState } from "react";
import { ButtonStyleForm, InputStyleForm, MessageFormContainer, SelectStyleForm } from "./StyledMessageForm";



function MessageForm({addNewMessage}) {

    const [user, setUser] = useState("Me")
    const [text, setText] = useState("")

    const onSendMessage = (e) => {
        e.preventDefault()

        const message = {
            user,
            text
        }

        addNewMessage(message)
        setText("")
    }

    

    return (
        <MessageFormContainer onSubmit={onSendMessage}>
            <SelectStyleForm
                type="text"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                  >
                <option>Me</option>
                <option>My Friend</option>
            </SelectStyleForm >

            <InputStyleForm
                placeholder="Message"
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
                />

            <ButtonStyleForm type="submit">Send</ButtonStyleForm>
        </MessageFormContainer>
    );
}

export default MessageForm;
