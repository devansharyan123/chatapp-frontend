import React, { createContext, useContext, useEffect, useRef } from "react";

const WebSocketContext = createContext<WebSocket | null>(null)

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const socketRef = useRef<WebSocket | null>(null);

    useEffect(() => {

        socketRef.current = new WebSocket('ws://localhost:8080');

        socketRef.current.onopen = () => {
            console.log("Socket connected")
        }

        socketRef.current.onclose = () => {
            console.log("Socket disconnected")
        }

        return () => {
            socketRef.current?.close();
        }
    }, []);


    return (
        <WebSocketContext.Provider value={socketRef.current}>
            {children}
        </WebSocketContext.Provider>
    );
};

export const useWebSocket = () => useContext(WebSocketContext)