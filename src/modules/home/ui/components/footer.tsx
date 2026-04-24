import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex border-t border-zinc-800/50 justify-between items-center font-medium p-6 bg-[#050505] text-sm text-zinc-500">
      <div className="flex items-center gap-2 text-white">
        <svg
          width="20"
          height="20"
          viewBox="0 0 116 158"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M56.7804 4.8397e-06L115.465 99.4456L115.366 99.4466L115.466 99.5452L58.2835 157.828L0.00094861 100.645L0.0996049 100.544L-3.32693e-09 100.545L56.7804 4.8397e-06Z"
            fill="currentColor"
          />
        </svg>
        <span className="font-semibold tracking-tight">ShipSpace</span>
        <span className="text-zinc-600 font-normal ml-1">
          &copy; {currentYear}
        </span>
      </div>

      <div className="flex items-center gap-6">
        <Link href="/privacy" className="hover:text-white transition-colors">
          Privacy
        </Link>
        <Link href="/terms" className="hover:text-white transition-colors">
          Terms
        </Link>
      </div>
    </footer>
  );
};
