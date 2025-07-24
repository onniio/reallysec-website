import React from "react";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Globe } from "../globe";

export const SkeletonFour = () => {
  return (
    <div className="h-full  flex flex-col items-center relative bg-white dark:bg-black mt-10">
      <InfiniteMovingCards speed="fast" direction="left">
        <MovingGridRow1 />
      </InfiniteMovingCards>
      <InfiniteMovingCards speed="slow" direction="right">
        <MovingGridRow2 />
      </InfiniteMovingCards>

      <Globe className="absolute -right-2 md:-right-40 -bottom-40" />
    </div>
  );
};

const MovingGridRow1 = () => {
  return (
    <div className="flex space-x-6 flex-shrink-0 mb-6 relative z-40">
      {/* 神州数码 */}
      <span
        className={cn(
          " min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-5 py-5 rounded-lg  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* 使用本地图片文件 */}
        <img src="/logos/shenzhou-digital.png" alt="神州数码" className="h-16 w-16 object-contain" />
      </span>

      {/* NTT DATA */}
      <span
        className={cn(
          " min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-5 py-5 rounded-lg  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* 使用本地图片文件 */}
        <img src="/logos/ntt-data.png" alt="NTT DATA" className="h-16 w-16 object-contain" />
      </span>

      {/* 马瑞利 */}
      <span
        className={cn(
          " min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-5 py-5 rounded-lg  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* 使用本地图片文件 */}
        <img src="/logos/marelli.png" alt="马瑞利" className="h-12 w-12 object-contain" />
      </span>

      {/* 蔚来汽车 */}
      <span
        className={cn(
          " min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-5 py-5 rounded-lg  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* 使用本地图片文件 */}
        <img src="/logos/nio.png" alt="蔚来汽车" className="h-14 w-14 object-contain" />
      </span>

      {/* Nike */}
      <span
        className={cn(
          " min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-5 py-5 rounded-lg  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* 使用本地图片文件 */}
        <img src="/logos/nike.png" alt="Nike" className="h-12 w-12 object-contain" />
      </span>

      {/* 爱马仕 */}
      <span
        className={cn(
          " min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-5 py-5 rounded-lg  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* 使用本地图片文件 */}
        <img src="/logos/hermes.png" alt="爱马仕" className="h-14 w-14 object-contain" />
      </span>

      {/* 法拉利 */}
      <span
        className={cn(
          " min-w-24 px-5 py-5 bg-white dark:bg-neutral-900 rounded-lg flex justify-center items-center  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* 使用本地图片文件 */}
        <img src="/logos/ferrari.png" alt="法拉利" className="h-12 w-12 object-contain" />
      </span>

      {/* 币安 */}
      <span
        className={cn(
          " min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-5 py-5 rounded-lg  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* 使用本地图片文件 */}
        <img src="/logos/binance.png" alt="币安" className="h-16 w-16 object-contain" />
      </span>
    </div>
  );
};

const MovingGridRow2 = () => {
  return (
    <div className="flex space-x-6 flex-shrink-0 mb-6 relative z-40">
      {/* 麦当劳 */}
      <span
        className={cn(
          " min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-5 py-5 rounded-lg  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* 使用本地图片文件 */}
        <img src="/logos/mcdonalds.png" alt="麦当劳" className="h-12 w-12 object-contain" />
      </span>

      {/* 三星 */}
      <span
        className={cn(
          " min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-5 py-5 rounded-lg  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* 使用本地图片文件 */}
        <img src="/logos/samsung.png" alt="三星" className="h-16 w-16 object-contain" />
      </span>

      {/* 麦格纳 */}
      <span
        className={cn(
          " min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-5 py-5 rounded-lg  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* 使用本地图片文件 */}
        <img src="/logos/magna.png" alt="麦格纳" className="h-16 w-16 object-contain" />
      </span>

      {/* 麦德龙 */}
      <span
        className={cn(
          " min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-5 py-5 rounded-lg  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* 使用本地图片文件 */}
        <img src="/logos/metro.png" alt="麦德龙" className="h-14 w-14 object-contain" />
      </span>

      {/* 索尼 */}
      <span
        className={cn(
          " min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-5 py-5 rounded-lg  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* 使用本地图片文件 */}
        <img src="/logos/sony.png" alt="索尼" className="h-14 w-14 object-contain" />
      </span>

      {/* 石头岛 */}
      <span
        className={cn(
          " min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-5 py-5 rounded-lg  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* 使用本地图片文件 */}
        <img src="/logos/stone-island.png" alt="石头岛" className="h-16 w-16 object-contain" />
      </span>

      {/* 波音 */}
      <span
        className={cn(
          " min-w-24 px-5 py-5 bg-white dark:bg-neutral-900 rounded-lg flex justify-center items-center  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* 使用本地图片文件 */}
        <img src="/logos/boeing.png" alt="波音" className="h-16 w-16 object-contain" />
      </span>

      {/* 迈凯伦 */}
      <span
        className={cn(
          " min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-5 py-5 rounded-lg  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* 使用本地图片文件 */}
        <img src="/logos/mclaren.png" alt="迈凯伦" className="h-16 w-16 object-contain" />
      </span>
    </div>
  );
};

// 品牌 Logo 组件 (已注释，保留以备后用)

/* 
const ShenZhouDigitalLogo = () => {
  return (
    <svg
      className="h-4 w-4 object-contain"
      viewBox="0 0 24 24"
      fill="#0066CC"
    >
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#0066CC"/>
      <text x="12" y="15" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">神州</text>
    </svg>
  );
};

const NTTDataLogo = () => {
  return (
    <svg
      className="h-4 w-4 object-contain"
      viewBox="0 0 24 24"
      fill="#0070C0"
    >
      <rect x="1" y="6" width="6" height="12" fill="#0070C0"/>
      <rect x="9" y="6" width="6" height="12" fill="#0070C0"/>
      <rect x="17" y="6" width="6" height="12" fill="#0070C0"/>
      <rect x="1" y="2" width="22" height="2" fill="#0070C0"/>
    </svg>
  );
};

const MarelliLogo = () => {
  return (
    <svg
      className="h-4 w-4 object-contain"
      viewBox="0 0 24 24"
      fill="#E31937"
    >
      <circle cx="12" cy="12" r="10" fill="#E31937"/>
      <text x="12" y="15" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">M</text>
    </svg>
  );
};

const NioLogo = () => {
  return (
    <svg
      className="h-4 w-4 object-contain"
      viewBox="0 0 24 24"
      fill="#003D82"
    >
      <path
        d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12z"
        fill="#003D82"
      />
      <path
        d="M8 8v8l4-4 4 4V8l-4 4-4-4z"
        fill="white"
      />
    </svg>
  );
};

const NikeLogo = () => {
  return (
    <svg
      className="h-4 w-4 object-contain"
      viewBox="0 0 24 24"
      fill="#000000"
    >
      <path
        d="M2.5 19.5L22 6.5c.5-.3.5-1 0-1.3s-1-.3-1.5 0L2 18.2c-.5.3-.5 1 0 1.3s1 .3 1.5 0z"
        fill="#000000"
      />
    </svg>
  );
};

const HermesLogo = () => {
  return (
    <svg
      className="h-4 w-4 object-contain"
      viewBox="0 0 24 24"
      fill="#FF8C00"
    >
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#FF8C00"/>
      <text x="12" y="15" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">H</text>
    </svg>
  );
};

const FerrariLogo = () => {
  return (
    <svg
      className="h-4 w-4 object-contain"
      viewBox="0 0 24 24"
      fill="#DC143C"
    >
      <path
        d="M12 2L3 7v10c0 5.55 3.84 7.74 9 9 5.16-1.26 9-3.45 9-9V7l-9-5z"
        fill="#DC143C"
      />
      <path
        d="M12 4l6 4v8c0 3.5-2.5 5-6 6-3.5-1-6-2.5-6-6V8l6-4z"
        fill="#FFD700"
      />
      <rect x="10" y="10" width="4" height="6" fill="#DC143C"/>
    </svg>
  );
};

const BinanceLogo = () => {
  return (
    <svg
      className="h-4 w-4 object-contain"
      viewBox="0 0 24 24"
      fill="#F0B90B"
    >
      <path
        d="M12 2l3.09 3.09L12 8.18 8.91 5.09 12 2zm-8.18 8.18L2 12l1.82 1.82L5.64 12l-1.82-1.82zm3.09 3.09L12 18.36l5.09-5.09L18.91 12l1.82 1.82L12 22.64l-8.73-8.73L5.09 12l1.82 1.27zm8.18-3.09L12 13.27l-2.91-2.91L12 7.45l2.91 2.91 1.18-1.18zm3.09-3.09L22 12l-1.82 1.82L18.36 12l1.82-1.82z"
        fill="#F0B90B"
      />
    </svg>
  );
};
*/