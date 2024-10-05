import Image from "next/image";

//Components
import { Button } from "@/components/ui/button"
import Banner from "@/components/home/banner"
// import { Dot } from "lucide-react";
import HowItWorks from "@/components/home/howItWorks";
import { Dot } from "lucide-react";
import Pricing from "@/components/home/pricing";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default async function Home() {
  return (
    <main className="mx-auto w-full inset-0 h-full bg-[radial-gradient(#e5e7eb_1px), transparent_1px)] [background-size: 16px_16px]">
      <Banner></Banner>
      <div className="flex items-center justify-center">
        <Dot className="text-purple-400"></Dot>
        <Dot className="text-purple-400"></Dot>
        <Dot className="text-purple-400"></Dot>
      </div>
      <HowItWorks />
      <div className="flex items-center justify-center">
        <Dot className="text-purple-400"></Dot>
        <Dot className="text-purple-400"></Dot>
        <Dot className="text-purple-400"></Dot>
      </div>
      <Pricing />
    </main>
  );
}
