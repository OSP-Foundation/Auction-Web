import { Intro } from "@/components/home";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import('@/components/home/carousel'), { ssr: false })

export default function Home() {
  return (
    <main>
      <Intro />
      <Carousel />
    </main>
  )
}
