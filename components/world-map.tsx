"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
    startLabel?: string;
    endLabel?: string;
  }>;
  lineColor?: string;
}

export function WorldMap({
  dots = [],
  lineColor = "#D1D5DB", // 改为浅灰色 (gray-300)
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const { theme } = useTheme();

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF30" : "#00000030",
    shape: "circle",
    backgroundColor: "transparent",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // 计算标签的最佳位置（上方或下方）和虚线连接
  const getLabelPosition = (point: { x: number; y: number }, label: string, isStart: boolean = false, index: number = 0) => {
    console.log("Processing label:", label, "at point:", point); // 调试用

    
    // 合肥特殊处理 - 垂直虚线，与伦敦红队实验室平齐
    if (isStart && label === "合肥安全运营中心") {
      return {
        labelX: point.x,
        labelY: 10, // 与伦敦红队实验室同样的高度
        lineStartX: point.x,
        lineStartY: point.y - 8, // 垂直向上
        lineEndX: point.x,
        lineEndY: 30, // 垂直线终点
        isSpecial: true
      };
    }
    
    // 其他城市的常规处理 - 增加虚线长度
    const isUpperHalf = point.y < 200;
    const labelY = isUpperHalf ? 10 : 390; // 更靠近边缘
    const lineEndY = isUpperHalf ? 30 : 370; // 虚线更长
    
    return {
      labelX: point.x,
      labelY: labelY,
      lineStartX: point.x,
      lineStartY: point.y + (isUpperHalf ? -8 : 8),
      lineEndX: point.x,
      lineEndY: lineEndY,
      isUpper: isUpperHalf,
      isSpecial: false
    };
  };

  return (
    <div className="w-full aspect-[2/1] bg-transparent rounded-lg relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent_5%,white_15%,white_85%,transparent_95%)] pointer-events-none select-none opacity-80"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {/* 连接线 */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1.5"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 2,
                  delay: 0.3 * i,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 1,
                }}
                key={`path-${i}`}
              />
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 城市点、虚线和标签 */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          const startLabelPos = getLabelPosition(startPoint, dot.startLabel!, true, i);
          const endLabelPos = getLabelPosition(endPoint, dot.endLabel!, false, i);

          return (
            <g key={`points-group-${i}`}>
              {/* 起点 - 合肥安全运营中心 */}
              <g key={`start-${i}`}>
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="3"
                  fill="#8B0000"
                />
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="3"
                  fill="#8B0000"
                  opacity="0.6"
                >
                  <animate
                    attributeName="r"
                    from="3"
                    to="12"
                    dur="2s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.6"
                    to="0"
                    dur="2s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
                
                {/* 合肥标签虚线和文字 - 只显示一次 */}
                {i === 0 && (
                  <>
                    <line
                      x1={startLabelPos.lineStartX}
                      y1={startLabelPos.lineStartY}
                      x2={startLabelPos.lineEndX}
                      y2={startLabelPos.lineEndY}
                      stroke="#C0C0C0"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                    />
                    <text
                      x={startLabelPos.labelX}
                      y={startLabelPos.labelY}
                      textAnchor="middle"
                      className="fill-gray-700 dark:fill-gray-300 text-xs font-bold" // 加粗
                    >
                      {dot.startLabel}
                    </text>
                  </>
                )}
              </g>
              
              {/* 终点 - 各个城市 */}
              <g key={`end-${i}`}>
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="3"
                  fill="#8B0000"
                />
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="3"
                  fill="#8B0000"
                  opacity="0.6"
                >
                  <animate
                    attributeName="r"
                    from="3"
                    to="12"
                    dur="2s"
                    begin={`${0.3 * i}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.6"
                    to="0"
                    dur="2s"
                    begin={`${0.3 * i}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                
                {/* 城市标签虚线和文字 */}
                <line
                  x1={endLabelPos.lineStartX}
                  y1={endLabelPos.lineStartY}
                  x2={endLabelPos.lineEndX}
                  y2={endLabelPos.lineEndY}
                  stroke="#C0C0C0"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                />
                <text
                  x={endLabelPos.labelX}
                  y={endLabelPos.labelY}
                  textAnchor={endLabelPos.isSpecial ? "start" : "middle"}
                  className="fill-gray-700 dark:fill-gray-300 text-xs font-bold" // 加粗
                >
                  {dot.endLabel}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}