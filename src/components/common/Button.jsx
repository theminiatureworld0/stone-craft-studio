import Link from "next/link";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  target,
  rel,
  disabled = false,
  icon: Icon,
  iconPosition = "right",
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium tracking-normal transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-lg cursor-pointer";

  const sizeStyles = {
    xs: "px-3 py-1.5 text-xs gap-1.5",
    sm: "px-3.5 py-2 text-xs font-medium gap-2",
    md: "px-5 py-2.5 text-xs sm:text-sm font-medium gap-2.5",
    lg: "px-6 py-3 text-sm sm:text-base font-medium gap-3 shadow-sm",
  };

  const variantStyles = {
    primary: "bg-[#9E6F39] hover:bg-[#825828] text-white shadow-sm hover:shadow focus-visible:ring-[#9E6F39] active:translate-y-[1px]",
    ink: "bg-[#26201B] hover:bg-[#3D332B] text-white shadow-sm focus-visible:ring-[#26201B] active:translate-y-[1px]",
    secondary: "bg-[#FAF7F2] border border-[#D5C9B7] text-[#26201B] hover:bg-[#F3EADE] hover:border-[#BFAF9B] focus-visible:ring-[#9E6F39] active:translate-y-[1px]",
    outline: "bg-transparent border border-[#9E6F39] text-[#9E6F39] hover:bg-[#9E6F39] hover:text-white focus-visible:ring-[#9E6F39]",
    ghost: "bg-transparent text-[#26201B] hover:text-[#9E6F39] hover:bg-[#F4ECE1]/70",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#1EBE5D] shadow-sm hover:shadow focus-visible:ring-[#25D366] active:translate-y-[1px]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4 flex-shrink-0" />}
      <span className="leading-tight">{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4 flex-shrink-0" />}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("https") || href.startsWith("wa.me") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          className={combinedClasses}
          {...props}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
