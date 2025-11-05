export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1624226742969-6ce340d8d548?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="bg-gradient-to-b from-stone-50 to-emerald-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">Gallery</h2>
          <p className="mt-3 text-stone-600">A glimpse of sunlit rooms, wooden textures, and green landscapes.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {images.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl">
              <img
                src={src}
                alt="Farmhouse scenery"
                className="h-44 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-48 md:h-56"
                loading={i < 3 ? "eager" : "lazy"}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
