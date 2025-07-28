"use client";
import { Background } from "@/components/background";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { HoverEffect } from "@/components/card-hover-effect";

export default function ServicesPage() {
  const services = [
    {
      title: "安全咨询服务",
      description: "专业的安全架构设计和风险评估服务，帮助企业建立完善的安全体系和防护策略。",
      link: "#security-consulting",
    },
    {
      title: "渗透测试服务", 
      description: "模拟真实攻击场景，全面发现系统安全漏洞，提供详细的安全评估报告和修复建议。",
      link: "#penetration-testing",
    },
    {
      title: "安全运营服务",
      description: "7x24小时安全监控和响应服务，实时威胁检测，快速事件响应和处置。",
      link: "#security-operations",
    },
    {
      title: "合规服务",
      description: "帮助企业满足等保2.0、ISO27001、GDPR等各类安全合规要求，提供专业咨询。",
      link: "#compliance-services",
    },
    {
      title: "安全培训",
      description: "专业的网络安全培训服务，提升团队安全意识和技能水平，构建人员安全防线。",
      link: "#security-training",
    },
    {
      title: "应急响应",
      description: "快速响应安全事件，专业的事件处置和恢复服务，最大化降低安全事件影响。",
      link: "#incident-response",
    },
    {
      title: "应急响应",
      description: "快速响应安全事件，专业的事件处置和恢复服务，最大化降低安全事件影响。",
      link: "#incident-response",
    },
    {
      title: "应急响应",
      description: "快速响应安全事件，专业的事件处置和恢复服务，最大化降低安全事件影响。",
      link: "#incident-response",
    },
    {
        title: "应急响应",
        description: "快速响应安全事件，专业的事件处置和恢复服务，最大化降低安全事件影响。",
        link: "#incident-response",
      },
      {
        title: "应急响应",
        description: "快速响应安全事件，专业的事件处置和恢复服务，最大化降低安全事件影响。",
        link: "#incident-response",
      },
      {
        title: "应急响应",
        description: "快速响应安全事件，专业的事件处置和恢复服务，最大化降低安全事件影响。",
        link: "#incident-response",
      },
      {
        title: "应急响应",
        description: "快速响应安全事件，专业的事件处置和恢复服务，最大化降低安全事件影响。",
        link: "#incident-response",
      },

  ];

  return (
    <div className="relative overflow-hidden">
      {/* 顶部标题区域 */}
      <div className="relative py-20 md:py-40 flex items-center justify-center w-full h-screen bg-white dark:bg-black">
        <Background />
        <Container className="flex flex-col items-center justify-center">
          <div className="relative z-20 text-center">
            <Heading as="h1">服务项目</Heading>
            <Subheading className="text-center">
              我们提供全方位的网络安全服务，从安全咨询到技术实施，为您的业务保驾护航
            </Subheading>
          </div>
        </Container>
      </div>

      {/* 服务卡片区域 */}
      <div className="relative bg-white dark:bg-black">
        <Container className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-8">
              专业安全服务
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              基于多年的行业经验，我们为企业提供全方位的网络安全解决方案
            </p>
          </div>
          
          <HoverEffect items={services} />
        </Container>
      </div>

      {/* 其他内容区域 */}
      <div className="relative">
        <Background />
        <Container className="py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-8">
              更多服务内容
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              我们将持续为您提供更多专业的网络安全服务...
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}