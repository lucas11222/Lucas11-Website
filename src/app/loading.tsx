"use client";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="flex items-center justify-center h-screen w-screen flex-col">
      <p className="text-center text-xl">Loading....</p>
    </div>
  );
}
