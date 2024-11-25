import React, { useState, useEffect } from "react";
import { fetchMessages } from "../../services/chat";
import { sendmesages } from "../../services/chat";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";

const FetchMessages = ({ userId, chatWith }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const getMessages = async () => {
      try {
        const data = await fetchMessages(userId, chatWith);
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
      await sendmesages(messageData);
      setMessages((prev) => [...prev, messageData]);
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error.message);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Paper
        sx={{
          maxHeight: "70vh",
          overflowY: "auto",
          p: 2,
          backgroundColor: "#121212",
          color: "#fff",
        }}
      >
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              textAlign: msg.sender === userId ? "right" : "left",
              my: 1,
            }}
          >
            <Typography
              sx={{
                display: "inline-block",
                p: 2,
                backgroundColor: msg.sender === userId ? "#1e88e5" : "#424242",
                borderRadius: "10px",
                maxWidth: "70%",
                color: "#fff",
              }}
            >
              {msg.message}
            </Typography>
          </Box>
        ))}
      </Paper>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          fullWidth
          InputProps={{ sx: { backgroundColor: "#fff", borderRadius: "10px" } }}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default FetchMessages;
