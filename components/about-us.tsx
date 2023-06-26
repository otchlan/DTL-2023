import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div
      id="Onas"
      className="pt-9 md:py-12 md:px-6 lg:py-16 lg:px-20 2xl:container 2xl:mx-auto"
    >
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="lg:w-12/12 flex w-full flex-col justify-center px-4 sm:px-0">
          <p className="text-center text-base font-normal leading-6 text-gray-500">
            <span className="text-white">deeptechlabs</span>, czyli laboratorium zaawansowanych technologii zajmujemy się:
            <br />
            <img src="/favicon.png" alt="Favicon" className="inline-block w-3 h-4" /> zarządzaniem projektami,
            <br />
            <img src="/favicon.png" alt="Favicon" className="inline-block w-3 h-4" /> doradztwem strategicznym,
            <br />
            <img src="/favicon.png" alt="Favicon" className="inline-block w-3 h-4" /> prowadzeniem prac badawczo-rozwojowych, tworzeniem innowacji oraz tworzeniem nauki,
            <br />
            <img src="/favicon.png" alt="Favicon" className="inline-block w-3 h-4" /> wprowadzaniem i budowaniem technologii,
            <br />
            <img src="/favicon.png" alt="Favicon" className="inline-block w-3 h-4" /> świadczeniem usług typu think tank,
            <br />
            <img src="/favicon.png" alt="Favicon" className="inline-block w-3 h-4" /> prowadzeniem szkoleń z zakresu wykorzystywania i implementacji technologii w społecznościach.
            <br />
          </p>
          <p className="text-center text-base font-normal leading-6 text-gray-500">
          <Link href="/onas">
            <button className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
              ... więcej
            </button>
          </Link>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="flex w-full flex-col justify-center px-4 sm:px-0 lg:w-full"></div>
      </div>
    </div>
  );
};

export default AboutUs;
