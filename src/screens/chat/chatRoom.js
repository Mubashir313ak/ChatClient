import Select from "react-select";
import Interceptor from "../../auth/Interceptorr";
import { useEffect, useState } from "react";
import { GetAllUser } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const MessageForm = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    receiver: "",
    message: "",
  });
  const navigate = useNavigate();
  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await GetAllUser();
        setUsers(data.users);
      } catch (err) {
        console.error("Error fetching users", err.message);
      }
    };

    fetchUsers();
  }, []);

  const handleReceiverChange = (selectedOption) => {
    setFormData({ ...formData, receiver: selectedOption.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { receiver, message } = formData;

      const data = await Interceptor({
        endpoint: "/chat//send",
        method: "POST",
        body: { receiver, message },
      });

      alert("Message sent successfully");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Receiver:</label>
          <Select
            options={users.map((user) => ({
              value: user._id,
              label: user.username,
            }))}
            onChange={handleReceiverChange}
            placeholder="Search Receiver"
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
        <button onClick={() => navigate("/fetch-messages")}>Inbox</button>
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      </Box>{" "}
    </>
  );
};

export default MessageForm;
