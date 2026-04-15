type SectionTitleProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  label,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center sm:mb-16">
      <span className="mb-4 inline-block rounded-full border border-[#00b4d8]/40 bg-[#091f36] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#67d9f0] sm:text-xs">
        {label}
      </span>
      <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-[#eeeeee] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
