import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiTiktok, SiShopee } from "react-icons/si";
import type { IconType } from "react-icons";

const platforms: {
  name: string;
  desc: string;
  action: string;
  bgColor: string;
  iconColor: string;
  Icon: IconType;
  href: string;
}[] = [
  {
    name: "WhatsApp",
    desc: "Chat Admin Personal",
    action: "Hubungi",
    bgColor: "bg-[#25D366]/10",
    iconColor: "#25D366",
    Icon: FaWhatsapp,
    href: "https://wa.me/628211501621?text=Halo%20Ruang%20PinkPhone%2C%20saya%20ingin%20bertanya%20tentang%20produk%20dan%20promo%20terbaru.%20Terima%20kasih!",
  },
  {
    name: "Instagram",
    desc: "Update Stok & Promo Harian",
    action: "Lihat",
    bgColor: "bg-pink-50",
    iconColor: "#E1306C",
    Icon: FaInstagram,
    href: "https://www.instagram.com/ruangpinkphone",
  },
  {
    name: "TikTok",
    desc: "Konten Unboxing & Review Jujur",
    action: "Tonton",
    bgColor: "bg-black/5",
    iconColor: "#010101",
    Icon: SiTiktok,
    href: "https://www.tiktok.com/@ruangpinkphone",
  },
  {
    name: "Shopee",
    desc: "Belanja Aman & Terpercaya",
    action: "Beli",
    bgColor: "bg-[#ee4d2d]/10",
    iconColor: "#EE4D2D",
    Icon: SiShopee,
    href: "https://shopee.co.id/ruangadget.bdg",
  },
];

export default function Socials() {
  return (
    <section className="py-24 bg-surface-pink/20">
      <div className="container mx-auto px-4 md:px-10 text-center">
        <div className="space-y-6 mb-16">
          <h3 className="text-[32px] md:text-[40px] font-semibold text-on-surface relative inline-block">
            Temukan Kami di Platform Lain
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-2 bg-primary/30 rounded-full" />
          </h3>
          <p className="text-[17px] text-on-surface-variant">
            Update harian stok dan promo terbaru lewat social media kami.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-10 rounded-[48px] shadow-sm hover:shadow-2xl transition-all border border-secondary-container/10 flex flex-col items-center gap-6 group cursor-pointer"
            >
              <div
                className={`w-20 h-20 ${p.bgColor} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <p.Icon size={40} color={p.iconColor} />
              </div>
              <div>
                <span className="block font-bold text-[20px] text-on-surface">
                  {p.name}
                </span>
                <p className="text-[14px] text-on-surface-variant">{p.desc}</p>
              </div>
              <span className="mt-4 text-primary font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                {p.action}{" "}
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
