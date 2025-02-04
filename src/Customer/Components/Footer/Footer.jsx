import React from "react";
import { Grid, Typography, Button, Link } from "@mui/material";

function Footer() {
  return (
    <div>
      <Grid
        container
        sx={{ bgcolor: "black", color: "white", py: 5, textAlign: "center" }}
      >
        {/* Company Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
          <Button sx={{ display: "block", color: "white", pb: 2 }}>About</Button>
          <Button sx={{ display: "block", color: "white", pb: 2 }}>Blog</Button>
          <Button sx={{ display: "block", color: "white", pb: 2 }}>Press</Button>
          <Button sx={{ display: "block", color: "white", pb: 2 }}>Jobs</Button>
          <Button sx={{ display: "block", color: "white", pb: 2 }}>Partners</Button>
        </Grid>

        {/* Solutions Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Solutions
          </Typography>
          <Button sx={{ display: "block", color: "white", pb: 2 }}>Marketing</Button>
          <Button sx={{ display: "block", color: "white", pb: 2 }}>Analytics</Button>
          <Button sx={{ display: "block", color: "white", pb: 2 }}>Commerce</Button>
          <Button sx={{ display: "block", color: "white", pb: 2 }}>Insights</Button>
          <Button sx={{ display: "block", color: "white", pb: 2 }}>Support</Button>
        </Grid>

        {/* Documentation Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Documentation
          </Typography>
          <Button sx={{ display: "block", color: "white", pb: 2 }}>Guides</Button>
          <Button sx={{ display: "block", color: "white", pb: 2 }}>API Status</Button>
        </Grid>

        {/* Legal Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Legal
          </Typography>
          <Button sx={{ display: "block", color: "white", pb: 2 }}>Claim</Button>
          <Button sx={{ display: "block", color: "white", pb: 2 }}>Privacy</Button>
          <Button sx={{ display: "block", color: "white", pb: 2 }}>Terms</Button>
        </Grid>
      </Grid>

     
      <Grid container justifyContent="center" className="bg-black text-white" sx={{ pt: 5, textAlign: "center" }}>
        <Grid item xs={12}>
          <Typography variant="body2">&copy; 2025 My Company. All rights reserved.</Typography>
          <Typography variant="body2">Made with ❤️</Typography>
          <Typography variant="body2">
            Icons made by{' '}
            <Link href="https://www.freepik.com" color="inherit" underline="always">
              Freepik
            </Link>{' '}
            from{' '}
            <Link href="https://www.flaticon.com" color="inherit" underline="always">
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
