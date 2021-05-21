import SuggestionButton from "./suggestion-button";
import React from "react";
import {QuickReply} from "../interfaces/message";

const Message = ({message, quick_replies=[], isHuman=false, onQuickReplyClick}: {message: string, quick_replies?: QuickReply[], isHuman?: boolean, onQuickReplyClick: (reply: QuickReply) => void}) => (
    <div className="py-2">
        <p className={`pb-2 ${isHuman ? 'text-right': ''}`}>{ isHuman ? 'Me: ': 'Wendy: ' }{message}</p>
        <div className="flex flex-row flex-wrap gap-x-4 gap-y-2">
            {
                quick_replies.length > 0 && quick_replies.map(
                    (reply: QuickReply, index: number) => (
                        <SuggestionButton key={index} onClick={() => onQuickReplyClick(reply)}>{reply.title}</SuggestionButton>
                    )
                )
            }
        </div>
    </div>
)

export default Message
