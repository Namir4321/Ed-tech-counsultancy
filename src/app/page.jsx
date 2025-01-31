import Image from "next/image";
import { auth } from "@/auth";
import Callback from "@/components/Callback/Callback";
import Logout from "@/components/Authentication/Logout";
import { Button } from "@/components/ui/button";
import Category from "@/components/Home/Category";
import RoleCard from "@/components/Home/RoleCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import CarsouelCard from "@/components/Home/CarsouelCard";
import { Compass, Facebook } from "lucide-react";
import Footer from "@/components/Home/Footer";
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaYoutube,
} from "react-icons/fa";
export default async function Home() {
  const session = await auth();

  return (
    <div className="">
      <div className="flex justify-center items-center">
        <Category />
      </div>

      <div className="relative flex flex-col px-4 justify-center items-center w-full md:h-[505px]  md:px-0  overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://www.teachedison.com/_next/image?url=%2Fhome.png&w=2048&q=75"
          alt="EdTech Background"
          layout="fill" // Makes the image cover the entire div
          objectFit="cover" // Ensures it fills without distortion
          objectPosition="center" // Centers the image
          className="z-0 hidden md:block" // Keeps the image in the background
        />

        {/* Overlay Text */}
        <div className="relative z-10 px-2 text-center text-black">
          <h2 className="text-2xl sm:text-3xl w-[600px] md:text-4xl font-sans">
            An EdTech Consulting Company
          </h2>
          <p className="w-[420px] text-xs mt-2 md:pl-4 px-10 md:px-0 font-mono mx-auto">
            We are a custom software development company that integrates
            strategy, design thinking, and engineering to build disruptive
            products for modern educators. We thrive on being an incredible
            technology partner for our clients in their pioneering missions to
            change the world.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-6 mb-6 md:grid-cols-2 md:py-12 text-left">
        <div className="flex flex-col justify-center items-center h-full md:px-12">
          <h1 className="text-xl px-6 mb-2 md:px-12 font-bold text-left md:text-3xl">
            Join 1000+ Businesses using TeachEdison
          </h1>
          <p className="px-6 md:px-12 text-left">
            Focus on your business while we handle the complexities of
            engineering. Become one of us by joining thousands of our happy
            entrepreneurs and facilitating your customers' online learning
            experience. Know More
          </p>
          <div className="flex px-6 mb-6 w-full md:px-12">
            <Button className="mt-2">Know more</Button>
          </div>
        </div>

        <div className="flex mb-6 px-6 md:px-0 justify-center items-center h-full w-full">
          <video
            src="/backvideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <CarsouelCard />
      <div className="flex flex-col bg-black md:flex-row md:px-24 pt-6 px-4  md:mt-0 justify-between items-center">
        <div className="">
          <h1 className="md:text-5xl text-2xl text-white">
            What problem can we help your{" "}
          </h1>
          <p className="text-white pr-6">
            TeachEdison is a trusted partner for solving demanding technological
            problems for your EdTech business. We understand every business is
            unique, and so is our approach.
          </p>
          <Button className="text-white bg-blue-500">Know More</Button>
        </div>
        <div className="">
          <Image src="/lamp.png" alt="image" height={400} width={400} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
