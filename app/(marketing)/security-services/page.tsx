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
      title: "威胁情报服务",
      description: "提供最新的威胁情报和攻击趋势分析，帮助企业提前识别和防范潜在威胁。",
      link: "#threat-intelligence",
    },
    {
      title: "代码安全审计",
      description: "深度代码安全审计服务，发现应用程序中的安全漏洞，提供修复建议。",
      link: "#code-audit",
    },
    {
      title: "云安全服务",
      description: "专业的云安全架构设计和配置评估，确保云环境的安全性和合规性。",
      link: "#cloud-security",
    },
    {
      title: "数据安全保护",
      description: "数据分类分级、加密保护、数据泄露防护等全生命周期数据安全管理服务。",
      link: "#data-protection",
    },
    {
      title: "物联网安全",
      description: "IoT设备安全评估、固件安全审计、物联网网络安全架构设计服务。",
      link: "#iot-security",
    },
    {
      title: "区块链安全",
      description: "智能合约安全审计、DeFi协议安全评估、区块链基础设施安全服务。",
      link: "#blockchain-security",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* 顶部标题区域 */}
      <div className="relative py-20 md:py-40 flex items-center justify-center w-full h-screen bg-white dark:bg-black">
        <Background />
        <Container className="flex flex-col items-center justify-center">
          <div className="relative z-20 text-center">
            <Heading as="h1">安全服务</Heading>
            <Subheading className="text-center">
              我们提供全方位的网络安全服务，从安全咨询到技术实施，为您的业务保驾护航
            </Subheading>
          </div>
        </Container>
      </div>

      {/* 服务卡片区域 */}
      <div className="relative bg-white dark:bg-black">
        <Container className="py-20">
          <HoverEffect items={services} />
        </Container>
      </div>

      {/* 其他内容区域 */}
      <div className="relative">
        <Background />
        <Container className="py-20">
        </Container>
      </div>
    </div>
  );
}