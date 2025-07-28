"use client";
import { useEffect, useState } from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export const Companies = () => {
  let [logos, setLogos] = useState([
    [
      {
        title: "IBM",
        src: "/logos/IBM_logo.svg.png",
      },
      {
        title: "Cisco",
        src: "/logos/Cisco-logo.png",
      },
      {
        title: "google",
        src: "/logos/google.webp",
      },
      {
        title: "Microsoft",
        src: "/logos/microsoft.png",
      },
    ],
    [
      {
        title: "binance",
        src: "/logos/biance.png",
      },
      {
        title: "netflix",
        src: "/logos/netflix.png",
      },
      {
        title: "ntt",
        src: "/logos/NTT_company_logo.svg.png",
      },
      {
        title: "paloalto",
        src: "/logos/paloalto.png",
      },
    ],
  ]);
  const [activeLogoSet, setActiveLogoSet] = useState(logos[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const flipLogos = () => {
    setLogos((currentLogos) => {
      const newLogos = [...currentLogos.slice(1), currentLogos[0]];
      setActiveLogoSet(newLogos[0]);
      setIsAnimating(true);
      return newLogos;
    });
  };

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        flipLogos();
      }, 3000);
      return () => clearTimeout(timer); // Clear timeout if component unmounts or isAnimating changes
    }
  }, [isAnimating]);

  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">受到众多客户的信赖</Heading>
      <Subheading className="text-center ">
        我们的服务一直是众多世界500强企业共同选择
      </Subheading>

      {/* 改进的容器样式 - 增加间距 */}
      <div className="flex gap-12 md:gap-20 flex-wrap justify-center items-center relative h-full w-full mt-20">
        <AnimatePresence
          mode="popLayout"
          onExitComplete={() => {
            setIsAnimating(false);
          }}
        >
          {activeLogoSet.map((logo, idx) => (
            <motion.div
              initial={{
                y: 40,
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              exit={{
                y: -40,
                opacity: 0,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.8,
                delay: 0.1 * idx,
                ease: [0.4, 0, 0.2, 1],
              }}
              key={logo.title}
              className="relative"
            >
              {/* 统一的logo容器 - 增大尺寸并拉长 */}
              <div className="w-36 h-16 md:w-48 md:h-20 flex items-center justify-center bg-white/50 dark:bg-neutral-800/50 rounded-lg p-4 backdrop-blur-sm border border-neutral-200/20 dark:border-neutral-700/20">
                <Image
                  src={logo.src}
                  alt={logo.title}
                  width="140"
                  height="70"
                  className={`max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 ${
                    logo.title === "Microsoft" ? "scale-[1.75]" : 
                    logo.title === "ntt" ? "scale-125" :
                    logo.title === "oracle" || logo.title === "binance" || logo.title === "paloalto" || logo.title === "Cisco" ? "scale-150" : ""
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};