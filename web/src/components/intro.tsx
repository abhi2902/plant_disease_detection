import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import GreenLeaves from "@/assets/green-leaves.jpg";
import Logo from "@/assets/logo.png";
import ScrollDown from "@/components/scroll-down";
import { siteConfig } from "@/config/site";

export default function Introduction() {
  return (
    <section className="py-4 md:py-0 min-h-screen grid md:grid-cols-2 place-items-center relative">
      {/* Image as background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={GreenLeaves}
          alt="Green and Healthy Leaves"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center z-10">
        {/* TODO: Replace Logo Later */}
        <Image
          src={Logo}
          alt={`${siteConfig.name} Logo`}
          width={150}
          className="md:hidden"
        />
        <h1 className="text-amber-200 scroll-m-20 mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl uppercase">
          {siteConfig.name}
        </h1>
        <p className="text-center text-xl text-amber-50 mt-6">
          {siteConfig.description}
        </p>
        <Button className="my-7  hover:bg-white text-black" asChild>
          <Link href="/home">Use {siteConfig.name}</Link>
        </Button>
      </div>

      <ScrollDown />
    </section>
  );
}
