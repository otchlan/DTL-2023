import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import AboutUs from "@/components/about-us";
import GridList from "@/components/grid-list/grid-list";  
import Footer from "@/components/footer";
import Carousel from "@/components/Carousel";

const getCarouselImages = () => {
  return [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Add more image URLs as needed
  ];
};

const App = () => {
  const carouselImages = getCarouselImages();

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
          <motion.p
            className="mt-6 text-center text-gray-500 md:text-xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            Nasze technologie. Twoja przewaga. -- palapa -- jugl --
          </motion.p>
        </div>
        <AboutUs />
        <div className="text-gray-500">
          Tu mają być jakieś aktualności i może jakaś gra żeby poznać kim jesteś i co ma się w tym boxie wyświetlać - Ten box jest przeznaczony tylko dla ciebie - mapa strony?
        </div>
        <Carousel slides={carouselImages} />
        <GridList />
        <Footer />
      </motion.div>
    </>
  );
};

export default function Home() {
  return <App />;
}
