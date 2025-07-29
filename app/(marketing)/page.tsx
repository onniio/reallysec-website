import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Background } from "@/components/background";
import { Features } from "@/components/features";
import { Companies } from "@/components/companies";
import { GridFeatures } from "@/components/grid-features";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { StatsWithNumberTicker } from "@/components/stats-section"; // 导入统计组件

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full overflow-hidden ">
        <Background />
      </div>
      <Container className="flex flex-col items-center">
        <Hero />      
        <Companies />
        <div className="w-full -mt-10 md:-mt-16">
        <Features />
        </div>
        <div className="w-full -mt-10 md:-mt-16">
          <StatsWithNumberTicker />
        </div>
        <div className="w-full -mt-10 md:-mt-12">
        <GridFeatures />
        </div>
        <div className="w-full -mt-2 md:-mt-30">
        <Testimonials />
        </div>
      </Container>
      <div className="relative">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Background />
        </div>
        <CTA />
      </div>
    </div>
  );
}