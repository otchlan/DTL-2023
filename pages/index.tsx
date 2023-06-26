import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import AboutUs from "@/components/about-us";
import GridList from "@/components/grid-list/grid-list";
import Recruitment from "@/components/recruitment";
import Footer from "@/components/footer";
import YouTubeVideo from "@/components/YouTubeVideo";

export default function Home() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <div className="py-8">
        <YouTubeVideo />

          <motion.p
            className="mt-6 text-center text-gray-500 md:text-xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            Nasze technologie. Twoja przewaga.
          </motion.p>
        </div>
        <AboutUs />
        <div className="text-gray-500">
          Tu mają być jakieś aktualności i może jakaś gra żeby poznać kim jesteś i co ma się w tym boxie wyświetlać - Ten box jest przeznaczony tylko dla ciebie - mapa strony?
        </div>
        <GridList />
        <Footer />
      </motion.div>
    </>
  );
}
