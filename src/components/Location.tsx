import Image from "next/image";

export default function Location() {
  return (
    <section className="py-14 md:py-24 bg-background" id="location">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 md:space-y-10">
            <h2 className="text-[26px] md:text-[48px] font-semibold text-on-surface">
              Kunjungi Store Kami
            </h2>
            <div className="space-y-5 md:space-y-8">
              <div className="flex items-start gap-4 md:gap-6 group">
                <div className="w-11 h-11 md:w-16 md:h-16 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <span className="material-symbols-outlined text-[22px] md:text-[32px]">
                    location_on
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-[16px] md:text-[20px] mb-1">Alamat</h4>
                  <p className="text-[15px] md:text-[18px] text-on-surface-variant">
                    Jl Dewi Sartika NO 31, Bandung, Jawa Barat
                  </p>
                  <p className="text-sm md:text-base text-on-surface-variant">
                    (Depan Yogya Kepatihan)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-6 group">
                <div className="w-11 h-11 md:w-16 md:h-16 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <span className="material-symbols-outlined text-[22px] md:text-[32px]">
                    schedule
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-[16px] md:text-[20px] mb-1">
                    Jam Operasional
                  </h4>
                  <p className="text-[15px] md:text-[18px] text-on-surface-variant">
                    Senin - Minggu: 10.00 - 20.00 WIB
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-6 group">
                <div className="w-11 h-11 md:w-16 md:h-16 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <span className="material-symbols-outlined text-[22px] md:text-[32px]">
                    call
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-[16px] md:text-[20px] mb-1">Hubungi Kami</h4>
                  <p className="text-[15px] md:text-[18px] text-on-surface-variant">
                    +62 821 1501 621
                  </p>
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/dir//Jl.+Kautamaan+Istri+Jl.+Dewi+Sartika+No.31,+Balonggede,+Kec.+Regol,+Kota+Bandung,+Jawa+Barat+40238/@-6.924095,107.6038046,17z/data=!4m17!1m8!3m7!1s0x2e68e626894b85dd:0x6a865f4c15060dad!2sJl.+Kautamaan+Istri+Jl.+Dewi+Sartika+No.31,+Balonggede,+Kec.+Regol,+Kota+Bandung,+Jawa+Barat+40238!3b1!8m2!3d-6.9241003!4d107.6063795!16s%2Fg%2F11xcfx_p4y!4m7!1m0!1m5!1m1!1s0x2e68e626894b85dd:0x6a865f4c15060dad!2m2!1d107.6063795!2d-6.9241003?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 md:px-10 md:py-5 bg-primary text-white rounded-full text-sm font-bold shadow-lg shadow-primary/20 items-center gap-2 md:gap-4 hover:scale-105 transition-transform"
            >
              <span className="material-symbols-outlined">directions</span>
              Buka Google Maps
            </a>
          </div>
          <div className="rounded-[32px] md:rounded-[60px] overflow-hidden h-[260px] md:h-[550px] shadow-2xl relative border-[6px] md:border-[12px] border-white group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8XFSJdtaaLbliS5q5aloSWFXoIz0wGvfHnyNpeTCqoXwAkj7tVFAEZfOWSHe0uxqZUaGkv2RiMRQ4zr-cBC0uLoI2fYRUBd3Zt0ARLS7MyJgOel_ry-u2-ydpS0_8mm11HKp-FyA8-keKuCEC2CNm11RFW7cHmg9ecGQAP3tSfZSDp5YulX6Z9tGcR7QSpCIpyCJwHsrim1mZUNZXfTtTagUuZcIi3ETo1Xi1uIjDz9IVNr0sjdYY1YSpyVYTd1Z8mgZ8cAgSIRwd"
              alt="Peta Lokasi Bandung"
              fill
              className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
