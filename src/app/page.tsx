import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Developer from "@/components/Developer";
import Pathways from "@/components/Pathways";
import Artifacts from "@/components/Artifacts";
import Records from "@/components/Records";
import Dossier from "@/components/Dossier";
import ContactRitual from "@/components/ContactRitual";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <Developer />
      <Pathways />
      <Artifacts />
      <Records />
      <Dossier />
      <ContactRitual />
      <Footer />
    </main>
  );
}
