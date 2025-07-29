"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export function LogoCloudMarquee() {
  // 第一行logo
  const firstRowLogos = [
    {
      name: "OSCE",
      src: "/images/osce.png",
    },
    {
      name: "OSEP",
      src: "/images/osep.png",
    },
    {
      name: "OSED",
      src: "/images/osed.png",
    },
    {
      name: "BS",
      src: "/images/bs.png",
    },
    {
      name: "KLCP",
      src: "/images/klcp.png",
    },
    {
      name: "Security",
      src: "/images/security.png",
    },
    {
      name: "OSWE",
      src: "/images/oswe.png",
    },
    {
      name: "CSFPC",
      src: "/images/csfpc.png",
    },
    {
      name: "OSCP",
      src: "/images/oscp.png",
    },
    {
      name: "SOCA",
      src: "/images/soc-analyst.png",
    },
    {
      name: "OSWP",
      src: "/images/oswp.png",
    },
  ];

  // 第二行logo
  const secondRowLogos = [
    {
      name: "NRCC",
      src: "/images/nrcc.png",
    },
    {
      name: "GPPA",
      src: "/images/gppa.png",
    },
    {
      name: "CISSP",
      src: "/images/cissp.png",
    },
    {
      name: "CSPM",
      src: "/images/cspm.png",
    },
    {
      name: "GCSA",
      src: "/images/gcsa.png",
    },
    {
      name: "GMOB",
      src: "/images/gmob.png",
    },
    {
      name: "GCTI",
      src: "/images/gcti.png",
    },
    {
      name: "GSEC",
      src: "/images/gsec.png",
    },
    {
      name: "CTPA",
      src: "/images/ctpa.png",
    },
    {
      name: "MLEC",
      src: "/images/mlec.png",
    },
    {
      name: "GCIH",
      src: "/images/gcih.png",
    },
  ];

  // 第三行logo
  const thirdRowLogos = [
    {
      name: "ciisec-fellow",
      src: "/images/ciisec-fellow.png",
    },
    {
      name: "Infosec",
      src: "/images/Infosec.png",
    },
    {
      name: "ciisec",
      src: "/images/ciisec.png",
    },
    {
      name: "cnapp",
      src: "/images/cnapp.png",
    },
    {
      name: "Leader",
      src: "/images/Leader-Badge.png",
    },
    {
      name: "topinfosec",
      src: "/images/topinfosec.png",
    },
    {
      name: "XMatters",
      src: "/images/XMatters.png",
    },
    {
      name: "27001",
      src: "/images/Vertex_ISO.png",
    },
    {
      name: "galc",
      src: "/images/galc.png",
    },
    {
      name: "ATC",
      src: "/images/ATC.png",
    },
  ];

  return (
    <div className="relative z-20 py-10 md:py-40 px-4 md:px-8">
      <h2 className="text-center text-2xl md:text-5xl font-bold font-sans bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-600">
      备受信赖的安全服务提供商
      </h2>
      <p className="text-center text-base text-neutral-700 font-sans dark:text-neutral-300 mt-4">
     我们拥有众多全球认可的安全认证，技术实力与合规能力持续保持行业领先水平
      </p>

      {/* 第一行 - 向右滚动 */}
      <div className="flex gap-10 flex-wrap justify-center relative h-full w-full mt-20 max-w-7xl mx-auto [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <Marquee pauseOnHover direction="right">
          {firstRowLogos.map((logo, idx) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width="100"
              height="100"
              className="md:w-40 w-32 object-contain filter mx-0 md:mx-10"
            />
          ))}
        </Marquee>
      </div>

      {/* 第二行 - 向左滚动 */}
      <div className="flex gap-10 flex-wrap justify-center md:gap-40 relative h-full w-full mt-4 md:mt-10 max-w-7xl mx-auto [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <Marquee pauseOnHover direction="left" speed={30}>
          {secondRowLogos.map((logo, idx) => (
            <Image
              key={logo.name + "second"}
              src={logo.src}
              alt={logo.name}
              width="100"
              height="100"
              className="md:w-40 w-32 object-contain filter mx-0 md:mx-10"
            />
          ))}
        </Marquee>
      </div>

      {/* 第三行 - 向右滚动，速度不同 */}
      <div className="flex gap-10 flex-wrap justify-center relative h-full w-full mt-4 md:mt-10 max-w-7xl mx-auto [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <Marquee pauseOnHover direction="right" speed={40}>
          {thirdRowLogos.map((logo, idx) => (
            <Image
              key={logo.name + "third"}
              src={logo.src}
              alt={logo.name}
              width="100"
              height="100"
              className="md:w-40 w-32 object-contain filter mx-0 md:mx-10"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}