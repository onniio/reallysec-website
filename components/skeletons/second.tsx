"use client";
import { stagger, useAnimate } from "framer-motion";
import React, { useState } from "react";

export const SkeletonTwo = () => {
  const [scope, animate] = useAnimate();
  const [animating, setAnimating] = useState(false);

  const handleAnimation = async () => {
    if (animating) return;

    setAnimating(true);
    await animate(
      ".message",
      {
        opacity: [0, 1],
        y: [20, 0],
      },
      {
        delay: stagger(0.5),
      }
    );
    setAnimating(false);
  };
  return (
    <div className="relative h-full w-full mt-4">
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-full pointer-events-none" />
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] h-full z-20">
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px] h-full">
          <div className="w-20 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 mx-auto h-6" />
          <div
            onMouseEnter={handleAnimation}
            ref={scope}
            className="content mt-4 w-[90%] mx-auto"
          >
            <UserMessage>
            为什么我们公司需要托管安全服务? 
            </UserMessage>
            <AIMessage>与 Reallysec 专家团队协作，能够有效分担企业在 IT 基础设施安全方面的技术压力与责任。我们提供全天候监控、入侵检测、威胁响应与合规支持，帮助企业在快速演进的威胁环境中始终保持领先，防患于未然。</AIMessage>
            <UserMessage>安全托管服务可以检测哪些类型的威胁?</UserMessage>
            <AIMessage>Reallysec的安全托管服务可以检测各种网络安全威胁，包括恶意软件、勒索软件、网络钓鱼攻击和高级持续性威胁 （APT），确保全面保护。</AIMessage>
            <AIMessage>
              让我们开始! <br />{" "}
              <span className="italic"> Security, the Reallysec way .</span>
            </AIMessage>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="message bg-neutral-100 dark:bg-neutral-800 dark:text-white text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md">
      {children}
    </div>
  );
};
const AIMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="message bg-black text-white dark:bg-white dark:text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md">
      {children}
    </div>
  );
};
