import { Mail, Phone, MapPin } from "lucide-react";

export default function CTAFooter() {
  return (
    <footer id="contact" className="bg-emerald-900 text-emerald-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Ready for a green escape?</h3>
            <p className="mt-2 max-w-md text-emerald-100">
              Share your dates and group size. We’ll get back within a few hours with availability and a tailored plan.
            </p>

            <div className="mt-6 space-y-3 text-emerald-100/90">
              <p className="flex items-center gap-3"><Phone className="h-5 w-5" /> +1 (555) 102-2048</p>
              <p className="flex items-center gap-3"><Mail className="h-5 w-5" /> stays@greenhaven.farm</p>
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5" /> Oakridge Valley, Meadow County</p>
            </div>
          </div>

          <form className="rounded-2xl bg-emerald-800/60 p-6 ring-1 ring-white/10 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm">Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border-0 bg-white/90 px-4 py-2 text-emerald-950 placeholder-emerald-900/50 outline-none ring-1 ring-emerald-300 focus:ring-2 focus:ring-amber-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border-0 bg-white/90 px-4 py-2 text-emerald-950 placeholder-emerald-900/50 outline-none ring-1 ring-emerald-300 focus:ring-2 focus:ring-amber-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm">Dates</label>
                <input
                  type="text"
                  className="w-full rounded-lg border-0 bg-white/90 px-4 py-2 text-emerald-950 placeholder-emerald-900/50 outline-none ring-1 ring-emerald-300 focus:ring-2 focus:ring-amber-500"
                  placeholder="e.g. 12–15 Aug"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm">Message</label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border-0 bg-white/90 px-4 py-2 text-emerald-950 placeholder-emerald-900/50 outline-none ring-1 ring-emerald-300 focus:ring-2 focus:ring-amber-500"
                  placeholder="Tell us about your trip"
                />
              </div>
            </div>
            <button
              type="button"
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-amber-700 px-5 py-3 font-medium text-white shadow-md shadow-amber-900/20 transition hover:bg-amber-800"
              onClick={() => alert("Thanks! We'll be in touch shortly.")}
            >
              Request availability
            </button>
            <p className="mt-3 text-center text-xs text-emerald-100/80">
              We value privacy. Your details are used only to respond to your request.
            </p>
          </form>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-emerald-200/80">
          © {new Date().getFullYear()} GreenHaven Farmhouse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
