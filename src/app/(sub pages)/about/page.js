import Image from "next/image";
import bg from "../../../../public/background/about-background.png";

import RenderModel from "@/components/RenderModel";

import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className=" fixed w-full top-0 left-0 -z-50 h-full object-cover object-center opacity-25"
      />

      <div
        className=" w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0
          
          
          "
      >
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="w-max font-bold text-4xl xs:text-5xl sm:text-6xl lg:text-7xl text-accent mb-4">
            Saqib Ayoub
          </h1>
          <p className="font-light text-foreground text-ls">
            Meet the wizard behind this portfolio
          </p>
          <div className="mt-4">
            <svg
              className="w-6 h-6 mt-2 animate-bounce text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
