type LogoProps = {
  variant?: "steam" | "badge" | "dot";
  size?: number;
  className?: string;
};

function LogoSteam({ size, className }: Omit<LogoProps, "variant">) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M16 7C16.8 10.2 17.6 11.8 18.5 9.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M22 5.5C22.8 8.7 23.6 10.3 24.5 7.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M28 7C28.8 10.2 29.6 11.8 30.5 9.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M11 14V34C11 35.1 11.9 36 13 36H29C30.1 36 31 35.1 31 34V14C31 12.9 30.1 12 29 12H13C11.9 12 11 12.9 11 14Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M31 18.5C35.5 18.5 35.5 27.5 31 27.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M14 18H26" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M14 24H24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M14 30H26" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M14 14V34"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LogoBadge({ size, className }: Omit<LogoProps, "variant">) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2" />
      <path
        d="M18 30C18 30 20 18 24 18C28 18 30 30 30 30"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.28"
      />
      <path
        d="M30 22C33 22 33 28 30 28"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.28"
      />
      <path d="M17 19H31" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M17 24H29" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M17 29H31" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M17 19V29" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function LogoDot({ size, className }: Omit<LogoProps, "variant">) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d="M12 14H30" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M12 24H28" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M12 34H26" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M12 14V34" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path
        d="M30 30C30 27.2 31.8 25 34 25C36.2 25 38 27.2 38 30C38 32.8 36.2 35 34 35C31.8 35 30 32.8 30 30Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M38 30C40.5 30 40.5 34 38 34"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M32 22.5C32.6 24.2 33.2 25 34 23.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M35 21.5C35.6 23.2 36.2 24 37 22.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}

export function Logo({ variant = "steam", size = 32, className }: LogoProps) {
  switch (variant) {
    case "badge":
      return <LogoBadge size={size} className={className} />;
    case "dot":
      return <LogoDot size={size} className={className} />;
    default:
      return <LogoSteam size={size} className={className} />;
  }
}

export type LogoVariant = NonNullable<LogoProps["variant"]>;

/** Opção ativa no site — troque para "badge" ou "dot" para testar as outras. */
export const ACTIVE_LOGO_VARIANT: LogoVariant = "steam";
