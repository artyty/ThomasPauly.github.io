import React from "react";
// import CSS
import '../App.css';
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Chatbot
import Chatbot from 'react-chatbot-kit'
import ActionProvider from '../components/ActionProvider';
import MessageParser from '../components/MessageParser';
import config from '../components/config';

function Chat() {
  return (
    <div className="chat">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
      </header>
    </div>
  );
}

export default Chat;