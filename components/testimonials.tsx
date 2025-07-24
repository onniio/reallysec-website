import { useState } from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";
import { InViewDiv } from "./in-view-div";
import { useMemo } from "react";
import { TestimonialColumnContainer } from "./testimonial-column-container";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">客户的认可是我们最大动力</Heading>
      <Subheading className="text-center max-w-lg mx-auto">
      在客户眼中，我们不仅是服务提供商，更是并肩作战、值得依赖的安全服务合作伙伴。
      </Subheading>
      <TestimonialGrid />
    </div>
  );
};

interface Testimonial {
  name: string;
  quote: string;
  src: string;
  designation?: string;
}

const testimonials = [
  {
    name: "Manu Arora",
    quote:
      "云原生安全测试对Kubernetes集群的评估很全面，RBAC misconfiguration和container escape技术都覆盖到了。DevSecOps pipeline的安全门禁设计很合理。",
    src: "https://i.pravatar.cc/150?img=1",
    designation: "互联网公司DevOps总监",
  },
  {
    name: "Tyler Durden",
    quote:
      "在我们遭遇Conti勒索软件攻击时，他们的应急响应团队2小时内到达现场，成功阻止了横向传播。通过YARA规则快速识别变种，48小时内完全恢复业务，避免了数千万损失。",
    src: "https://i.pravatar.cc/150?img=2",
    designation: "制造业集团CTO",
  },
  {
    name: "Alice Johnson",
    quote:
      "在本次LockBit勒索软件事件中，团队展现了出色的containment能力。通过网络隔离和端点响应，成功保护了核心数据库。加密文件恢复率达到99.8%，业务中断时间仅6小时。",
    src: "https://i.pravatar.cc/150?img=3",
    designation: "医疗集团信息主管",
  },
  {
    name: "Bob Smith",
    quote:
      "DarkSide勒索软件攻击我们的工控系统，他们展现了罕见的OT安全专业能力。在不影响生产的前提下完成了恶意软件清除，避免了安全事故和环境污染。",
    src: "https://i.pravatar.cc/150?img=4",
    designation: "化工企业安全总监",
  },
  {
    name: "Cathy Lee",
    quote:
      "威胁建模workshop非常有价值，基于STRIDE方法论系统分析了我们的云架构风险。threat landscape评估准确，mitigation策略制定得很详细，可操作性很强。",
    src: "https://i.pravatar.cc/150?img=5",
    designation: "云服务商安全架构师",
  },
  {
    name: "David Wright",
    quote:
      "他们带来的安全防护效率无与伦比。这是一个至关重要的服务，帮助我们降低了成本并显著提升了安全防护水平。",
    src: "https://i.pravatar.cc/150?img=6",
    designation: "IT运营总监",
  },
  {
    name: "Eva Green",
    quote:
      "渗透测试做得非常细致，发现了我们系统中很多隐藏的漏洞。报告写得也很详细，不仅指出问题还给出了具体的修复建议。",
    src: "https://i.pravatar.cc/150?img=7",
    designation: "IT信息部主任",
  },
  {
    name: "Frank Moore",
    quote:
      "内网渗透测试展现了出色的lateral movement技术，通过Kerberoasting和DCSync攻击获得了域管权限。Active Directory安全评估报告让我们重新审视了身份管理策略。",
    src: "https://i.pravatar.cc/150?img=8",
    designation: "制造业集团IT总监",
  },
  {
    name: "Grace Hall",
    quote:
      "Reallysec SOC的SIEM平台集成了他们自建的威胁情报源，基于机器学习的异常检测算法大幅降低了false positive率。安全运营效率提升了40%以上。",
    src: "https://i.pravatar.cc/150?img=9",
    designation: "网络运维经理",
  },
  {
    name: "Henry Ford",
    quote:
      "数据库渗透测试对Oracle和MySQL的安全配置评估很深入，privilege escalation和data exfiltration攻击路径分析得很清楚。database activity monitoring的部署建议很有用。",
    src: "https://i.pravatar.cc/150?img=10",
    designation: "数据库管理专家",
  },
  {
    name: "Ivy Wilson",
    quote:
      "他们的SOC提供的CTI服务质量很高，IOC准确性达到95%以上。基于Diamond Model的威胁分析为我们的threat hunting提供了重要线索。",
    src: "https://i.pravatar.cc/150?img=11",
    designation: "威胁情报分析师",
  },
  {
    name: "Jack Brown",
    quote:
      "Reallysec数字取证团队严格遵循RFC 3227标准，证据链完整性得到充分保障。在法律诉讼中提供的技术支持和专家证词得到了法院认可。",
    src: "https://i.pravatar.cc/150?img=12",
    designation: "法务部总监",
  },
  {
    name: "Kathy Adams",
    quote:
      "跨链桥安全审计涵盖了多签机制、预言机安全和状态同步等关键环节。团队对Layer2和侧链技术的安全风险把握很准确。",
    src: "https://i.pravatar.cc/150?img=13",
    designation: "市场运营经理",
  },
  {
    name: "Leo Carter",
    quote:
      "Reallysec SOC的MSSP服务模式很好地补充了我们内部安全团队的能力。7x24小时监控结合L1/L2/L3分层响应机制，显著提升了安全运营成熟度。",
    src: "https://i.pravatar.cc/150?img=14",
    designation: "IT基础设施总监",
  },
  {
    name: "Mia Turner",
    quote:
      "他们在Splunk SOAR的Playbook自动化编排做得很专业，集成了我们现有的防火墙、EDR和威胁情报平台。MTTR从4小时缩短到了45分钟。",
    src: "https://i.pravatar.cc/150?img=15",
    designation: "安全自动化工程师",
  },
  {
    name: "Nathan Hill",
    quote:
      "他们对Splunk Add-on的开发和定制能力很强，成功集成了我们的私有云日志和业务系统数据。数据采集覆盖率达到了98%以上。",
    src: "https://i.pravatar.cc/150?img=16",
    designation: "资深安全架构师",
  },
  {
    name: "Olivia Scott",
    quote:
      "邮件安全测试发现了SPF和DKIM配置的多个问题，business email compromise的模拟攻击很逼真。email security gateway的bypass技术让我们重新审视了邮件防护。",
    src: "https://i.pravatar.cc/150?img=17",
    designation: "企业通信总监",
  },
  {
    name: "Peter White",
    quote:
      "Reallysec SOC的双平台威胁狩猎能力出色，利用QRadar的网络行为分析发现APT横向移动，再通过Splunk UBA验证用户异常行为。多维度关联分析让威胁无所遁形。",
    src: "https://i.pravatar.cc/150?img=18",
    designation: "风险管理总监",
  },
  {
    name: "Quinn Taylor",
    quote:
      "基于QRadar的DSM开发能力很强，成功集成了我们的私有安全设备。QFlow和QNI的网络流量分析结合Splunk的日志关联，实现了真正的360度安全监控。",
    src: "https://i.pravatar.cc/150?img=19",
    designation: "网络安全总监",
  },
  {
    name: "Rachel Black",
    quote:
      "他们基于Splunk ITSI的设计十分巧妙，通过服务健康监控让我们实现了业务安全的统一视图。KPI关联分析帮助我们快速定位业务影响和根因。",
    src: "https://i.pravatar.cc/150?img=20",
    designation: "业务安全负责人",
  },
  {
    name: "Samuel Lee",
    quote:
      "技术支持团队对两个平台的故障排查能力很强，从QRadar的Event Pipeline到Splunk的Index管理，技术深度让人信服。7x24小时服务承诺兑现到位。",
    src: "https://i.pravatar.cc/150?img=21",
    designation: "SOC技术主管",
  },
  {
    name: "Tina Brooks",
    quote:
      "基于两个平台的机器学习和AI能力，构建了智能化的威胁检测模型。QRadar Advisor和Splunk MLTK的算法融合，误报率降低到2%以下。",
    src: "https://i.pravatar.cc/150?img=22",
    designation: "AI安全研究员",
  },
];

function Testimonial({
  name,
  quote,
  src,
  designation,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"figure">, keyof Testimonial> &
  Testimonial) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = [
      "0s",
      "0.1s",
      "0.2s",
      "0.3s",
      "0.4s",
      "0.5s",
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  const boxStyle = {};
  return (
    <figure
      className={cn(
        "animate-fade-in rounded-3xl bg-transparent p-8 opacity-0 shadow-derek dark:bg-neutral-900",
        className
      )}
      style={{
        animationDelay,
      }}
      {...props}
    >
      <div className="flex flex-col items-start">
        <div className="flex gap-2">
          <Image
            src={src}
            width={150}
            height={150}
            className="h-10 w-10 rounded-full"
            alt={name}
          />
          <div>
            <h3 className="text-sm  font-medium text-neutral-500 dark:text-neutral-300">
              {name}
            </h3>
            <p className="text-sm font-normal text-neutral-500 dark:text-neutral-300">
              {designation}
            </p>
          </div>
        </div>
        <p className="text-base text-muted mt-4 dark:text-muted-dark">
          {quote}
        </p>
      </div>
    </figure>
  );
}

function TestimonialColumn({
  testimonials,
  className,
  containerClassName,
  shift = 0,
}: {
  testimonials: Testimonial[];
  className?: string;
  containerClassName?: (reviewIndex: number) => string;
  shift?: number;
}) {
  return (
    <TestimonialColumnContainer className={cn(className)} shift={shift}>
      {testimonials
        .concat(testimonials)
        .map((testimonial, testimonialIndex) => (
          <Testimonial
            name={testimonial.name}
            quote={testimonial.quote}
            src={testimonial.src}
            designation={testimonial.designation}
            key={testimonialIndex}
            className={containerClassName?.(
              testimonialIndex % testimonials.length
            )}
          />
        ))}
    </TestimonialColumnContainer>
  );
}

function splitArray<T>(array: Array<T>, numParts: number) {
  let result: Array<Array<T>> = [];
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function TestimonialGrid() {
  let columns = splitArray(testimonials, 3);
  let column1 = columns[0];
  let column2 = columns[1];
  let column3 = splitArray(columns[2], 2);
  return (
    <InViewDiv className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
      <TestimonialColumn
        testimonials={[...column1, ...column3.flat(), ...column2]}
        containerClassName={(tIndex) =>
          cn(
            tIndex >= column1.length + column3[0].length && "md:hidden",
            tIndex >= column1.length && "lg:hidden"
          )
        }
        shift={10}
      />
      <TestimonialColumn
        testimonials={[...column2, ...column3[1]]}
        className="hidden md:block"
        containerClassName={(tIndex) =>
          tIndex >= column2.length ? "lg:hidden" : ""
        }
        shift={15}
      />
      <TestimonialColumn
        testimonials={column3.flat()}
        className="hidden lg:block"
        shift={10}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white dark:from-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-black" />
    </InViewDiv>
  );
}
