// app/landing/page.js
import Link from "next/link";

export default function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: `url('/purplewormhole.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          textTransform: "uppercase",
          paddingBottom: "2px",
          color: "white",
          fontSize: "3rem",
        }}
      >
        Computer Science Chronicles
      </h1>

      <h3
        style={{
          textTransform: "uppercase",
          paddingBottom: "60px",
          color: "white",
          fontSize: "1.5rem",
        }}
      >
        Chronicle AI - For your CS needs
      </h3>

      <h4
        style={{
          color: "white",
          textTransform: "uppercase",
          paddingBottom: "20px",
          fontSize: "1rem",
        }}
      >
        Click the buttons below to get started.
      </h4>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link href="/signin">
          <button
            style={{
              cursor: "pointer",
              color: "black",
              textTransform: "uppercase",
              fontWeight: "bold",
              border: "2px solid white",
              padding: "15px 30px",
              borderRadius: "20px",
              fontSize: "1rem",
            }}
          >
            Sign In
          </button>
        </Link>

        <Link href="/signup">
          <button
            style={{
              cursor: "pointer",
              color: "black",
              textTransform: "uppercase",
              fontWeight: "bold",
              border: "2px solid white",
              padding: "15px 30px",
              borderRadius: "20px",
              fontSize: "1rem",
            }}
          >
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
