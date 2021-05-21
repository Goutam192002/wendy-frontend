interface QuickReply {
    payload: string;
    title: string
}

interface Message {
    text: string;
    quick_replies: QuickReply[]
}

interface MessageUI {
    text: string;
    quick_replies: QuickReply[],
    isHuman: boolean
}

export default Message;
export type {QuickReply, MessageUI}
