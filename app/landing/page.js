// app/landing/page.js
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div>
      <h1>Welcome to Our Website!</h1>
      <p>Click the button below to get started.</p>
      <Link href="/chat">
        <button>Get Started</button>
      </Link>
    </div>
  );
}