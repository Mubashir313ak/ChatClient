import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#1976d2", color: "white", py: 4, mt: 4 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* About Us Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a company committed to providing high-quality products and
              services to our customers worldwide.
            </Typography>
          </Grid>

          {/* Services Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <Link
              href="#"
              color="inherit"
              variant="body2"
              display="block"
              sx={{ textDecoration: "none", my: 1 }}
            >
              Web Development
            </Link>
            <Link
              href="#"
              color="inherit"
              variant="body2"
              display="block"
              sx={{ textDecoration: "none", my: 1 }}
            >
              App Development
            </Link>
            <Link
              href="#"
              color="inherit"
              variant="body2"
              display="block"
              sx={{ textDecoration: "none", my: 1 }}
            >
              SEO Services
            </Link>
          </Grid>

          {/* Contact Us Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" display="block">
              Email: info@mywebsite.com
            </Typography>
            <Typography variant="body2" display="block">
              Phone: +123 456 7890
            </Typography>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton
                href="https://facebook.com"
                color="inherit"
                target="_blank"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                color="inherit"
                target="_blank"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                color="inherit"
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                color="inherit"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom copyright text */}
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
