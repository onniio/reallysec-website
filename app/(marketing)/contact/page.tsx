// app/(marketing)/contact/page.tsx

import { Background } from "@/components/background";
import { Metadata } from "next";
import { WorldMap } from "@/components/world-map"; // 确保这个导入存在
import { cn } from "@/lib/utils";
import { HorizontalGradient } from "@/components/horizontal-gradient";
import { ContactForm } from "@/components/contact";

export const metadata: Metadata = {
  title: "Reallysec - 联系我们",
  description:
    "联系我们获取专业的网络安全服务，我们的服务遍布全球，为世界各地的客户提供安全保障。",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function ContactPage() {
  // 定义全球连接点数据 - 从合肥连接到各个城市
  const dots = [
    {
      start: { lat: 31.8639, lng: 117.2808 }, // 合肥
      end: { lat: 51.5074, lng: -0.1278 },    // 伦敦
      startLabel: "合肥 · 安全运营中心",
      endLabel: "伦敦 · 红队实验室"
    },
    {
      start: { lat: 31.8639, lng: 117.2808 }, // 合肥
      end: { lat: 37.4419, lng: -122.1430 },  // 硅谷
      startLabel: "合肥 · 安全运营中心",
      endLabel: "硅谷 · 安全研发中心"
    },
    {
      start: { lat: 31.8639, lng: 117.2808 }, // 合肥
      end: { lat: -37.8136, lng: 144.9631 },  // 墨尔本
      startLabel: "合肥 · 安全运营中心",
      endLabel: "墨尔本 · 应急响应中心"
    },
  ];

  return (
    <div className="relative overflow-hidden py-20 md:py-0 px-4 md:px-20 bg-gray-50 dark:bg-black">
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
        <ContactForm />
        
        {/* 右边的世界地图组件 - 简洁放大版 */}
        <div className="relative w-full z-20 hidden md:flex border-l border-neutral-100 dark:border-neutral-900 overflow-hidden bg-gray-50 dark:bg-black items-center justify-center">
          <div className="w-full h-full flex items-center justify-center px-8 py-12">
            {/* 放大的 WorldMap - 无背景，使用浅灰色连接线 */}
            <div className="relative w-full max-w-5xl">
              <div className="transform scale-105 origin-center">
                <WorldMap dots={dots} lineColor="#D1D5DB" />
              </div>
            </div>
          </div>

          
          <HorizontalGradient className="top-20" />
          <HorizontalGradient className="bottom-20" />
          <HorizontalGradient className="-right-80 transform rotate-90 inset-y-0 h-full scale-x-150" />
          <HorizontalGradient className="-left-80 transform rotate-90 inset-y-0 h-full scale-x-150" />
        </div>
      </div>
    </div>
  );
}