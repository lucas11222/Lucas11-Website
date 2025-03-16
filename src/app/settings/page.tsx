"use client";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="flex items-center justify-center h-screen w-screen flex-col">
      <Button>Log off</Button>
    </div>
  );
}
