import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ffe6ee_0%,transparent_50%)] opacity-60" />
      <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 order-2 md:order-1">
          <div className="inline-flex items-center px-4 py-2 bg-primary-container text-on-primary-container rounded-full gap-2">
            <span className="material-symbols-outlined text-[20px]">
              auto_awesome
            </span>
            <span className="text-sm font-bold">
              Trusted iPhone store tanpa drama di Kota Bandung
            </span>
          </div>
          <h1 className="text-[40px] md:text-[64px] font-semibold text-on-surface leading-tight tracking-tight">
            iPhone Original,{" "}
            <br />
            <span className="text-primary">Stylish &amp; Terpercaya</span>
          </h1>
          <p className="text-[21px] text-on-surface-variant max-w-lg leading-relaxed">
            Bisa kredit tanpa DP, bunga 0%, tukar tambah dan tersedia berbagai
            pilihan iPhone terbaru dengan kualitas terbaik di Bandung.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <a
              href="#products"
              className="px-6 py-3 md:px-10 md:py-5 bg-primary text-white rounded-full text-xs md:text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
            >
              Cek Katalog
            </a>
            <a
              href="https://wa.me/628211501621"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 md:px-10 md:py-5 bg-white border-2 border-primary-container text-primary rounded-full text-xs md:text-sm font-bold hover:bg-primary-container/20 transition-all flex items-center gap-2"
            >
              Konsultasi WA
            </a>
          </div>
        </div>
        <div className="relative order-2">
          <div className="w-full aspect-square rounded-[60px] overflow-hidden shadow-2xl relative">
            <Image
              src="/assets/hero.png"
              alt="cutie girl with pink"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 448px) 100vw, (max-width: 448px) 50vw, 33vw"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary-container/40 blur-[100px] rounded-full" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-container/40 blur-[80px] rounded-full" />
        </div>
      </div>
    </section>
  );
}
