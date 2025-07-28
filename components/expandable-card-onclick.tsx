"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ExpandableCardOnClick() {
  const items = [
    {
      title: "安全运营中心",
      description: "7×24小时全天候安全监控与响应服务",
      src: "/images/security-operations.jpg",
      content: (
        <div>
          <p>实时威胁检测与分析</p>
          <p>快速事件响应与处置</p>
          <p>专业安全团队全天候守护</p>
        </div>
      ),
    },
    {
      title: "红队测试服务",
      description: "真实攻击场景模拟，全面检测安全防护能力",
      src: "/images/red-team.jpg",
      content: (
        <div>
          <p>真实攻击链路模拟</p>
          <p>深度渗透测试验证</p>
          <p>全面安全加固建议</p>
        </div>
      ),
    },
    {
      title: "安全咨询服务",
      description: "专业安全策略规划与架构设计",
      src: "/images/security-consulting.jpg",
      content: (
        <div>
          <p>定制化安全策略制定</p>
          <p>合规性评估与改进</p>
          <p>安全架构设计优化</p>
        </div>
      ),
    },
    {
      title: "应急响应服务",
      description: "快速应急响应，最小化安全事件影响",
      src: "/images/emergency-response.jpg",
      content: (
        <div>
          <p>快速事件分析定位</p>
          <p>损失评估与恢复</p>
          <p>取证分析与报告</p>
        </div>
      ),
    },
    {
      title: "漏洞扫描服务",
      description: "全面系统漏洞检测与评估",
      src: "/images/vulnerability-scan.jpg",
      content: (
        <div>
          <p>全面漏洞扫描检测</p>
          <p>风险等级评估分析</p>
          <p>修复建议与指导</p>
        </div>
      ),
    },
    {
      title: "安全培训服务",
      description: "专业网络安全意识培训",
      src: "/images/security-training.jpg",
      content: (
        <div>
          <p>员工安全意识培训</p>
          <p>技术人员技能提升</p>
          <p>安全文化建设指导</p>
        </div>
      ),
    },
    {
      title: "合规性审计",
      description: "企业安全合规性检查与认证",
      src: "/images/compliance-audit.jpg",
      content: (
        <div>
          <p>合规性标准评估</p>
          <p>审计报告生成</p>
          <p>改进方案制定</p>
        </div>
      ),
    },
    {
      title: "数据安全保护",
      description: "敏感数据加密与防泄露",
      src: "/images/data-protection.jpg",
      content: (
        <div>
          <p>数据分类与标识</p>
          <p>加密传输存储</p>
          <p>访问权限控制</p>
        </div>
      ),
    },
    {
      title: "网络安全监控",
      description: "实时网络流量监控与分析",
      src: "/images/network-monitoring.jpg",
      content: (
        <div>
          <p>网络流量实时监控</p>
          <p>异常行为检测</p>
          <p>安全事件告警</p>
        </div>
      ),
    },
    {
      title: "安全架构设计",
      description: "企业级安全架构规划设计",
      src: "/images/security-architecture.jpg",
      content: (
        <div>
          <p>安全架构评估</p>
          <p>防护体系设计</p>
          <p>技术选型建议</p>
        </div>
      ),
    },
  ];
  
  const [active, setActive] = useState<null | (typeof items)[number]>(null);
  const ref = useRef<HTMLDivElement>(null);

  const useOutsideClick = (
    ref: React.RefObject<HTMLDivElement>,
    callback: Function
  ) => {
    useEffect(() => {
      const listener = (event: any) => {
        // 如果点击的是目标元素或其子元素，则不执行回调
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        callback(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, callback]);
  };

  useOutsideClick(ref, () => {
    setActive(null);
  });

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="relative w-full h-full">
      <div className="py-10 md:py-20 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"
            ></motion.div>
          )}
        </AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.title}`}
              ref={ref}
              key={active.title}
              className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md max-w-sm"
            >
              <motion.div layoutId={`image-${active.title}`}>
                <Image
                  src={active.src}
                  alt={active.title}
                  width={400}
                  height={300}
                  className="h-48 rounded-t-2xl object-cover w-full"
                />
              </motion.div>
              <div className="p-6 flex flex-col items-start">
                <motion.h3
                  layoutId={`title-${active.title}`}
                  className="text-lg font-bold text-neutral-800 dark:text-neutral-100"
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${active.title}`}
                  className="text-sm text-neutral-500 dark:text-neutral-300"
                >
                  {active.description}
                </motion.p>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-neutral-600 dark:text-neutral-400"
                >
                  {active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
        {items.map((item) => (
          <motion.div
            layoutId={`card-${item.title}`}
            onClick={() => setActive(item)}
            key={item.title}
            className="bg-white dark:bg-neutral-900 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-shadow"
          >
            <motion.div layoutId={`image-${item.title}`}>
              <Image
                src={item.src}
                alt={item.title}
                width={300}
                height={200}
                className="h-32 sm:h-36 rounded-t-xl object-cover w-full"
              />
            </motion.div>
            <div className="p-3 sm:p-4 flex flex-col items-start">
              <motion.h3
                layoutId={`title-${item.title}`}
                className="text-sm sm:text-base font-bold text-neutral-800 dark:text-neutral-100 line-clamp-1"
              >
                {item.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${item.title}`}
                className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-300 mt-1 line-clamp-2"
              >
                {item.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}