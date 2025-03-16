"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="flex items-center justify-center h-screen w-screen flex-col">
      <p className="text-center text-xl">
        404! Check if the link is right or go to Home.
      </p>
      <p> </p>
      <Button asChild>
        <Link href="/">Go to Home.</Link>
      </Button>
    </div>
  );
}
