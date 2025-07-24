// app/(marketing)/contact/page.tsx

import { Background } from "@/components/background";
import { Metadata } from "next";
import { WorldMap } from "@/components/world-map"; // 导入新的 WorldMap 组件
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
  // 定义全球连接点数据
  const dots = [
    {
      start: { lat: 39.9042, lng: 116.4074 }, // 北京
      end: { lat: 40.7128, lng: -74.0060 },   // 纽约
    },
    {
      start: { lat: 39.9042, lng: 116.4074 }, // 北京
      end: { lat: 51.5074, lng: -0.1278 },    // 伦敦
    },
    {
      start: { lat: 39.9042, lng: 116.4074 }, // 北京
      end: { lat: 35.6762, lng: 139.6503 },   // 东京
    },
    {
      start: { lat: 39.9042, lng: 116.4074 }, // 北京
      end: { lat: 1.3521, lng: 103.8198 },    // 新加坡
    },
  ];

  return (
    <div className="relative overflow-hidden py-20 md:py-0 px-4 md:px-20 bg-gray-50 dark:bg-black">
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
        <Background />
        <ContactForm />
        
        {/* 右边的世界地图组件 */}
        <div className="relative w-full z-20 hidden md:flex border-l border-neutral-100 dark:border-neutral-900 overflow-hidden bg-gray-50 dark:bg-black items-center justify-center">
          <div className="max-w-lg mx-auto">
            <WorldMap dots={dots} lineColor="#0ea5e9" />
            
            <div className="text-center mt-8">
              <p className={cn(
                "font-semibold text-xl text-center dark:text-muted-dark text-muted"
              )}>
                全球化安全服务
              </p>
              <p className={cn(
                "font-normal text-base text-center text-neutral-500 dark:text-neutral-200 mt-4"
              )}>
                我们在世界各地都有专业团队，为您提供24小时不间断的安全保障服务。
              </p>
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