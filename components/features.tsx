import React from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";
import { GridLineHorizontal, GridLineVertical } from "./grid-lines";
import { SkeletonOne as NewSkeletonOne } from "./skeletons/new-skeleton-one"; // 新的SkeletonOne
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonFour } from "./skeletons/fourth";
import { SkeletonThree } from "./skeletons/third";

export const Features = () => {
  const features = [
    {
      title: "基于平台行为模型构建定向采集与策略协同机制",
      description:
        "我们不只是简单接入日志，而是针对各平台（Splunk CIM、ELK ECS、Sentinel Schema、QRadar DSM）构建行为语义模型，按攻击战术定向采集，自动映射到对应平台规则库，实现数据接入即服务于威胁检测。",
      skeleton: <NewSkeletonOne />,
      className:
        "col-span-1 md:col-span-4 border-b border-r dark:border-neutral-800",
    },
    {
      title: "我们如何保护您的安全",
      description:
        "通过全面托管的安全运营中心（SOC），整合AI检测、行为分析与专家响应，为企业提供横跨终端、网络、云环境的全天候防护体系。",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 md:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Reallysecer LLM 工单系统",
      description:
        "深度集成主流SIEM与安全运营中心，系统具备端到端的自适应闭环处理能力，显著提升工单处理效率与响应准确率。",
      skeleton: <SkeletonThree />,
      className: "col-span-1 md:col-span-3 border-r dark:border-neutral-800",
    },
    {
      title: "客户案例",
      description:
        "我们因提供符合行业最高标准的高质量、全面服务而享有盛誉，这意味着与客户合作设计满足其独特需求的解决方案。",
      skeleton: <SkeletonFour />,
      className: "col-span-1 md:col-span-3",
    },
  ];
  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">抵御网络威胁需了解攻击者的运作方式</Heading>
      <Subheading className="text-center ">
      我们在世界各地进行渗透测试、红队和其他道德黑客活动方面拥有丰富的经验，这意味着我们拥有最新的对抗性策略的第一手资料，并对如何防范这些策略有广泛的见解。
      </Subheading>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-6 mt-12">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
        <GridLineHorizontal
          style={{
            top: 0,
            left: "-10%",
            width: "120%",
          }}
        />

        <GridLineHorizontal
          style={{
            bottom: 0,
            left: "-10%",
            width: "120%",
          }}
        />

        <GridLineVertical
          style={{
            top: "-10%",
            right: 0,
            height: "120%",
          }}
        />
        <GridLineVertical
          style={{
            top: "-10%",
            left: 0,
            height: "120%",
          }}
        />
      </div>
    </div>
  );
};

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Heading as="h3" size="sm" className="text-left">
      {children}
    </Heading>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Subheading className="text-left max-w-full mx-0 md:text-sm my-2">
      {children}
    </Subheading>
  );
};