import React, { useState } from "react";
import styled from "styled-components";
import { messagesList } from "../Data";
import { SearchContainer, SearchInput } from "./ContactListComponents";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 2;
    background: #f6f7f8;
`;

const ProfileHeader = styled.div`
    display: flex;
    flex-direction: row;
    background: #ededed;
    padding: 15px;
    align-items: center;
    gap: 10px;
`;

const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

const ChatBox = styled.form`
    display: flex;
    background: #f0f0f0;
    padding: 10px;
    align-items: center;
    bottom: 0;
`;

const EmojiImage = styled.img`
    width: 30px;
    height: 28px;
    opacity: 0.4;
    cursor: pointer;
    padding-left: 21px;
`;

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    background: #e5ddd6;
`;

const MessageDiv = styled.div`
    justify-content: ${(props) => (props.isYours ? 'flex-end' : 'flex-start')};
    display: flex;
    margin: 5px 16px;
`;

const Message = styled.div`
    background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
    max-width: 50%;
    color: #303030;
    padding: 8px 10px;
    font-size: 19px;
`;

const ConversationComponent = () => {
    const [messages, setMessages] = useState(messagesList);
    const [newMessage, setNewMessage] = useState("");

    const handleInputChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newMessage.trim() !== "") {
            const messageData = {
                id: messages.length + 1,
                text: newMessage,
                senderID: 0 // Assuming 0 is the ID for the current user
            };
            setMessages([...messages, messageData]);
            setNewMessage("");
        }
    };

    return (
        <Container>
            <ProfileHeader>
                <ProfileImage src="/profile/pp1.png" />
                Anubhav Sharma
            </ProfileHeader>
            <MessageContainer>
                {messages.map((messageData) => (
                    <MessageDiv key={messageData.id} isYours={messageData.senderID === 0}>
                        <Message isYours={messageData.senderID === 0}>{messageData.text}</Message>
                    </MessageDiv>
                ))}
            </MessageContainer>
            <ChatBox onSubmit={handleSubmit}>
                <SearchContainer>
                    <EmojiImage src={"/data.svg"} />
                    <SearchInput
                        placeholder="Type a message"
                        value={newMessage}
                        onChange={handleInputChange}
                    />
                </SearchContainer>
            </ChatBox>
        </Container>
    );
};

export default ConversationComponent;
