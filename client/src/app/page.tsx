import { About, Intro, Service } from "@/components/home";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import('@/components/home/carousel'), { ssr: false })

const Page = () => {
  return (
    <main>
      <Intro />
      <Service />
      <Carousel />
      <About />
    </main>
  )
}

export default Page