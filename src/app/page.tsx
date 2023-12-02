'use client'
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import MarkdownEditor from "@/components/MarkdownEditor";
import "@zch0222/vditor/dist/index.css"

export default function Home() {

  const router = useRouter()

  return (

      <div className="w-full h-full flex justify-center items-center">
        <MarkdownEditor/>
      </div>
  )
}
