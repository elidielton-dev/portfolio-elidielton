"use client";

import { useId } from "react";

type FlagProps = {
  className?: string;
  size?: number;
};

export function BrazilFlag({ className, size = 18 }: FlagProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      aria-hidden
      className={className}
    >
      <circle cx="18" cy="18" r="18" fill="#009B3A" />
      <path fill="#FEDF00" d="M18 7.2 30.2 18 18 28.8 5.8 18 18 7.2Z" />
      <circle cx="18" cy="18" r="6.2" fill="#002776" />
      <path
        fill="#FFF"
        d="M12.2 17.2c2.4-1.5 5.2-2.2 8.1-2.1.8 0 1.6.1 2.4.2-1.1-.5-2.4-.8-3.7-.8-2.8 0-5.3 1-7.2 2.7h.4Zm-1.3 1.6c2.5-2.1 5.7-3.3 9.1-3.3 1.1 0 2.2.1 3.2.4-.9-.3-1.9-.4-2.9-.4-3.4 0-6.5 1.2-9 3.1l-.4.2Z"
      />
    </svg>
  );
}

export function UsaFlag({ className, size = 18 }: FlagProps) {
  const clipId = useId().replace(/:/g, "");

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      aria-hidden
      className={className}
    >
      <clipPath id={clipId}>
        <circle cx="18" cy="18" r="18" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <path fill="#B22234" d="M0 0h36v36H0z" />
        <path fill="#FFF" d="M0 4h36v4H0zm0 8h36v4H0zm0 8h36v4H0zm0 8h36v4H0z" />
        <path fill="#3C3B6E" d="M0 0h16v18H0z" />
        <g fill="#FFF">
          <circle cx="2.5" cy="2.5" r="0.7" />
          <circle cx="5.5" cy="2.5" r="0.7" />
          <circle cx="8.5" cy="2.5" r="0.7" />
          <circle cx="11.5" cy="2.5" r="0.7" />
          <circle cx="14" cy="2.5" r="0.7" />
          <circle cx="4" cy="5" r="0.7" />
          <circle cx="7" cy="5" r="0.7" />
          <circle cx="10" cy="5" r="0.7" />
          <circle cx="13" cy="5" r="0.7" />
          <circle cx="2.5" cy="7.5" r="0.7" />
          <circle cx="5.5" cy="7.5" r="0.7" />
          <circle cx="8.5" cy="7.5" r="0.7" />
          <circle cx="11.5" cy="7.5" r="0.7" />
          <circle cx="14" cy="7.5" r="0.7" />
          <circle cx="4" cy="10" r="0.7" />
          <circle cx="7" cy="10" r="0.7" />
          <circle cx="10" cy="10" r="0.7" />
          <circle cx="13" cy="10" r="0.7" />
          <circle cx="2.5" cy="12.5" r="0.7" />
          <circle cx="5.5" cy="12.5" r="0.7" />
          <circle cx="8.5" cy="12.5" r="0.7" />
          <circle cx="11.5" cy="12.5" r="0.7" />
          <circle cx="14" cy="12.5" r="0.7" />
          <circle cx="4" cy="15" r="0.7" />
          <circle cx="7" cy="15" r="0.7" />
          <circle cx="10" cy="15" r="0.7" />
          <circle cx="13" cy="15" r="0.7" />
        </g>
      </g>
    </svg>
  );
}
