"use client";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function StatsWithNumberTicker() {
  const items = [
    {
      description: "服务的全球企业500强公司数量",
      value: 500,
      subtext: "+",
    },
    {
      description: "年处理的安全威胁事件数量", 
      value: 20000,
      subtext: "万+",
    },
    {
      description: "SOC分析师7x24小时专业服务",
      value: 24,
      subtext: "/7",
    },
    {
      description: "平均威胁检测响应时间",
      value: 3,
      subtext: "分钟",
    },
  ];
  
  return (
    <section className="group/container relative mx-auto w-full max-w-none overflow-hidden rounded-3xl p-10 py-20">
      <div className="relative z-20 w-full flex flex-col items-center">
        <h2 className="text-center text-xl font-bold text-neutral-700 dark:text-neutral-100 md:text-3xl">
          受到众多客户的信赖
        </h2>
        <div className="mx-auto mt-4 max-w-2xl text-center text-sm text-neutral-800 dark:text-neutral-200 md:text-base">
          我们的服务——真正及时响应500强企业共同信赖
        </div>
        <div className="mt-10 flex justify-center items-start gap-16 w-full px-4">
          {items.map((item, index) => (
            <motion.div
              initial={{
                y: 20,
                opacity: 0,
                filter: "blur(4px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              key={"card" + index}
              className={cn("group/card relative overflow-hidden rounded-lg text-center min-w-60 flex flex-col items-center")}
            >
              <div className="flex items-baseline justify-center gap-2">
                <div className="text-3xl font-bold text-neutral-700 dark:text-neutral-200">
                  <AnimatedNumber value={item.value} />
                </div>
                <div className="text-xl font-medium text-neutral-600 dark:text-neutral-300">
                  {item.subtext}
                </div>
              </div>
              <div className="mt-4 text-base text-neutral-600 dark:text-neutral-300 whitespace-nowrap">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({
  value,
  initial = 0,
}: {
  value: number;
  initial?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const spring = useSpring(initial, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    } else {
      spring.set(initial);
    }
  }, [isInView, spring, value, initial]);

  return <motion.span ref={ref}>{display}</motion.span>;
}