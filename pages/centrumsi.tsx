import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Footer from "@/components/footer";
import CardCSI1 from "@/components/CardCSI1";
import CardCSI2 from "@/components/CardCSI2";
import OscillatingLine from "@/components/SepLine";
import Head from 'next/head';
import GoogleAnalytics from '@/components/GoogleAnalytics';

// import Carousel from "@/components/CarouselCSI";

{/*
const CarouselExample = () => {

  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    // Add more image URLs as needed
  ];

  return (
    <div>
      <h1>Carousel Example</h1>
      <Carousel images={images} />
    </div>
  );
};
*/}


export default function Home() {
  return (
    <>
    <Head>
        <title>Centrum SI</title>
        <link rel="icon" href="/faviconSmallSize.png" type="image/x-icon" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Deeptechlabs, technology driving your future" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Deeptechlabs" />
        <meta name="keywords" content="future, crypto, blockchain, technology, innovation, AI, artificial intelligence" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Title for Sharing" />
        <meta property="og:description" content="Deeptechlabs, technology driving your future" />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:url" content="https://www.deeptechlabs.pl" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Deeptechlabs" />
        <meta name="twitter:description" content="Technology driving your future" />
        <meta name="twitter:image" content="/logo.svg" />
      </Head>
      <GoogleAnalytics />
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
        <div
          className="py-8 md-64 main-div"
          style={{ maxWidth: "94%", margin: "0 auto" }}
        >
          <motion.h1
            className=" bg-gradient-to-br from-black to-green-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Balancer>Centrum Sztucznej Inteligencji</Balancer>
          </motion.h1>

          <div className="text-center text-gray-500 mt-16 md:text-xl">
            Centum SI to społeczność stawiająca sobie za cel aktywizację w pierwszej kolejności
            pracowników firm i administaracji, studentów i młodzieży z Lublina w celu badań oraz
            pogłębiania wiedzy z dziedziny sztucznej inteligencji. Nasze
            realizacje obejmują badania naukowe (tak zwany research) branży i
            dziedziny szeroko rozumianej sztucznej inteligencji, organizowanie
            warsztatów, tworzenie i publikowanie artykułów naukowych, prowadzenie
            kanałów naukowych oraz prezentowanie się na konferencjach, a w
            przyszłości także badania nad technicznymi aspektami SI. Chcemy
            zainspirować społeczeństwo Lublina i województwa Lubelskiego do aktywnego rozwoju w tej dziedzinie, jednocześnie pokazać w jaki sposób prowadzone są działania biznesowe i
            cykle technologiczne, chcemy promować naukę i technologię oraz
            popularyzować sztuczną inteligencję,
            budować świadomość i kapitał intelektualny.
          </div>

          <OscillatingLine />
          <h1
            className="pb-4 text-3xl font-bold leading-9 text-gray-100 lg:text-4xl"
            style={{ marginTop: "16px", marginLeft: "16px", marginBottom: "0" }}
          >
            Nasze działania
          </h1>

          <CardCSI1 />
          <OscillatingLine />

          <h1
            className="pb-4 text-3xl font-bold leading-9 text-gray-100 lg:text-4xl"
            style={{ marginTop: "16px", marginLeft: "16px", marginBottom: "0" }}
          >
            Nasze badania
          </h1>

          <CardCSI2 />

          {/* TODO */}
          {/* <CarouselExample /> */}
        </div>
      </motion.div>

      <Footer />
    </>
  );
}
