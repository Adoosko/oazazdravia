import Content from "@/components/Content";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" relative mx-auto text-center max-w-[1440px] items-center flex flex-col justify-center ">
      <Hero />
      <div>
        <Image src={"/banner.png"} alt="banner" width={1500} height={800} />
      </div>
      <Content />
    </main>
  );
}
