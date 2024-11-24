import React, { useState, useEffect } from "react";
import { fetchMessages } from "../../services/chat";

const FetchMessages = ({ userId, chatWith }) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const getMessages = async () => {
      try {
        const data = await fetchMessages(userId, chatWith);
        setMessages(data || []); // Ensure messages is always an array
      } catch (error) {
        console.error("Error fetching messages:", error.message);
        setMessages([]); // Default to empty array on error
      }
    };
    getMessages();
  }, [userId, chatWith]);

  return (
    <>
      <div>
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div
              key={msg._id}
              style={{
                textAlign: msg.sender === userId ? "right" : "left",
              }}
            >
              <p>{msg.message}</p>
            </div>
          ))
        ) : (
          <p>No messages to display</p>
        )}
      </div>
    </>
  );
};

export default FetchMessages;
