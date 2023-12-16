import { About, Intro, Service } from "@/components/home";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import('@/components/home/carousel'), { ssr: false })

export default function Home() {
  return (
    <main>
      <Intro />
      <Service />
      <Carousel />
      <About />
    </main>
  )
}
