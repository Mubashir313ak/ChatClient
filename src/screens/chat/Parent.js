import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FetchMessages from "./fetchMessages";
import { GetAllUser } from "../../services/auth";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const [selectedChatWith, setSelectedChatWith] = useState(null);
  const [users, setUsers] = useState([]);
  const userId = useSelector((state) => state.auth.user._id);
  const navigate = useNavigate();

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await GetAllUser();
        setUsers(data.users || []);
      } catch (err) {
        console.error("Error fetching users:", err.message);
        setUsers([]);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Box
      sx={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", p: 3 }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h4" gutterBottom>
            Contacts
          </Typography>
          {users.length > 0 ? (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {users.map((user) => (
                <Button
                  key={user._id}
                  variant="outlined"
                  color="primary"
                  onClick={() => setSelectedChatWith(user._id)}
                  fullWidth
                >
                  {user.username}
                </Button>
              ))}
            </Box>
          ) : (
            <Typography variant="body1">Loading contacts...</Typography>
          )}
        </Grid>

        <Grid item xs={12} md={8}>
          {selectedChatWith ? (
            <FetchMessages userId={userId} chatWith={selectedChatWith} />
          ) : (
            <Typography variant="h6" sx={{ mt: 4 }}>
              Select a contact to start chatting
            </Typography>
          )}
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
          mt: 4,
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/chat")}
        >
          Inbox
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </Button>
      </Box>
    </Box>
  );
};

export default ChatPage;
