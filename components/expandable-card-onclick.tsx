"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ExpandableCardOnClick() {
  const items = [
    {
      title: "OSCE³",
      description: "7×24小时全天候安全监控与响应服务",
      src: "/images/OSCE.png",
      content: (
        <div>
          <p>实时威胁检测与分析</p>
          <p>快速事件响应与处置</p>
          <p>专业安全团队全天候守护</p>
        </div>
      ),
    },
    {
      title: "OSED",
      description: "真实攻击场景模拟，全面检测安全防护能力",
      src: "/images/osed.png",
      content: (
        <div>
          <p>真实攻击链路模拟</p>
          <p>深度渗透测试验证</p>
          <p>全面安全加固建议</p>
        </div>
      ),
    },
    {
      title: "OSEP",
      description: "专业安全策略规划与架构设计",
      src: "/images/osep.png",
      content: (
        <div>
          <p>定制化安全策略制定</p>
          <p>合规性评估与改进</p>
          <p>安全架构设计优化</p>
        </div>
      ),
    },
    {
      title: "OSWE",
      description: "快速应急响应，最小化安全事件影响",
      src: "/images/OSWE.png",
      content: (
        <div>
          <p>快速事件分析定位</p>
          <p>损失评估与恢复</p>
          <p>取证分析与报告</p>
        </div>
      ),
    },
    {
      title: "OSCP",
      description: "全面系统漏洞检测与评估",
      src: "/images/oscp.png",
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
      {/* 组件已被移除 */}
    </div>
  );
}