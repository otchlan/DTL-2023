import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Footer from "@/components/footer";
import TopSection from "@/components/Top2div";
import MarginDiv from "@/components/Vert1Div";
import Airtable from "@/components/AirtableData"


export default function Home() {
  return (
    <>
    
      <Airtable />
      <Footer />
    </>
  );
}
