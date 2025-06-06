import Image from "next/image";
import NavBar from "@/components/navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

import supabase from "@/utils/supabase/supabaseClient";

export default async function Home() {


  const { data: todos } = await supabase.from('todos').select()

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
