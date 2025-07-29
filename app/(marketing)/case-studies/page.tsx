import { type Metadata } from "next";
import { getAllBlogs } from "@/lib/blog";
import { Background } from "@/components/background";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { BlogCard } from "@/components/blog-card";
import { Companies } from "@/components/companies";

export const metadata: Metadata = {
  title: "Reallysec - 客户案例",
  description:
    "",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};



export default async function ArticlesIndex() {
  let blogs = await getAllBlogs();

  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between pb-20">
        <div className="relative z-20 py-10 md:pt-40">
          <Heading as="h1">客户案例</Heading>
          <Subheading className="text-center">
          Reallysec 在网络安全、可观测性、人工智能、机器学习与预测性分析等多个领域，持续与全球领先企业开展深度协作。我们凭借强大的专家团队与平台化能力，快速响应客户需求，精准适配其业务场景，在关键系统防护、威胁检测、数据智能洞察及运营效率提升等方面实现高效落地与持续价值交付。
          </Subheading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-20 w-full mb-10">
          {blogs.slice(0, 2).map((blog, index) => (
            <BlogCard blog={blog} key={blog.title + index} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full relative z-20 mb-20">
          {blogs.slice(2).map((blog, index) => (
            <BlogCard blog={blog} key={blog.title + index} />
          ))}
        </div>

        {/* 添加客户信赖组件到页面底部 */}
        <div className="relative z-20 w-full">
          <Companies />
        </div>
      </Container>
    </div>
  );
}