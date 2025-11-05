import { Rocket, Car, Trophy, Calendar, Clock } from "lucide-react";

export default function RacingLaunch() {
  const features = [
    {
      icon: Car,
      title: "Pro-Grade Track",
      desc: "A compact, technical layout with hairpins, chicanes, and high-speed straights.",
    },
    {
      icon: Trophy,
      title: "Time Attack & Heats",
      desc: "Compete in timed laps or head-to-head heats across multiple classes.",
    },
    {
      icon: Calendar,
      title: "Weekend Meets",
      desc: "Every Saturday 4–7 PM this season. Beginner friendly with rental kits.",
    },
    {
      icon: Clock,
      title: "Live Leaderboard",
      desc: "Track your best laps with real-time timing and session replays.",
    },
  ];

  return (
    <section id="racing" className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-emerald-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 ring-1 ring-emerald-300/60">
            <Rocket className="h-4 w-4" /> New Launch
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">
            RC Car Racing at GreenHaven
          </h2>
          <p className="mt-3 text-stone-600">
            Experience the thrill of miniature motorsport set against our rustic, nature-rich backdrop. Race, relax, and
            recharge—perfect for families, friends, and hobbyists.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm shadow-emerald-900/5 transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900">{f.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-2xl ring-1 ring-stone-200">
              <img
                src="https://images.unsplash.com/photo-1549666424-8f1021f36b86?q=80&w=1600&auto=format&fit=crop"
                alt="RC cars racing on a track"
                className="h-72 w-full object-cover md:h-80"
                loading="lazy"
              />
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-stone-200">
            <h4 className="text-xl font-semibold text-emerald-900">Launch Weekend Special</h4>
            <p className="mt-2 text-stone-600">
              Free practice session with every booking. Limited rental kits available—first come, first served.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-stone-700">
              <li className="flex items-center gap-2"><Calendar className="h-4 w-4 text-emerald-700" /> Saturdays & Sundays</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-emerald-700" /> 4:00 PM – 7:00 PM</li>
            </ul>
            <a
              href="#contact"
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-amber-700 px-5 py-3 font-medium text-white shadow-md shadow-amber-900/20 transition hover:bg-amber-800"
            >
              Reserve a slot
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-amber-700/20 blur-3xl" />
        <div className="absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>
    </section>
  );
}
