import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { getBreadcrumbSchema } from "@/lib/seo";

export default function Breadcrumb({ items = [] }) {
  const allItems = [{ name: "Home", item: "/" }, ...items];
  const schema = getBreadcrumbSchema(allItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center flex-wrap gap-2 text-xs uppercase tracking-widest text-[#777168]">
          <li>
            <Link
              href="/"
              className="flex items-center hover:text-[#96734F] transition-colors"
              title="Return to Home"
            >
              <Home className="w-3.5 h-3.5 mr-1" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((crumb, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-[#B49A7B]/60" />
                {isLast ? (
                  <span className="text-[#272521] font-medium" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.item}
                    className="hover:text-[#96734F] transition-colors"
                  >
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
