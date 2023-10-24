import React from 'react';
import "./estilo.css"
import MessageContainer from "../MessageContainer/MessageContainer"



const ChatPage = (props) => {
    return (
        <div className="container">
            <MessageContainer id={props.id}/>
        </div>
    );
};

export default ChatPage;
