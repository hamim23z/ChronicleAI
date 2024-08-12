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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "20px",
        backgroundImage: `url('/purpleroot.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        style={{
          color: "white",
          fontFamily: "Kanit, sans-serif",
          fontWeight: "900",
          textTransform: "uppercase",
          paddingBottom: "20px",
        }}
      >
        Sign In
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <label
          style={{
            display: "block",
            marginBottom: "10px",
            color: "white",
            fontWeight: "900",
          }}
        >
          Your Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "10px",
              fontFamily: "Kanit, sans-serif",
              fontWeight: "bold",
            }}
          />
        </label>

        <label
          style={{
            display: "block",
            marginBottom: "20px",
            color: "white",
            fontWeight: "900",
          }}
        >
          Your Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              fontFamily: "Kanit, sans-serif",
              fontWeight: "bold",
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            cursor: "pointer",
            color: "black",
            textTransform: "uppercase",
            fontWeight: "bold",
            border: "2px solid black",
            padding: "15px",
            borderRadius: "20px",
            backgroundColor: "white",
            width: "100%",
          }}
        >
          Sign In & Continue
        </button>
      </form>
    </div>
  );
}
