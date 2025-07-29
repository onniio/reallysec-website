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
      description: "提供涵盖体系设计、风险评估与防御策略制定的一体化安全咨询服务，依据企业业务架构与风险等级，制定适配的安全控制模型，助力客户构建全生命周期的安全治理框架，提升整体安全成熟度。",
      link: "#security-consulting",
    },
    {
      title: "渗透测试服务", 
      description: "基于实战攻击视角，模拟APT攻击、内部威胁等复杂场景，对网络、应用、系统、云环境进行全面测试，识别高危漏洞与配置缺陷，并提供可执行的修复建议，支撑安全体系闭环优化。",
      link: "#penetration-testing",
    },
    {
      title: "安全运营服务",
      description: "构建7×24小时持续运行的安全运营中心（SOC），结合SIEM、SOAR、EDR等平台，实现威胁检测、分析、响应与溯源的闭环管理，提升事件可视化能力与响应效率，降低安全运营风险。",
      link: "#security-operations",
    },
    {
      title: "合规审计服务",
      description: "提供满足国家与国际法规标准（如等级保护2.0/3.0、ISO/IEC 27001、GDPR、NIST、PCI DSS 等）的合规差距评估、落地咨询与审计支持服务，协助企业实现制度建设、技术整改与持续符合性管理。",
      link: "#compliance-services",
    },
    {
      title: "安全培训服务",
      description: "为技术人员、管理层及全员提供定制化网络安全意识与实操培训，包括红蓝对抗演练、社工钓鱼模拟、应急响应演练等，提升组织整体安全能力，构建“人防”防线。",
      link: "#security-training",
    },
    {
      title: "应急响应服务",
      description: "快速响应勒索病毒、APT攻击、数据泄露等各类重大安全事件，基于预设流程开展调查、溯源、处置与恢复，最大限度降低业务中断和损失风险，同时支持事后复盘与策略优化。",
      link: "#incident-response",
    },
    {
      title: "威胁情报服务",
      description: "提供基于全球情报源与自主分析引擎的威胁情报服务，涵盖攻击者画像、IOC/TTP推演、行业攻击趋势、实时溯源等，辅助客户实现前置防御与智能检测。",
      link: "#threat-intelligence",
    },
    {
      title: "代码安全审计",
      description: "通过静态代码分析（SAST）、动态测试（DAST）、人工审查等手段，识别业务系统与核心模块中的安全缺陷，支持SDL（安全开发生命周期）建设，提升软件供应链安全性。",
      link: "#code-audit",
    },
    {
      title: "云安全服务",
      description: "聚焦多云与混合云场景下的架构安全设计、访问控制、配置基线检查、DevSecOps集成与云原生应用安全评估，确保云环境具备合规性、可视性与可控性。",
      link: "#cloud-security",
    },
    {
      title: "数据安全保护",
      description: "基于数据分类分级、脱敏加密、访问控制、审计追踪与防泄漏机制，构建从数据产生到流转的全生命周期安全体系，满足企业对合规、隐私与关键数据保护的高要求。",
      link: "#data-protection",
    },
    {
      title: "物联网安全",
      description: "提供IoT终端设备固件安全审计、通信协议加固、零信任访问控制与边缘安全架构设计，保障工业物联网（IIoT）、智能制造、车联网等场景下的设备与平台安全。",
      link: "#iot-security",
    },
    {
      title: "区块链安全",
      description: "聚焦智能合约安全、DeFi协议风险评估、跨链桥审计与区块链基础设施安全防护，提供从代码审计到共识机制加固的全流程安全保障服务，守护 Web3.0 业务安全运行。",
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