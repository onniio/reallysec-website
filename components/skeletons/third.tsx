"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IconDots, IconPlus } from "@tabler/icons-react";
import { Switch } from "../switch";

export const SkeletonThree = () => {
  return (
    <div className="h-full w-full sm:w-[80%] mx-auto bg-white dark:bg-neutral-800  shadow-2xl dark:shadow-white/40 mt-10 group rounded-md">
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-full pointer-events-none z-[11]" />

      <div className="flex flex-1 w-full h-full flex-col space-y-2 ">
        <div className="flex justify-between border-b dark:border-neutral-700 pb-2 p-4">
          <p className="text-muted text-sm font-bold dark:text-muted-dark">
            Reallysec Ticket System
          </p>
          <p className="shadow-derek text-muted dark:text-muted-dark text-sm px-2 py-1 rounded-md flex-shrink-0 flex space-x-1 items-center dark:bg-neutral-700">
            <IconPlus className="h-4 w-4 text-muted dark:text-muted-dark" />{" "}
            <span>SPL语句筛选</span>
          </p>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <Row title="加载顺序劫持" updatedAt="23 March" />
          <Row title="DNS通道攻击" updatedAt="22 March" active />
          <Row title="管理控制器植入" updatedAt="22rd May" />
          <Row title="自适应恶意体" updatedAt="21 April" active />
          <Row title="异构信道通信" updatedAt="21 June" active />
        </div>
      </div>
    </div>
  );
};

export const Row = ({
  title,
  updatedAt,
  active = false,
}: {
  title: string;
  updatedAt: string;
  active?: boolean;
}) => {
  const [checked, setChecked] = useState(active);
  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-2 items-center">
        <p className="text-muted dark:text-muted-dark text-xs shadow-aceternity dark:bg-neutral-700 px-1 py-0.5 rounded-md">
          {title}
        </p>
        <p className="text-muted dark:text-muted-dark text-xs">{updatedAt}</p>
      </div>
      <div className="flex items-center space-x-1">
        <Switch checked={checked} setChecked={setChecked} />
        <IconDots className="h-4 w-4 text-muted dark:text-muted-dark" />
      </div>
    </div>
  );
};
