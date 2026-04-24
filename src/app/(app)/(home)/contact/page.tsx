import { MailIcon, MapPinIcon } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const metadata = {
  title: "Contact | ShipSpace",
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#050505] py-24 sm:py-32 relative overflow-hidden font-sans text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
            Let&apos;s build <br className="hidden sm:block" />
            <span className="text-zinc-500">something great.</span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-md">
            Ready to transform your digital infrastructure? Drop us a line and
            we will get back to you within 24 hours to discuss your project
            scope and architecture.
          </p>

          <dl className="mt-12 space-y-8 text-sm text-zinc-400">
            <div className="flex gap-x-4 items-center group">
              <dt className="flex-none">
                <div className="bg-zinc-800/50 p-3 rounded-xl border border-zinc-700/50 text-zinc-300 group-hover:border-zinc-500 transition-colors">
                  <MailIcon className="h-5 w-5" />
                </div>
              </dt>
              <dd>
                <a
                  className="hover:text-white font-medium transition-colors text-base"
                  href="mailto:hello@shipspace.com"
                >
                  hello@shipspace.com
                </a>
              </dd>
            </div>
            <div className="flex gap-x-4 items-center">
              <dt className="flex-none">
                <div className="bg-zinc-800/50 p-3 rounded-xl border border-zinc-700/50 text-zinc-300">
                  <MapPinIcon className="h-5 w-5" />
                </div>
              </dt>
              <dd className="font-medium text-white text-base">
                Bengaluru, India
                <br />
                <span className="text-zinc-500 font-normal text-sm">
                  Remote Worldwide
                </span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="bg-zinc-900/30 p-8 sm:p-10 rounded-3xl border border-zinc-800/50 backdrop-blur-sm shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none" />

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
