import Image from "next/image";

const testimonials = [
  { src: "/assets/testimoni/testimoni-1.jpeg", desc: "iPhone 13 White Inter" },
  { src: "/assets/testimoni/testimoni-2.jpeg", desc: "iPhone 12 Purple iBox" },
  { src: "/assets/testimoni/testimoni-3.jpeg", desc: "iPhone 13 Pro Blue Inter" },
  { src: "/assets/testimoni/testimoni-4.jpeg", desc: "iPhone 12 White iBox" },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#fafafa] overflow-hidden" id="testimoni">
      <div className="container mx-auto px-4 md:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Testimoni</p>
          <h2 className="text-[32px] md:text-[44px] font-bold text-on-surface leading-tight">
            Dipercaya Banyak Pelanggan
          </h2>
          <p className="mt-4 text-on-surface-variant text-base max-w-md mx-auto">
            Kepuasan pelanggan adalah prioritas kami.
          </p>
        </div>

        {/* Cards */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-5 pb-6 px-1 md:grid md:grid-cols-4 md:overflow-visible">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-none w-[72vw] md:w-auto snap-center group relative rounded-3xl overflow-hidden aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Image
                src={t.src}
                alt={`Foto testimoni ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 72vw, 25vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <span
                      key={j}
                      className="material-symbols-outlined text-yellow-400 text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-white text-sm font-medium leading-snug">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots — mobile only */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full bg-primary transition-all ${i === 0 ? "w-6" : "w-1.5 opacity-30"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
