import { useState } from 'react'
import './chatapp.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";

const systemMessage = {
  "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
}

function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm StackGPT! Ask me anything!",
      sentTime: "just now",
      sender: "StackGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });
  
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };
  
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      });
      const data = await response.json();
  
      if (data.choices && data.choices.length > 0) {
        const botReply = data.choices[0].message.content;
        setMessages([
          ...chatMessages,
          {
            message: botReply,
            sender: "ChatGPT",
          },
        ]);
      }
      setIsTyping(false);
    } catch (error) {
      console.error(error);
      setIsTyping(false);
    }
  }

  return (
    <div className="App">
      <div style={{ position:"relative", height: "500px", width: "400px"  }}>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="StackGPT is typing" /> : null}
            >
              {messages.map((message, i) => {
                // console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default App