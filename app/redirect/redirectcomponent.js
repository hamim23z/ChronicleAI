// app/redirect/RedirectComponent.js
"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectComponent() {
  const router = useRouter();

  useEffect(() => {
    router.push('/landing'); // Redirect to the landing page
  }, [router]);

  // Render nothing or a loading indicator
  return null; // or <div>Loading...</div>
}