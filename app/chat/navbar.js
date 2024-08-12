// app/chat/Navbar.js
"use client";
import { Box, Button, IconButton, Link, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function Navbar() {
  const router = useRouter();

  const handleSignOut = () => {
    // Perform any necessary sign-out logic here (e.g., clearing cookies or tokens)
    router.push("/"); // Redirect to the landing page
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
      <button
        onClick={() => window.open("https://github.com/alexisj890/chronicleAI", "_blank")}
        style={{
          all: "unset",
          cursor: "pointer",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontFamily: "Kanit, sans-serif",
            fontWeight: "900",
            textTransform: "uppercase",
            backgroundColor: "#111",
            color: "#fff",
            padding: "8px 16px", // Add padding if needed
            borderRadius: "4px", // Optional: Adds rounded corners
          }}
        >
          CS Chronicles
        </Typography>
      </button>

      <Box>
        <IconButton
          color="inherit"
          component="a"
          href="https://github.com/alexisj890"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>


        <IconButton
          color="inherit"
          component="a"
          href="https://www.linkedin.com/in/hamimc/"
          target="_blank"
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
