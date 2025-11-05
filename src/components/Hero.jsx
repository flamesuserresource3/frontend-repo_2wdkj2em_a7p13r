import { Leaf, Home as HomeIcon, MapPin } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-emerald-700 via-emerald-600 to-emerald-500 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-700 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-lime-400 blur-3xl" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 backdrop-blur">
            <Leaf className="h-6 w-6" />
          </div>
          <span className="font-semibold tracking-tight">GreenHaven Farmhouse</span>
        </div>
        <div className="hidden gap-6 md:flex">
          <a href="#amenities" className="text-white/90 transition hover:text-white">Amenities</a>
          <a href="#racing" className="text-white/90 transition hover:text-white">RC Racing</a>
          <a href="#gallery" className="text-white/90 transition hover:text-white">Gallery</a>
          <a href="#contact" className="text-white/90 transition hover:text-white">Contact</a>
        </div>
      </nav>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-8 md:grid-cols-2 md:pb-28 md:pt-10">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <HomeIcon className="h-4 w-4" />
            Rustic luxury in nature
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            A serene farmhouse retreat wrapped in green.
          </h1>
          <p className="mt-4 max-w-xl text-white/90 md:text-lg">
            Escape to a warm, earthy sanctuary surrounded by fields, trees, and morning sun. Perfect for quiet weekends, family gatherings, and slow living.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-amber-700 px-5 py-3 font-medium text-white shadow-md shadow-amber-900/20 transition hover:bg-amber-800"
            >
              Book your stay
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              View gallery
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-white/90">
            <div className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 backdrop-blur">
              <MapPin className="h-4 w-4" />
              Oakridge Valley
            </div>
            <span className="hidden h-1 w-1 rounded-full bg-white/50 sm:block" />
            <span className="hidden sm:block">2 hrs from the city</span>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-white/20">
          <Spline
            scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-900/20 via-transparent to-lime-300/10" />
        </div>
      </div>
    </header>
  );
}
