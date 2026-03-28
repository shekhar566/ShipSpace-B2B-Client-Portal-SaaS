import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-200 mt-auto">
      <div className="max-w-(--breakpoint-xl) mx-auto px-4 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2 text-neutral-900">
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
          <span className="font-semibold tracking-tight text-lg">
            ShipSpace
          </span>
        </div>

        {/* Legal & Support Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-neutral-500">
          <Link
            href="/privacy"
            className="hover:text-neutral-900 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-neutral-900 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/contact"
            className="hover:text-neutral-900 transition-colors"
          >
            Client Support
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-neutral-400 font-medium">
          &copy; {currentYear} ShipSpace, LLC.
        </div>
      </div>
    </footer>
  );
};
