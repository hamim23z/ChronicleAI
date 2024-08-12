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
      }}
    >
      <h1
        style={{
          textTransform: "uppercase",
          paddingBottom: "20px",
          color: "white",
        }}
      >
        Computer Science Chronicles
      </h1>

      <h5
        style={{
          color: "white",
          textTransform: "uppercase",
          paddingBottom: "50px",
        }}
      >
        Click the buttons below to get started.
      </h5>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px"
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
              padding: "15px",
              borderRadius: "20px",
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
              padding: "15px",
              borderRadius: "20px",
            }}
          >
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
