import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { ExpandableCardOnClick } from "@/components/expandable-card-onclick";
import { Timeline } from "@/components/timeline";
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
    title: "2025",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          公司成立，专注于为中小企业提供基础网络安全服务，包括防火墙配置、基础漏洞扫描等服务。
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/timeline-2020-1.jpg"
            alt="公司成立"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
          />
          <img
            src="/images/timeline-2020-2.jpg"
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
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          业务快速发展，建立了专业的安全运营中心(SOC)，开始为大型企业提供7×24小时安全监控服务。
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/timeline-2021-1.jpg"
            alt="SOC建立"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
          />
          <img
            src="/images/timeline-2021-2.jpg"
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
    title: "2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          推出红队测试服务，组建专业的渗透测试团队，帮助企业发现安全漏洞，提升整体安全防护能力。
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/timeline-2022-1.jpg"
            alt="红队成立"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
          />
          <img
            src="/images/timeline-2022-2.jpg"
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
    title: "2022",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          扩展安全咨询业务，与多家知名企业建立长期合作关系，提供定制化的安全解决方案和合规性审计服务。
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/timeline-2023-1.jpg"
            alt="咨询业务"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
          />
          <img
            src="/images/timeline-2023-2.jpg"
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
    title: "2021",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          全面升级服务体系，推出AI驱动的威胁检测平台，为客户提供更智能、更高效的安全防护服务。
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          同时启动了全国布局计划，在多个重点城市设立分支机构，服务覆盖范围进一步扩大。
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/timeline-2024-1.jpg"
            alt="AI平台"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
          />
          <img
            src="/images/timeline-2024-2.jpg"
            alt="分支机构"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
          />
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
          <Heading as="h1">关于我们</Heading>
          <Subheading className="text-center">
            Reallysec 致力于为全球客户提供专业的网络安全服务，
            我们拥有经验丰富的安全专家团队，为您的数字资产提供全方位保护。
          </Subheading>
        </div>
        
        {/* Timeline组件 */}
        <div className="relative z-20 w-full">
          <Timeline data={timelineData} />
        </div>
        
        {/* ExpandableCardOnClick组件 */}
        <div className="relative z-20 w-full">
          <ExpandableCardOnClick />
        </div>
      </Container>
    </div>
  );
}