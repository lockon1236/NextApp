"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function page() {
  const linkdata = [
    { name: "Performance", url: "/performance" },
    { name: "Reliability", url: "/reliability" },
    { name: "Scale", url: "/scale" },
  ];
  const pathname = usePathname(); // 当前路由地址
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto text-white p-8 items-center">
        <Link href="/" className="text-3xl font-bold">
          Home
        </Link>
        <div className="text-xl space-x-4">
          {linkdata.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className={
                pathname === link.url ? "text-purple-500" : "text-white"
              }
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
