"use client";
import { useEffect } from "react";
import Image from "next/image";
import "dotenv/config";
export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="flex items-center justify-center h-screen w-screen flex-col">
      <Image
        src="/logo.svg"
        width={300}
        height={300}
        alt="Picture of the author"
      />
      <p className="text-center text-xl">
        Welcome to my website! Heres all my projects and thingys all in one.
      </p>
    </div>
  );
}
