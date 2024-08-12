// app/chat/Navbar.js
"use client"
import { Box, Button, IconButton, Link, Typography } from "@mui/material";
import { useRouter } from 'next/navigation';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function Navbar() {
  const router = useRouter();

  const handleSignOut = () => {
    // Perform any necessary sign-out logic here (e.g., clearing cookies or tokens)
    router.push('/'); // Redirect to the landing page
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      sx={{
        width: "100%",
        backgroundColor: "#111",
        borderBottom: "2px solid #E5383B",
        color: "#FFFFFF",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <Typography
        variant="h6"
        sx={{ flexGrow: 1 }}
      >
        CS Chronicles
      </Typography>
      <Box>
        <IconButton
          color="inherit"
          component="a"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          color="inherit"
          component="a"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </IconButton>
        <Button
          color="inherit"
          startIcon={<ExitToAppIcon />}
          onClick={handleSignOut}
        >
          Sign Out
        </Button>
      </Box>
    </Box>
  );
}
