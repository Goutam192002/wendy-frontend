import React, {useEffect, useState} from 'react';
import {MessageUI, default as MessageInterface, QuickReply} from "./interfaces/message";
import Message from "./components/message";
import {connect, sendMessage} from "./services/chat";

function App() {
  const [messages, setMessages] = useState<MessageUI[]>([]);
  const [input_message, setInputMessage] = useState<string>('');

  useEffect(() => {
      connect((message: MessageInterface) => {
          if (message.text) {
              setMessages(
                  (prevState) => (
                      [
                          ...prevState,
                          {
                              text: message.text,
                              quick_replies: message.quick_replies,
                              isHuman: false
                          }
                      ]
                  )
              );
          }
      });
  }, []);

  const send = (reply?: string) => {
      const message = reply || input_message
      sendMessage(message, () => {
          setMessages([
              ...messages,
              {
                  text: message,
                  isHuman: true,
                  quick_replies: []
              }
          ]);
          setInputMessage('');
      })
  }

  return (
    <div className="container mx-auto h-screen pt-6 px-4">
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto">
                {
                    messages.map((message: MessageUI, index) => (
                        <Message
                            key={index}
                            message={message.text}
                            quick_replies={message.quick_replies}
                            isHuman={message.isHuman}
                            onQuickReplyClick={(reply: QuickReply) => {
                                send(reply.title);
                            }}
                        />
                    ))
                }
            </div>
            <div className="flex flex-row">
                <input type="text" className="flex-1 bg-gray-900 px-4 py-2 text-lg" autoFocus={true}
                       value={input_message}
                       onChange={(event) => setInputMessage(event.currentTarget.value)}
                       placeholder="Enter your message"
                       onKeyDown={(event) => {
                           if (event.key.toLowerCase() === 'enter') {
                               send();
                           }
                       }}
                />
                <button type="button" className="bg-gray-900 text-blue-300 p-2" onClick={() => send()}>
                    <img src="/send.svg" />
                </button>
            </div>
        </div>
    </div>
  );
}

export default App;
