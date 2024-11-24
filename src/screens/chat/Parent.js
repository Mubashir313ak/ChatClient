import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FetchMessages from "./fetchMessages";
import { GetAllUser } from "../../services/auth";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const [selectedChatWith, setSelectedChatWith] = useState(null);
  const [users, setUsers] = useState([]);
  // Assume the logged-in user's ID comes from Redux or Context
  const userId = useSelector((state) => state.auth.user._id);
  const navigate = useNavigate();

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await GetAllUser();
        setUsers(data.users || []); // Ensure users is always an array
      } catch (err) {
        console.error("Error fetching users:", err.message);
        setUsers([]); // Default to empty array on error
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <div>
        <h2>Contacts</h2>
        {users.length > 0 ? (
          users.map((user) => (
            <button
              key={user._id}
              onClick={() => setSelectedChatWith(user._id)}
            >
              {user.username}
            </button>
          ))
        ) : (
          <p>Loading contacts...</p>
        )}
      </div>

      <div>
        {selectedChatWith ? (
          <FetchMessages userId={userId} chatWith={selectedChatWith} />
        ) : (
          <p>Select a contact to start chatting</p>
        )}
      </div>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
        <button onClick={() => navigate("/chat")}>Inbox</button>
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      </Box>
    </div>
  );
};

export default ChatPage;
