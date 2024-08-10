// app/landing/page.js
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Welcome to Our Website!</h1>
      <p>Click the button below to get started.</p>
      <Link href="/chat">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
