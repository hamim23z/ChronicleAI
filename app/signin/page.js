// app/signin/page.js
"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, TextField, Button, Typography } from '@mui/material';

export default function SigninPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      // Simulate a sign-in request (replace with actual API request)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to chat page upon successful sign-in
      router.push('/chat');
    } catch (error) {
      console.error("Sign-in failed:", error);
      alert("Sign-in failed. Please try again.");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      padding={2}
      sx={{
        backgroundImage: `url('/csbackground.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: "#fff",
          backgroundColor: "#111",
          padding: "20px",
          borderRadius: "20px",
          fontWeight: "bold",
          textTransform: "uppercase",
          textAlign: "center",
          maxWidth: "500px",
        }}
      >
        Sign In
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        maxWidth="400px"
        p={2}
        sx={{
          backgroundColor: "#111",
          borderRadius: "8px",
          boxShadow: 3,
        }}
      >
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          margin="normal"
          InputProps={{
            style: {
              color: "white",
            },
          }}
          InputLabelProps={{
            style: {
              color: "#FFF",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
          margin="normal"
          InputProps={{
            style: {
              color: "white",
            },
          }}
          InputLabelProps={{
            style: {
              color: "#FFF",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            bgcolor: "#660708",
            color: "#FFF",
            "&:hover": {
              bgcolor: "#A4161A",
            },
          }}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
}
