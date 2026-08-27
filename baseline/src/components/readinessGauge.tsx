type ReadinessGaugeProps = {
  score: number;
};

export const ReadinessGauge = ({ score }: ReadinessGaugeProps) => {
  return (
    <svg 
      fill="none"
      strokeWidth="14"
      strokeLinecap="round"
      viewBox="0 0 200 110">

      <path 
        d="M 20 100 A 80 80 0 0 1 180 100" 
        fill="none"
        strokeWidth="14"
        strokeLinecap="round"
        stroke="white"/>
      
      <path 
        d="M 20 100 A 80 80 0 0 1 180 100" 
        fill="none"
        strokeWidth="14"
        strokeLinecap="round"
        stroke="blue"
        pathLength="100"
        strokeDasharray="{score[score.length -1]} 100"/>
    </svg>
  );
};