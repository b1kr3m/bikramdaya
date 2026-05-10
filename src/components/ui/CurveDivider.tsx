interface CurveDividerProps {
  fill: string;
  flip?: boolean;
}

export function CurveDivider({ fill, flip = false }: CurveDividerProps) {
  return (
    <div className="curve-divider" aria-hidden="true">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={
            flip
              ? "M0,0 Q720,60 1440,0 L1440,60 L0,60 Z"
              : "M0,60 Q720,0 1440,60 L1440,60 L0,60 Z"
          }
          fill={fill}
        />
      </svg>
    </div>
  );
}
