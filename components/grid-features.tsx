import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export const GridFeatures = () => {
  const features = [
    {
      title: "全面威胁检测能力",
      description:
        "全生命周期覆盖APT攻击/0day/勒索病毒/内网横向等全谱系攻击行为,精准告警不误判.",
      icon: <IconTerminal2 />,
    },
    {
      title: "分钟级应急响应机制",
      description:
        "发现即响应，7x24不间断威胁联动联防,缩短MDR闭环处置平均响应时间.",
      icon: <IconEaseInOut />,
    },
    {
      title: "跨平台系统兼容集成",
      description:
        "支持与主流SIEM、EDR、XDR、SOAR系统无缝对接,统一视图集中管理.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "原生合规内核设计",
      description: "满足ISO 27001、等保3.0、GDPR、SOC2等监管要求,合规内建可审计.",
      icon: <IconCloud />,
    },
    {
      title: "AI驱动安全自动化运营",
      description: "结合LLM与行为模型实现工单分派/威胁优先级排序/回溯分析等全流程自动化.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "威胁情报实时联动",
      description:
        "自建全球威胁情报源（CTI）/IOC同步与溯源分析,实现主动防御.",
      icon: <IconHelp />,
    },
    {
      title: "行为分析引擎自适应学习",
      description:
        "通过机器学习与安全上下文,动态调整策略与检测规则,持续进化对抗模型.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "全球节点支援能力",
      description: "支持跨地域SOC部署与就地响应,保障跨境业务环境中同样高效与合规.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
