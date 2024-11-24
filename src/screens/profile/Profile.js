import React from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Card,
  CardContent,
  IconButton,
  Grid,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  if (!user) {
    return (
      <Typography variant="h6">Please log in to view your profile.</Typography>
    );
  }

  const { name, email, picture, whatsappNumber } = user.user;
  console.log("isAuthenticated", isAuthenticated, user.user.name);

  // WhatsApp link with international format
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <Container maxWidth="sm" style={{ marginTop: "40px" }}>
      <Card
        sx={{
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          borderRadius: "16px",
          padding: "16px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Avatar
          src={picture}
          alt={name}
          sx={{
            width: 100,
            height: 100,
            margin: "0 auto",
            border: "4px solid #1976d2",
            marginBottom: "16px",
          }}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <EmailIcon sx={{ color: "#1976d2" }} />
            </Grid>
            <Grid item>
              <Typography variant="body1">{email}</Typography>
            </Grid>
          </Grid>
          <Box mt={3}>
            <IconButton
              component="a"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              sx={{
                backgroundColor: "#25D366",
                color: "white",
                "&:hover": { backgroundColor: "#1da355" },
                padding: "12px",
              }}
            >
              <WhatsAppIcon fontSize="large" />
            </IconButton>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ marginTop: "8px" }}
            >
              Contact on WhatsApp
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProfilePage;
