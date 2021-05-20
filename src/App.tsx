import React from 'react';
import Message from "./components/message";

function App() {
  return (
    <div className="container mx-auto h-screen pt-6 px-4">
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto">
                <Message
                    message="Hello"
                    buttons={
                        [{
                            text: "How can I help?",
                            payload: "how can i help"
                        }]
                    }
                />
                <Message
                    message="Hi"
                    isHuman={true}
                />

            </div>
            <div className="flex flex-row">
                <input type="text" className="flex-1 bg-gray-900 px-4 py-2 text-lg" autoFocus={true} placeholder="Enter your message" />
                <button type="button" className="bg-gray-900 text-blue-300 p-2">
                    <img src="/send.svg" />
                </button>
            </div>
        </div>
    </div>
  );
}

export default App;
