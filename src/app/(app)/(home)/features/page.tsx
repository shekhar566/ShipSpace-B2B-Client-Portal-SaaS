import { CodeIcon, LayoutIcon, LineChartIcon } from "lucide-react";

export const metadata = {
  title: "Services | ShipSpace",
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#050505] py-24 sm:py-32 relative overflow-hidden font-sans text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl lg:text-center space-y-4">
          <h2 className="text-sm font-semibold text-blue-400 tracking-widest uppercase">
            Enterprise Architecture
          </h2>
          <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
            Everything you need to <span className="text-zinc-500">scale.</span>
          </p>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Specializing in high-performance Next.js web architecture, complex
            state management, and pixel-perfect UIs built for modern businesses.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-900/50 transition-colors">
              <dt className="flex items-center gap-x-4 text-lg font-semibold text-white mb-4">
                <div className="bg-zinc-800/50 p-2.5 rounded-xl border border-zinc-700/50 text-zinc-300">
                  <CodeIcon className="size-5" />
                </div>
                Full-Stack Engineering
              </dt>
              <dd className="flex flex-auto flex-col text-sm text-zinc-400 leading-relaxed">
                <p className="flex-auto">
                  Custom web applications built with Next.js 15, React, and
                  TypeScript. Robust logic and secure backend architectures
                  designed for massive scale.
                </p>
              </dd>
            </div>

            <div className="flex flex-col bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-900/50 transition-colors">
              <dt className="flex items-center gap-x-4 text-lg font-semibold text-white mb-4">
                <div className="bg-zinc-800/50 p-2.5 rounded-xl border border-zinc-700/50 text-zinc-300">
                  <LayoutIcon className="size-5" />
                </div>
                UI/UX Architecture
              </dt>
              <dd className="flex flex-auto flex-col text-sm text-zinc-400 leading-relaxed">
                <p className="flex-auto">
                  Pixel-perfect, stable 60fps interfaces utilizing GPU
                  acceleration. Conversion-optimized layouts that provide a
                  world-class user experience.
                </p>
              </dd>
            </div>

            <div className="flex flex-col bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-900/50 transition-colors">
              <dt className="flex items-center gap-x-4 text-lg font-semibold text-white mb-4">
                <div className="bg-zinc-800/50 p-2.5 rounded-xl border border-zinc-700/50 text-zinc-300">
                  <LineChartIcon className="size-5" />
                </div>
                Technical Consulting
              </dt>
              <dd className="flex flex-auto flex-col text-sm text-zinc-400 leading-relaxed">
                <p className="flex-auto">
                  Codebase audits focusing on logic and systems over memorized
                  patterns. Performance optimization and strategic planning for
                  your next product pivot.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
