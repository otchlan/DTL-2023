import CarouselComponent from "./CarouselComponent";

const Carousel = () => {
  const slides = [
    { url: "/image1.jpg", title: "beach" },
    { url: "/image2.jpg", title: "boat" },
    { url: "/image3.jpg", title: "forest" },
    { url: "/image4.jpg", title: "city" },
    { url: "/image5.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "64px auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <CarouselComponent slides={slides} />
      </div>
    </div>
  );
};

export default Carousel;