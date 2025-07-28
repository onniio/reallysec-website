"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export function CanvasRevealEffectGrid() {
  const cardData = [
    {
      title: "OSCE³",
      description: "7×24小时全天候安全监控与响应服务",
      bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
      icon: <OSCEIcon />
    },
    {
      title: "OSED",
      description: "真实攻击场景模拟，全面检测安全防护能力",
      bgColor: "bg-gradient-to-br from-green-500 to-teal-600",
      icon: <OSEDIcon />
    },
    {
      title: "OSEP",
      description: "专业安全策略规划与架构设计",
      bgColor: "bg-gradient-to-br from-pink-500 to-purple-600",
      icon: <OSEPIcon />
    },
    {
      title: "OSWE",
      description: "快速应急响应，最小化安全事件影响",
      bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500",
      icon: <OSWEIcon />
    },
    {
      title: "OSCP",
      description: "全面系统漏洞检测与评估",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
      icon: <OSCPIcon />
    },
    {
      title: "安全培训服务",
      description: "专业网络安全意识培训",
      bgColor: "bg-gradient-to-br from-purple-500 to-indigo-600",
      icon: <TrainingIcon />
    },
    {
      title: "合规性审计",
      description: "企业安全合规性检查与认证",
      bgColor: "bg-gradient-to-br from-green-400 to-emerald-600",
      icon: <ComplianceIcon />
    },
    {
      title: "数据安全保护",
      description: "敏感数据加密与防泄露",
      bgColor: "bg-gradient-to-br from-red-500 to-pink-600",
      icon: <DataProtectionIcon />
    }
  ];

  return (
    <div className="py-20 w-full bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              bgColor={card.bgColor}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Card = ({
  title,
  description,
  bgColor,
  icon,
}: {
  title: string;
  description: string;
  bgColor: string;
  icon: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full mx-auto p-6 relative h-[25rem] rounded-3xl overflow-hidden"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black z-30" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black z-30" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black z-30" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black z-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`h-full w-full absolute inset-0 rounded-3xl ${bgColor}`}
          >
            {/* 添加动画粒子效果 */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full"
                  animate={{
                    x: [Math.random() * 400, Math.random() * 400],
                    y: [Math.random() * 400, Math.random() * 400],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 2,
                  }}
                  style={{
                    left: Math.random() * 100 + "%",
                    top: Math.random() * 100 + "%",
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center">
        <div className="group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-lg opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="dark:text-gray-300 text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-gray-600 mt-2 group-hover/canvas-card:text-gray-300 group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </p>
      </div>
    </div>
  );
};

// 图标组件
const OSCEIcon = () => (
  <div className="h-12 w-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
    OSCE³
  </div>
);

const OSEDIcon = () => (
  <div className="h-12 w-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
    OSED
  </div>
);

const OSEPIcon = () => (
  <div className="h-12 w-12 bg-green-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
    OSEP
  </div>
);

const OSWEIcon = () => (
  <div className="h-12 w-12 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
    OSWE
  </div>
);

const OSCPIcon = () => (
  <div className="h-12 w-12 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
    OSCP
  </div>
);

const TrainingIcon = () => (
  <svg className="h-12 w-12 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const ComplianceIcon = () => (
  <svg className="h-12 w-12 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const DataProtectionIcon = () => (
  <svg className="h-12 w-12 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};OSWE
  </div>
);

const OSCPIcon = () => (
  <div className="h-12 w-12 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
    OSCP
  </div>
);

const TrainingIcon = () => (
  <svg className="h-12 w-12 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const ComplianceIcon = () => (
  <svg className="h-12 w-12 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const DataProtectionIcon = () => (
  <svg className="h-12 w-12 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};