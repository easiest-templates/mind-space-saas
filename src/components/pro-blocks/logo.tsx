interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <svg
      width="135"
      height="36"
      viewBox="0 0 135 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-foreground w-[120px] h-[32px] md:w-[135px] md:h-[36px]"
    >
      {/* Icon - checkmark in circle */}
      <circle cx="18" cy="18" r="16" fill="#3B82F6" />
      <path
        d="M12 18L16 22L24 14"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Text - TaskFlow */}
      <text
        x="42"
        y="24"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="18"
        fontWeight="600"
      >
        TaskFlow
      </text>
    </svg>
  );
};
