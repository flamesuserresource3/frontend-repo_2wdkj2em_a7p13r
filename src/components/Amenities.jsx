import { Leaf, Sun, Home as HomeIcon, Star } from "lucide-react";

const amenities = [
  {
    icon: HomeIcon,
    title: "Cozy Interiors",
    desc: "Wood and earthy tones with modern comforts for an inviting stay.",
  },
  {
    icon: Sun,
    title: "Sunlit Mornings",
    desc: "Wide verandas and east-facing windows bathe rooms in golden light.",
  },
  {
    icon: Leaf,
    title: "Organic Garden",
    desc: "Pick fresh herbs and greens from our pesticide-free garden beds.",
  },
  {
    icon: Star,
    title: "Stargazing Nights",
    desc: "Clear skies, zero glare. Unwind by the fire pit under the stars.",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="bg-stone-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">
            Thoughtfully designed, naturally inspired
          </h2>
          <p className="mt-3 text-stone-600">
            Every corner blends green calm with warm brown accents for a grounded, elegant experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm shadow-emerald-900/5 transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
