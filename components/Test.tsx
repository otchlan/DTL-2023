import React from "react";

export const TextWithBold = () => {
  const text = "deeptechlabs laboratorium zaawansowanych technologii zajmuje się zarządzaniem projektami, tworzeniem innowacji, oraz wprowadzaniem i budowaniem technologii, pozwalającej na automatyzację czy optymalizację procesów w przedsiębiorstwach. Opracowujemy również cykle badawcze oraz projekt badań w takich dziedzinach jak:";

  const words = text.split(" ");
  const boldWords = ["deeptechlabs", "technologii", "projektami", "technologii,"];

  return (
    <p>
      {words.map((word, index) => {
        const isBold = boldWords.includes(word);

        return (
          <span key={index} className={isBold ? "font-bold" : ""}>
            {word}{" "}
          </span>
        );
      })}
    </p>
  );
};

