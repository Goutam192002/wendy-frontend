import {io, Socket} from "socket.io-client";
import Message from "../interfaces/message";

let socket:Socket;

const connect = (on_message_received: (message: Message) => void) => {
    socket = io("http://localhost:5005");

    socket.on('connect', () => {
        sendMessage("Hi", () => {});
    });

    socket.on('connect_error', (error) => {
        console.log(error);
    });

    socket.on('bot_uttered', on_message_received);
}

const sendMessage = (message: string, cb: () => void) => {
    socket.emit("user_uttered", {
        "sender": socket.id,
        "message": message
    });
    cb();
}

export { connect, sendMessage }
