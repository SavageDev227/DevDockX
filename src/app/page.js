import Image from "next/image";
import NavBar from "@/components/navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <NavBar />
      <Hero />
      <Features />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  );
}
