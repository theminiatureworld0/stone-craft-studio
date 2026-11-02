import Link from "next/link";
import Button from "@/components/common/Button";

export const metadata = {
  title: "Page Not Found | Stone Craft Studio",
  description: "The stone craftsmanship carving or page you are seeking could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-24 bg-[#F7F5F0]">
      <div className="max-w-xl mx-auto px-4 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#96734F] font-semibold block mb-3">
          404 &bull; Architectural Reference Missing
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#272521] font-normal tracking-tight">
          Piece Not Located
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#777168] font-light leading-relaxed">
          The stone carving, category collection, or portfolio entry you requested does not exist or may have been catalogued under a revised reference.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md">
            Return to Studio Home
          </Button>
          <Button href="/collections" variant="secondary" size="md">
            Browse All Collections
          </Button>
        </div>
      </div>
    </div>
  );
}
