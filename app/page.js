// app/page.js
// This is in the app folder. And in the root. This just involves the redirect
// aspect. When local host loads up, it takes the user to the landing page first.
"use client";
import RedirectComponent from "./redirect/redirectcomponent";

export default function Home() {
  return <RedirectComponent />;
}