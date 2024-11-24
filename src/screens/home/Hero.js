import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";
import Navbar from "../../components/Navbar";
import MainLayout from "../../layout/MainLayout";

// Styled components without theme
const HeroSection = styled(Box)({
  minHeight: "100vh",
  backgroundImage:
    "url('https://unsplash.com/photos/a-busy-city-street-filled-with-lots-of-traffic-ZwCzSVSazXY')", // Replace with your image URL
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  //   color: "white",
  textAlign: "center",
  padding: "16px",
});

const FeatureCard = styled(Card)({
  padding: "24px",
  margin: "16px 0",
  textAlign: "center",
  backgroundColor: "#eeeeee", // Directly set the color
});

const HomeHero = () => {
  return (
    <MainLayout>
      <Box>
        {/* Hero Section */}
        <HeroSection>
          <Container maxWidth="md">
            <Typography variant="h2" component="h1" gutterBottom color="black">
              Welcome to Our Product
            </Typography>
            <Typography variant="h5" paragraph color="black">
              Discover the best solutions for your business needs, with
              cutting-edge technology and intuitive design.
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#ff4081", // Custom color without theme
                color: "white",
              }}
              size="large"
            >
              Get Started
            </Button>
          </Container>
        </HeroSection>

        {/* Features Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Key Features
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((feature, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <FeatureCard>
                  <Typography variant="h6" gutterBottom>
                    Feature {index + 1}
                  </Typography>
                  <Typography>
                    Brief description of this feature, showcasing its value to
                    the user.
                  </Typography>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Testimonials Section */}
        <Box sx={{ backgroundColor: "#f9f9f9", py: 8 }}>
          <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
              What Our Customers Say
            </Typography>
            <Grid container spacing={4}>
              {[1, 2, 3].map((testimonial, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Card sx={{ textAlign: "center", p: 3 }}>
                    <Avatar
                      src={`https://randomuser.me/api/portraits/lego/${
                        index + 1
                      }.jpg`}
                      sx={{ width: 80, height: 80, margin: "0 auto 16px" }}
                    />
                    <Typography variant="body1">
                      "This product has transformed our workflow. Couldn't be
                      happier!"
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Customer {index + 1}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Call-to-Action Section */}
        <Box sx={{ backgroundColor: "#1976d2", color: "white", py: 6 }}>
          <Container maxWidth="md" style={{ textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
              Ready to Start?
            </Typography>
            <Typography variant="h6" paragraph>
              Sign up today and start experiencing the benefits of our product!
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#ff4081", // Custom color
                color: "white",
              }}
              size="large"
            >
              Join Now
            </Button>
          </Container>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default HomeHero;
