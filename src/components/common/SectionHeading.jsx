export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-2xl mb-8 sm:mb-10 ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide mb-2.5 ${
            dark
              ? "bg-white/10 text-[#E5B582] border border-white/15"
              : "bg-[#F4ECE1] text-[#7A5228] border border-[#E2D7C7]"
          }`}
        >
          <span>✦</span>
          <span>{eyebrow}</span>
        </div>
      )}
      {title && (
        <h2
          className={`font-serif text-xl sm:text-2xl md:text-3xl font-normal tracking-normal leading-snug ${
            dark ? "text-white" : "text-[#26201B]"
          }`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`mt-2.5 text-xs sm:text-sm leading-relaxed font-light ${
            dark ? "text-white/75" : "text-[#6E645A]"
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-3.5 h-[1.5px] w-10 ${
          dark ? "bg-[#9E6F39]" : "bg-[#9E6F39]"
        } ${isCenter ? "mx-auto" : "mr-auto"}`}
      />
    </div>
  );
}
