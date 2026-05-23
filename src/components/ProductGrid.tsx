import Image from "next/image";

const products = [
  {
    name: "iPhone XR",
    price: "Mulai dari Rp 3.xxx.xxx",
    image: "/assets/xr.png",
  },
  {
    name: "iPhone 11",
    price: "Mulai dari Rp 5.xxx.xxx",
    image: "/assets/11.png",
  },
  {
    name: "iPhone 12",
    price: "Mulai dari Rp 7.xxx.xxx",
    image: "/assets/12.png",
  },
  {
    name: "iPhone 13",
    price: "Mulai dari Rp 9.xxx.xxx",
    image: "/assets/13.png",
  },
  {
    name: "iPhone 12 Pro",
    price: "Mulai dari Rp 7.xxx.xxx",
    image: "/assets/12-pro.png",
  },
  {
    name: "iPhone 13 Pro",
    price: "Mulai dari Rp 10.xxx.xxx",
    image: "/assets/13-pro.png",
  },
  {
    name: "iPhone 14",
    price: "Mulai dari Rp 11.xxx.xxx",
    image: "/assets/14.png",
  },
  {
    name: "iPhone 15",
    price: "Mulai dari Rp 12.xxx.xxx",
    image: "/assets/15.png",
  },
];

export default function ProductGrid() {
  return (
    <section className="py-24 bg-background" id="products">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-[32px] md:text-[48px] font-semibold text-on-surface">
              Katalog iPhone
            </h2>
            <p className="text-[17px] text-on-surface-variant max-w-xl">
              Ready stock berbagai seri dengan kondisi terbaik dan garansi
              terjamin.
            </p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar">
            <span className="px-8 py-3 bg-primary text-white rounded-full text-sm whitespace-nowrap cursor-pointer hover:shadow-lg transition-all">
              All Models
            </span>
            <span className="px-8 py-3 bg-white text-secondary rounded-full text-sm whitespace-nowrap cursor-pointer border border-secondary-container hover:bg-secondary-container/10 transition-all">
              Best Sellers
            </span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
          {products.map((product) => (
            <div
              key={product.name}
              className="product-card group bg-white rounded-[32px] p-4 md:p-8 shadow-sm hover:shadow-2xl transition-all border border-secondary-container/10"
            >
              <div className="aspect-[4/5] rounded-[24px] bg-apple-gray mb-6 flex items-center justify-center overflow-hidden relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="product-img object-contain p-4 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h4 className="font-semibold text-[18px] md:text-[22px] mb-1">
                {product.name}
              </h4>
              <p className="text-xs text-on-surface-variant mb-6">
                {product.price}
              </p>
              <a
                href="https://wa.me/628211501621"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center py-4 bg-surface-pink text-primary rounded-2xl text-sm font-bold group-hover:bg-primary group-hover:text-white transition-all"
              >
                Tanya harga
              </a>
            </div>
          ))}
        </div>

        <div id="tukar-tambah" />

        {/* Trade-In Section */}
        <div className="mt-20">
          <div className="bg-primary-container rounded-[48px] p-10 md:p-20 flex flex-col md:flex-row items-center gap-12 text-on-primary-container relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 space-y-8 md:w-1/2">
              <h3 className="text-[32px] md:text-[48px] font-semibold leading-tight">
                Tukar Tambah Spesial
              </h3>
              <p className="text-[21px]">
                Upgrade HP lama kamu ke iPhone impian dengan potongan harga
                hingga jutaan rupiah. Proses cepat, harga transparan.
              </p>
              <a
                href="https://wa.me/628211501621"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-5 bg-primary text-white rounded-full text-sm font-bold shadow-xl shadow-primary/30 hover:scale-105 transition-transform"
              >
                Mulai Trade-In Sekarang
              </a>
            </div>
            <div className="relative z-10 w-full md:w-1/2 flex justify-center">
              <div className="relative rounded-[32px] shadow-2xl w-full max-w-md aspect-[4/3] overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUYM39nos4HQSg-ztoWUD6GeHNCHvvefcqGLUfoxytwo4GYmnGSlyAvsXPVcs1H4s_s_qn0s_CjJRAKtlQU8SwmqyGilDoxTVpdnaJWpnvwwZcnyrHrltHXbUI-z-DeL7TLReiAZcRFDxJ8_Sl5W20TSlO1-DHE4BNY9UDb6miSI4TJblT9QlT3Ca0YAKWz5NcKIAhUmoYWIntjIWXGACayl6RnfnNIKPfxxsA-grekF7QS7Mu9OV69YQyw1l5T4cl9WhmGgV_JWd_"
                  alt="Tukar tambah iPhone"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
