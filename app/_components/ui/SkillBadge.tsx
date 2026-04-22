import Image from "next/image";

type SkillBadgeProps = {
  name: string;
  icon?: string;
  level?: "beginner" | "intermediate" | "advanced";
};

export default function SkillBadge({
  name,
  icon,
  level = "intermediate",
}: SkillBadgeProps) {
  const levelStyles = {
    beginner: "border-[#4f5f76]/40 text-[#4f5f76] bg-[#0f2862]/60",
    intermediate: "border-[#00b4d8]/50 text-[#67d9f0] bg-[#091f36]/60",
    advanced: "border-[#00b4d8]/80 text-[#a3edf8] bg-[#00b4d8]/15",
  };

  const isImageIcon = Boolean(icon && icon.startsWith("/"));

  return (
    <div
      className={`flex max-w-full items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-transform hover:scale-105 cursor-default sm:px-4 sm:py-2.5 ${levelStyles[level]}`}
    >
      {icon && isImageIcon && (
        <Image
          src={icon}
          alt={`${name} icon`}
          width={18}
          height={18}
          className="h-[18px] w-[18px] object-contain"
        />
      )}
      {icon && !isImageIcon && (
        <span className="text-base leading-none">{icon}</span>
      )}
      <span className="leading-snug break-words">{name}</span>
    </div>
  );
}
