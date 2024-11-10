import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react'
export const metadata: Metadata = { title: "performance" };
export default function page() {
  notFound()
  return (
    <div className="text-white">Performance
  </div>
  )
}