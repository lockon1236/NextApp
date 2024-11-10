import Image from "next/image";
import homeImg from "/public/learn/home.svg";
import { Metadata } from "next";

export const metadata: Metadata = { title: "HomeApp" };
export default function Home() {
  return (
    <div className="bg-red-400 relative h-screen">
      <div className="absolute inset-0 w-full bg-gradient-to-r from-gray-900">
        {/* <Image
          className="dark:invert"
          style={{ objectFit: "cover" }}
          src={homeImg}
          alt="Next.js logo"
          fill
        /> */}
      </div>
    </div>
  );
}
