import SuggestionButton from "./suggestion-button";
import React from "react";

const Message = ({message, buttons=[], isHuman=false}: {message: string, buttons?: Array<any>, isHuman?: boolean}) => (
    <div>
        <p className={`pb-2 ${isHuman ? 'text-right': ''}`}>{message}</p>
        <div className="flex flex-row flex-wrap gap-x-4 gap-y-2">
            {
                buttons.length > 0 && buttons.map((button: { text: string, payload: string }) => (<SuggestionButton>{button.text}</SuggestionButton>))
            }
        </div>
    </div>
)

export default Message
