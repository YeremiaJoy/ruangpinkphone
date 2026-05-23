import Image from "next/image";

const testimonials = [
  {
    quote:
      "Pelayanan ramah banget, adminnya sabar ngejelasin detail. iPhone-nya mulus parah, berasa beli baru!",
    name: "Sarah A.",
    role: "Pembeli iPhone 13",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABBcHrZsI5b86nCvtNEbIVzEoFnM8rZSS3FiaGtOXQlEOV4ICNc7cFWhG7oz5RsD2V2JGNlM0MfztXGZAFStWeougbetavVpoJ0tGCfzzW1F-ruF587c51OIxuHO4ddMWlQFwH78bk2oVrfXBtBNTl44hMUQpUxujbff8MyCJ6w0cKp4WLslh5vUcLHuuRoVTuyHPs9XyTUCeq7JDOnS8VnpZ44D_bHxgEOwcts4dzJzjXpDjLnELBXHJrkoq1oyTbq3GrjViNWqk2",
    bg: "bg-surface-container-low",
  },
  {
    quote:
      "Store paling estetik di Bandung. Harganya kompetitif banget dibanding toko sebelah. Top pokoknya!",
    name: "Rizky F.",
    role: "Pembeli iPhone 15 Pro",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAob4bHFA_UA9WitvkrJiHVFG5kmf4FvzgylK-v3Zkt6ckSY5hlm_Vw_DT6YMJkezqkAhK8-uESwhU1bI1-koMW3aB4harYsQKexkEz9n2mpSw1FDn9RAyk5itngU8cOP7VLBLXt-znq21xKMJEK4gM70Se-l_WXyTxFocOMdLmO-pRokruGjmkB_5ww8n3spRnl_zl9KblMfyJqSh26rSMUgHdcqfxV1P4f2cTInkkBqRubcVvILIln2g1lwEtQ0vX06FPDLj8wJs7",
    bg: "bg-surface-pink/30",
  },
  {
    quote:
      "Beli lewat Shopee prosesnya cepet, packing aman banget sampe luar pulau. Jangan ragu belanja di sini.",
    name: "Dina M.",
    role: "Online Customer",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjZ8_8ZakRiOBCmGu-1biLnwY-Nw3ZeAqd6YKihs8wD2A4xhVgXYUUKyasPG3ORJlqd0ZVDgz7kKXsozs8RhxtQDfkQZjlZVkx9Ro3r8oLrAfEUoMEPNZiMzQdx98TAq1umndcBlErew8IEp_2d1PIp8q7CQVeUaf_DlI6gyvedNx-oPOcoaQFFfXB6jVipaJ-4psLa2FHx5P05fYqOL1CGsZbEazJbUr4zUiY3wEPUq43O6OInvSzkPFXutqJ-6H1RAB_IpeWi0PG",
    bg: "bg-surface-container-low",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="testimoni">
      <div className="container mx-auto px-4 md:px-10">
        <h2 className="text-[32px] md:text-[40px] font-semibold text-center mb-20 text-on-surface">
          Apa Kata Mereka?
        </h2>
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 pb-12 px-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`${t.bg} p-8 rounded-[40px] space-y-6 flex-none w-[85vw] md:w-[400px] snap-center hover:shadow-lg transition-shadow border border-secondary-container/10`}
            >
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[20px]"
                    style={{
                      fontVariationSettings: "'FILL' 1, 'wght' 400",
                    }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="italic text-[18px] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-secondary-container/20">
                <div className="w-14 h-14 rounded-full bg-primary-container overflow-hidden relative">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="font-bold text-[16px]">{t.name}</p>
                  <p className="text-xs text-on-surface-variant">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3 mt-8">
          <span className="w-12 h-2 rounded-full bg-primary" />
          <span className="w-2 h-2 rounded-full bg-primary/20" />
          <span className="w-2 h-2 rounded-full bg-primary/20" />
        </div>
      </div>
    </section>
  );
}
