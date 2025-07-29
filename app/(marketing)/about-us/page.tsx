import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { ExpandableCardOnClick } from "@/components/expandable-card-onclick";
import { Timeline } from "@/components/timeline";
import { LogoCloudMarquee } from "@/components/logo-cloud-marquee"; // 添加LogoCloudMarquee导入
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reallysec - 关于我们",
  description: "了解Reallysec的专业网络安全服务，我们提供全方位的安全解决方案，保护您的数字资产安全。",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

const timelineData = [
  {
    title: "2016",
    content: (
      <div>
        <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4">伦敦 · 启航</h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          在英国伦敦，由7名资深攻防专家共同创立<strong className="text-blue-600 dark:text-blue-400">进攻性安全研究中心（Offensive Security Research Unit）</strong>，聚焦于红队演练、零日漏洞挖掘与APT对抗，为后续全球化安全技术体系奠定基础。
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/cyber-living.png"
            alt="公司成立"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
          />
          <img
            src="/images/seclab.png"
            alt="初期团队"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2018",
    content: (
      <div>
        <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4">亚太枢纽建立：墨尔本 · 应急响应中心成立</h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          该中心作为公司在南半球的首个专业节点，整合<strong className="text-blue-600 dark:text-blue-400">威胁情报驱动的事件响应平台（TDR/IR）</strong>、<strong className="text-blue-600 dark:text-blue-400">数字取证实验室（DFIR）与区域通报联络能力（CIRT）</strong>，提供覆盖整个亚太地区的<strong>7×24小时响应能力</strong>，是全球多点SOC架构中的关键支撑节点。
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/aslab2.png"
            alt="SOC建立"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
          />
          <img
            src="/images/aslab.png"
            alt="监控中心"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4">中国区 · 初步运营能力建成</h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
          于<strong>武汉</strong>设立安全运营中心，面向中国大陆及东亚客户，交付基于<strong className="text-blue-600 dark:text-blue-400">Splunk Enterprise Security</strong> / <strong className="text-blue-600 dark:text-blue-400">IBM QRadar SIEM</strong> / <strong className="text-blue-600 dark:text-blue-400">Azure Sentinel</strong> / <strong className="text-blue-600 dark:text-blue-400">Reallysec Elastic</strong>等SIEM的威胁检测、日志审计与自动化响应平台。
        </p>
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-4 rounded-lg mb-8">
          <h4 className="text-base font-bold text-red-700 dark:text-red-300 mb-3">荣誉加持</h4>
          <ul className="space-y-2">
            <li className="text-xs md:text-sm">• <span className="text-red-600 dark:text-red-400 font-bold">"Top Infosec Innovator 2022"</span>(Cyber Defense Magazine)</li>
            <li className="text-xs md:text-sm">• <span className="text-red-600 dark:text-red-400 font-bold">Advisen Cyber Risk Award Winner 2022</span></li>
            <li className="text-xs md:text-sm">• <span className="text-red-600 dark:text-red-400 font-bold">SC Awards 2022 Finalist – Best Threat Detection Solution</span></li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/rssoc.png"
            alt="红队成立"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
          />
          <img
            src="/images/soclab.png"
            alt="渗透测试"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4">硅谷 · 研发中心成立：AI原生安全研发加速</h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
          美国硅谷AI安全研发中心专注于<strong className="text-blue-600 dark:text-blue-400">大模型在威胁分析中的可解释性</strong>、<strong className="text-blue-600 dark:text-blue-400">行为驱动攻防自动化</strong>与<strong className="text-blue-600 dark:text-blue-400">SaaS平台安全治理</strong>，引领下一代<strong>"Security-as-Code"</strong>能力。
        </p>
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-4 rounded-lg mb-8">
          <h4 className="text-base font-bold text-red-700 dark:text-red-300 mb-3">年度荣誉</h4>
          <ul className="space-y-2">
            <li className="text-xs md:text-sm">• <span className="text-red-600 dark:text-red-400 font-bold">Global Infosec Awards 2023 Winner</span>（Cyber Defense Magazine）</li>
            <li className="text-xs md:text-sm">• <span className="text-red-600 dark:text-red-400 font-bold">SC Awards 2023 – Best Emerging Technology</span></li>
            <li className="text-xs md:text-sm">• <span className="text-red-600 dark:text-red-400 font-bold">核心专家入选 EC-Council</span></li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/devlab.webp"
            alt="咨询业务"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
          />
          <img
            src="/images/devlab2.webp"
            alt="合作伙伴"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4">组织升级与合规重构：合肥 · New SOC 上线  整合武汉运营能力</h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
          将原<strong>武汉SOC整体迁移、升级并整合至合肥</strong>，构建统一的<strong className="text-blue-600 dark:text-blue-400">IT/OT融合安全运营平台</strong>，具备工业网络深度协议解析、AI动态基线建模及ICS攻击链检测能力。
        </p>
        
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg mb-6">
          <h4 className="text-base font-bold text-green-700 dark:text-green-300 mb-3">全面认证，权威认可</h4>
          <ul className="space-y-2">
            <li className="text-xs md:text-sm">• 获得 <span className="text-green-600 dark:text-green-400 font-bold">ISO/IEC 27001:2022</span>、<span className="text-green-600 dark:text-green-400 font-bold">ISO 9001:2015</span> 认证</li>
            <li className="text-xs md:text-sm">• 专家组全员通过 <span className="text-green-600 dark:text-green-400 font-bold">CISM（信息安全经理）</span> 国际资质</li>
            <li className="text-xs md:text-sm">• SOC二线全员通过 <span className="text-green-600 dark:text-green-400 font-bold">OSCP（进攻性网络安全认证）</span> 国际资质</li>          
          </ul>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-4 rounded-lg mb-6">
          <h4 className="text-base font-bold text-purple-700 dark:text-purple-300 mb-3">GigaOm Radar Report 2024 多领域领导者认证</h4>
          <div className="grid grid-cols-2 gap-2">
            <ul className="space-y-1">
              <li className="text-xs md:text-sm">• <strong>SIEM</strong></li>
              <li className="text-xs md:text-sm">• <strong>软件供应链安全</strong>（SSCS）</li>
              <li className="text-xs md:text-sm">• <strong>云原生应用保护平台</strong>（CNAPP）</li>
            </ul>
            <ul className="space-y-1">
              <li className="text-xs md:text-sm">• <strong>DDI平台</strong>（DNS/DHCP/IPAM）</li>
              <li className="text-xs md:text-sm">• <strong>多因素认证</strong>（MFA）</li>
              <li className="text-xs md:text-sm">• <strong>事件与任务管理</strong>（ITM）</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-4 rounded-lg mb-8">
          <h4 className="text-base font-bold text-red-700 dark:text-red-300 mb-3">行业奖项再突破</h4>
          <ul className="space-y-2">
            <li className="text-xs md:text-sm">• <span className="text-red-600 dark:text-red-400 font-bold">Top Infosec Innovator Winner 2024</span>（Cyber Defense Magazine）</li>
            <li className="text-xs md:text-sm">• <span className="text-red-600 dark:text-red-400 font-bold">CSEA 2024 金奖</span>（Cybersecurity Excellence Awards）</li>
            <li className="text-xs md:text-sm">• <span className="text-red-600 dark:text-red-400 font-bold">CSA 2024 获奖者</span>（Cyber Security Awards）</li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/meet.png"
            alt="AI平台"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
          />
          <img
            src="/images/ahsoc.png"
            alt="分支机构"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div>
        <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4">全球智能联防网络完成构建</h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
          打通<strong className="text-blue-600 dark:text-blue-400">伦敦 - 墨尔本 - 硅谷 - 合肥</strong>四地多节点SOC，形成基于<strong className="text-blue-600 dark:text-blue-400">AI威胁分析引擎 + 自动化响应编排 + 多语言跨境取证系统</strong>的分布式联动安全框架。
        </p>
        
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-4 rounded-lg mb-8">
          <h4 className="text-base font-bold text-red-700 dark:text-red-300 mb-3">标志性成果</h4>
          <ul className="space-y-2">
            <li className="text-xs md:text-sm">• <span className="text-red-600 dark:text-red-400 font-bold">GigaOm 2025 "AI Infrastructure – Fast Mover"</span></li>
            <li className="text-xs md:text-sm">• <span className="text-red-600 dark:text-red-400 font-bold">Fortress Cyber Security Award 2025</span></li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
        </div>
      </div>
    ),
  },
];

export default function AboutUsPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between pb-20">
        <div className="relative z-20 py-10 md:pt-40">
          <Heading as="h1">发展历程</Heading>
          <Subheading className="text-center">
          Reallysec 专注于为全球客户提供高标准的网络安全服务，逐步构建起覆盖攻防、合规与运营的全栈安全能力体系。凭借一支具备 OSCP、GCTI 等国际认证的专家团队，我们在云安全、工业防护与AI威胁检测等领域持续创新，服务能力广泛应用于金融、制造、能源等关键行业，现已成为值得信赖的全球安全合作伙伴。
          </Subheading>
        </div>
        
        {/* Timeline组件 */}
        <div className="relative z-20 w-full">
          <Timeline data={timelineData} />
        </div>
        
        {/* LogoCloudMarquee组件 - 添加到Timeline和ExpandableCardOnClick之间 */}
        <div className="relative z-20 w-full">
          <LogoCloudMarquee />
        </div>
        
        {/* ExpandableCardOnClick组件 */}
        <div className="relative z-20 w-full">
          <ExpandableCardOnClick />
        </div>
      </Container>
    </div>
  );
}