import React from "react";
import Balancer from "react-wrap-balancer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Footer from "@/components/footer";
import LeftSection from "@/components/Top2div";
import ThreeSection from "@/components/Mid3div";
import Mail from "@/components/mail";

export default function Home() {
  return (
    <>
      <LeftSection
        leftContent={
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <img
              src="/hak.png"
              alt="Image Description"
              style={{ maxWidth: "70%", maxHeight: "70%", objectFit: "contain", maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))" }}
            />
          </div>
        }
        rightContent={
          <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <span style={{ color: "white" }}>Witamy, u progu rewolucji w kodowaniu!<br /><br /></span>
            <span style={{ color: "grey" }}>Nasz nadchodzący Hackathon to idealna arena dla technologicznych czarodziejów, aby pokazać swoje umiejętności, współpracować i wprowadzać innowacje.<br /></span>
            <span style={{ color: "grey" }}>To wydarzenie jest prawdziwym świadectwem potęgi technologii i potencjału, jaki kryje się w połączeniu najbystrzejszych umysłów.<br /></span>
            <span style={{ color: "grey" }}>Dzięki wielu ekscytującym wyzwaniom, intensywnym sesjom kodowania i nieocenionym możliwościom nawiązywania kontaktów, przygotuj się na transformujące doświadczenie.<br /></span>
            <span style={{ color: "grey" }}>Pozostań w kontakcie, aby uzyskać więcej aktualizacji!<br /></span>
            <br />
            <span style={{ color: "white", fontWeight: "bold" }}>Dołącz do nas!</span>
          </div>
        }
      />
      <ThreeSection
        leftContent={
          <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <span style={{ color: "white", fontWeight: "bold" }}>Współpraca dla wzajemnych korzyści<br /><br /></span>
            <span style={{ color: "grey" }}>Chcesz być częścią wydarzenia?</span>
            <span style={{ color: "grey" }}>Serdecznie zapraszamy do współpracy! Skontaktuj się z nami, aby dowiedzieć się więcej o opcjach sponsoringu i możliwościach partnerstwa.</span>
          </div>
        }
        middleContent={
          <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <span style={{ color: "white", fontWeight: "bold" }}>Twój początek przygody z alchemią<br /><br /></span>
            <span style={{ color: "grey" }}>Zapisz się na naszą listę mailingową, aby otrzymać aktualizacje na temat nadchodzącego Hackathonu! Czeka Cię wydarzenie pełne innowacji i ekscytujących wyzwań programistycznych.</span>
            <button>Subscribe to Newsletter</button>
          </div>
        }
        rightContent={
          <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <span style={{ color: "white", fontWeight: "bold" }}>PLACEHOLDER<br /><br /></span>
            <span style={{ color: "grey" }}>Zapisz się na naszą listę mailingową, aby otrzymać aktualizacje na temat nadchodzącego Hackathonu! Czeka Cię wydarzenie pełne innowacji i ekscytujących wyzwań programistycznych.</span>
          </div>
        }

      />

      <Footer />
    </>
  );
}
