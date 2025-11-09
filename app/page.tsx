import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import HowItWorks from "@/components/HowItWorks";
import Proof from "@/components/Proof";
import VisualCompare from "@/components/VisualCompare";
import Pricing from "@/components/Pricing";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Story />
      <HowItWorks />
      <Proof />
      <VisualCompare />
      <Pricing />
      <Waitlist />
      <Footer />
    </main>
  );
}
