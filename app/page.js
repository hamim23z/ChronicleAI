"use client";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! My name is Chad, the AI Support Agent for Computer Science related questions. Feel free to drop your questions down below!",
    },
  ]);

  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (message.trim() === "") return; // Do not send empty messages

    setMessage("");
    setMessages((messages) => [
      ...messages,
      { role: "user", content: message },
      { role: "assistant", content: "" },
    ]);

    const response = fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([...messages, { role: "user", content: message }]),
    }).then(async (res) => {
      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      let result = "";
      return reader.read().then(function processText({ done, value }) {
        if (done) {
          return result;
        }
        const text = decoder.decode(value || new Int8Array(), { stream: true });
        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1];
          let otherMessages = messages.slice(0, messages.length - 1);
          return [
            ...otherMessages,
            {
              ...lastMessage,
              content: lastMessage.content + text,
            },
          ];
        });
        return reader.read().then(processText);
      });
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="#FFFFFF"
      p={2}
      sx={{
        backgroundImage: `url('/csbackground.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
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
        }}
      >
        CS Chronicles Support Chat
      </Typography>

      <Stack
        direction="column"
        width="1200px"
        height="700px"
        border="2px solid #E5383B"
        borderRadius={4}
        p={2}
        spacing={3}
        sx={{
          backgroundColor:
            "#111" /*background color for the chat box entirely*/,
          color: "white",
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          flexGrow={1}
          overflow="auto"
          maxHeight="100%"
          sx={{
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-track": {
              background: "grey",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "darkgrey",
              borderRadius: "4px",
            },
          }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={
                message.role === "assistant" ? "flex-start" : "flex-end"
              }
            >
              <Box
                bgcolor={message.role === "assistant" ? "#800E13" : "#AD2831"}
                color="white"
                borderRadius={16}
                padding={"23px"}
                m={1}
                boxShadow={3}
                style={{
                  color: "#FFF",
                  border: "3px solid #111",
                }}
              >
                {message.content}
              </Box>
            </Box>
          ))}
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center" color="white">
          <TextField
            label="Enter message here:"
            fullWidth
            multiline
            maxRows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            InputProps={{
              style: {
                color: "white",
              },
            }}
            InputLabelProps={{
              style: {
                color: "#FFF",
                transition: "all 0.2s ease", // Smooth transition for the label
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                  color: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                  color: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                  color: "white",
                },
              },
              "& .MuiInputBase-input": {
                overflow: "auto",
                "&::-webkit-scrollbar": {
                  width: "6px",
                  color: "white",
                },
                "&::-webkit-scrollbar-track": {
                  background: "grey",
                  color: "white",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "darkgrey",
                  borderRadius: "4px",
                  color: "white",
                },
              },
            }}
          />

          <Button
            variant="contained"
            onClick={sendMessage}
            sx={{
              height: "56px",
              bgcolor: "#660708",
              fontWeight: "bold",
              color: "#FFF",
              "&:hover": {
                bgcolor: "#A4161A",
                fontWeight: "bold",
                color: "#FFF",
              },
            }}
          >
            Send
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}