import React from 'react';
interface BarData {
  name: string;
  value: number;
  color: string;
}

interface ComparativeChartProps {
  currentData: BarData[];
  compareData: BarData[] | null;
  title: string;
}

export default function ComparativeChart({
  currentData,
  compareData,
  title,
}: ComparativeChartProps) {
  const hasComparison = !!compareData;
  const barWidth = 20;
  const groupGap = 10;
  const totalWidth = Math.max(
    currentData.length * (barWidth * (hasComparison ? 2 : 1) + groupGap) -
      groupGap,
    200
  );
  const height = 200;
  const padding = { top: 20, right: 20, bottom: 40, left: 40 };
  const maxValue = Math.max(
    ...currentData.map(d => d.value),
    ...(compareData ? compareData.map(d => d.value) : [])
  );
  const scale = (height - padding.top - padding.bottom) / (maxValue || 1);

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg flex items-center gap-2 text-terracota-600">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3"
          />
        </svg>
        {title}
      </h3>
      {currentData.length === 0 && compareData?.length === 0 && (
        <p className="text-slate-500 text-center">No hay datos para mostrar</p>
      )}
      <div className="relative h-[200px] w-full">
        <svg
          width={totalWidth + padding.left + padding.right}
          height={height}
          style={{ display: 'block', margin: '0 auto' }}
        >
          {/* X axis labels */}
          {currentData.map((_, index) => {
            const x =
              padding.left +
              index * (barWidth * (hasComparison ? 2 : 1) + groupGap) +
              barWidth / 2;
            return (
              <text
                key={index}
                x={x}
                y={height - padding.bottom + 20}
                textAnchor="middle"
                fontSize="12"
                fill="currentColor"
              >
                {currentData[index].name}
              </text>
            );
          })}
          {/* Bars */}
          {currentData.map((curr, index) => {
            const baseX =
              padding.left +
              index * (barWidth * (hasComparison ? 2 : 1) + groupGap);
            const currHeight = curr.value * scale;
            return (
              <React.Fragment key={index}>
                <rect
                  x={baseX}
                  y={height - padding.bottom - currHeight}
                  width={barWidth}
                  height={currHeight}
                  fill={curr.color}
                />
                {compareData && (
                  <rect
                    key={`${index}-compare`}
                    x={baseX + barWidth + 2}
                    y={height - padding.bottom - compareData[index].value * scale}
                    width={barWidth}
                    height={compareData[index].value * scale}
                    fill={compareData[index].color}
                    opacity={0.7}
                  />
                )}
              </React.Fragment>
            );
          })}
        </svg>
      </div>
    </div>
  );
}