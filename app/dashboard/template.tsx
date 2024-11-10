/*
 * @Author: zhaoshuang 1403042939@qq.com
 * @Date: 2024-10-30 10:24:17
 * @LastEditors: zhaoshuang 1403042939@qq.com
 * @LastEditTime: 2024-10-30 14:41:58
 * @FilePath: \next-app\app\dashboard\layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client"
import Link from "next/link";
import { useState } from "react";

export default function DashTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  return (
    <div className="border-2 border-dashed border-black p-4 mx-auto mt-4">
      <div>dash template count: {count}</div>
      <button className="bg-black text-white p-2 my-2 rounded-md" onClick={() => setCount(count + 1)}>Increment</button>
      <div>{children}</div>
    </div>
  );
}
