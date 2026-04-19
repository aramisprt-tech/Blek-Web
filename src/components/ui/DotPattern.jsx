import React, { useId } from "react";

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className = "",
  glow = false,
  style = {},
  ...props
}) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={`dot-pattern ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        height: '100%',
        width: '100%',
        pointerEvents: 'none',
        ...style
      }}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} fill="rgba(0, 0, 0, 0.5)">
            {glow && (
              <>
                <animate attributeName="r" values={`${cr};${cr * 2.5};${cr}`} dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
              </>
            )}
          </circle>
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}
