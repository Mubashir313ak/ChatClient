import React, { useState, useEffect } from "react";
import { fetchMessages } from "../../services/chat"; // API for fetching past messages
import { sendmesages } from "../../services/chat"; // Ensure this is imported correctly

const FetchMessages = ({ userId, chatWith }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Fetch past messages when the chat partner changes
  useEffect(() => {
    const getMessages = async () => {
      try {
        const data = await fetchMessages(userId, chatWith); // Fetch messages from the server
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error.message);
      }
    };

    getMessages();
  }, [userId, chatWith]);

  // Send message
  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const messageData = {
      sender: userId,
      receiver: chatWith,
      message: newMessage,
    };

    try {
      // Send the message to the server to store it in the database
      await sendmesages(messageData); // Pass messageData to sendmesages function
      setMessages((prev) => [...prev, messageData]); // Update local state with the new message
      setNewMessage(""); // Clear the input field
    } catch (error) {
      console.error("Error sending message:", error.message);
    }
  };

  return (
    <div>
      {/* Messages */}
      <div
        style={{ maxHeight: "70vh", overflowY: "auto", marginBottom: "10px" }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.sender === userId ? "right" : "left",
              margin: "10px 0",
            }}
          >
            <p
              style={{
                display: "inline-block",
                padding: "10px",
                background: msg.sender === userId ? "#dcf8c6" : "#fff",
                borderRadius: "10px",
                maxWidth: "70%",
              }}
            >
              {msg.message}
            </p>
          </div>
        ))}
      </div>

      {/* Input */}
      <div>
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{ width: "80%", padding: "10px", marginRight: "10px" }}
        />
        <button onClick={handleSendMessage} style={{ padding: "10px" }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default FetchMessages;
