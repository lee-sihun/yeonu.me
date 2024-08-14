"use client";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function Header() {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const today = new Date();
    setFormattedDate(format(today, "yyyy.MM.dd"));
  }, []);

  return (
    <header className="headerglass fixed top-0 left-0 w-full z-[100] flex justify-between items-center min-h-[46px] border-b-[1px] border-[#e8e8e8] border-solid">
      <span className="font-bold text-[18px] text-[#111111] ml-[17px] max-sm:hidden">
        Introducing!
      </span>
      <div className="text-[14px] text-[#111111] max-sm:mx-auto">
        im@yeonu.me
      </div>
      <time
        dateTime={new Date().toISOString()}
        className="text-[14px] text-[#1581FF] mr-[17px] max-sm:hidden"
      >
        {formattedDate}
      </time>
    </header>
  );
}
