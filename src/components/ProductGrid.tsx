"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    name: "iPhone XR",
    price: "Mulai dari Rp 3.099.000",
    image: "/assets/xr.png",
    pro: false,
    priceListImage: "/assets/price-list/series x.png",
  },
  {
    name: "iPhone 11",
    price: "Mulai dari Rp 3.799.000",
    image: "/assets/11.png",
    pro: false,
    priceListImage: "/assets/price-list/series 11.png",
  },
  {
    name: "iPhone 12",
    price: "Mulai dari Rp 4.399.000",
    image: "/assets/12.png",
    pro: false,
    priceListImage: "/assets/price-list/series 12.png",
  },
  {
    name: "iPhone 13",
    price: "Mulai dari Rp 5.749.000",
    image: "/assets/13.png",
    pro: false,
    priceListImage: "/assets/price-list/series 13.png",
  },
  {
    name: "iPhone 12 Pro",
    price: "Mulai dari Rp 5.799.000",
    image: "/assets/12-pro.png",
    pro: true,
    priceListImage: "/assets/price-list/series 12.png",
  },
  {
    name: "iPhone 13 Pro",
    price: "Mulai dari Rp 7.299.000",
    image: "/assets/13-pro.png",
    pro: true,
    priceListImage: "/assets/price-list/series 13.png",
  },
  {
    name: "iPhone 14",
    price: "Mulai dari Rp 6.499.000",
    image: "/assets/14.png",
    pro: false,
    priceListImage: "/assets/price-list/series 14.png",
  },
  {
    name: "iPhone 15",
    price: "Mulai dari Rp 12.xxx.xxx",
    image: "/assets/15.png",
    pro: false,
    priceListImage: null,
  },
];

type Product = (typeof products)[number];

export default function ProductGrid() {
  const [filter, setFilter] = useState<'all' | 'pro' | 'basic'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    if (product.priceListImage) setSelectedProduct(product);
  };

  const closeModal = () => setSelectedProduct(null);

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
            <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-4 py-2 text-xs md:px-8 md:py-3 md:text-sm rounded-full whitespace-nowrap cursor-pointer transition-all ${
                  filter === 'all'
                    ? 'bg-primary text-white hover:shadow-lg'
                    : 'bg-white text-secondary border border-secondary-container hover:bg-secondary-container/10'
                }`}
              >
                All Models
              </button>
              <button
                type="button"
                onClick={() => setFilter('pro')}
                className={`px-4 py-2 text-xs md:px-8 md:py-3 md:text-sm rounded-full whitespace-nowrap cursor-pointer transition-all ${
                  filter === 'pro'
                    ? 'bg-primary text-white hover:shadow-lg'
                    : 'bg-white text-secondary border border-secondary-container hover:bg-secondary-container/10'
                }`}
              >
                Pro model
              </button>
              <button
                type="button"
                onClick={() => setFilter('basic')}
                className={`px-4 py-2 text-xs md:px-8 md:py-3 md:text-sm rounded-full whitespace-nowrap cursor-pointer transition-all ${
                  filter === 'basic'
                    ? 'bg-primary text-white hover:shadow-lg'
                    : 'bg-white text-secondary border border-secondary-container hover:bg-secondary-container/10'
                }`}
              >
                Basic model
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
          {products
            .filter((product) => {
              if (filter === 'all') return true;
              if (filter === 'pro') return product.pro;
              if (filter === 'basic') return !product.pro;
              return true;
            })
            .map((product) => (
            <div
              key={product.name}
              className="flex flex-col justify-between product-card group bg-white rounded-[32px] p-4 md:p-8 shadow-sm hover:shadow-2xl transition-all border border-secondary-container/10"
            >
              <div>
                <div className="aspect-[4/5] rounded-[24px] bg-apple-gray mb-6 flex items-center justify-center overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="product-img object-contain p-4 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="eager"
                  />
                </div>
                <h4 className="font-semibold text-[18px] md:text-[22px] mb-1">
                  {product.name}
                </h4>
                <p className="text-xs text-on-surface-variant mb-2">
                  {product.price}
                </p>
                {product.priceListImage && (
                  <button
                    type="button"
                    onClick={() => openModal(product)}
                    className="text-xs text-primary underline underline-offset-2 mb-4 cursor-pointer hover:opacity-70 transition-opacity"
                  >
                    Lihat daftar harga
                  </button>
                )}
              </div>
              <a
                href="https://wa.me/628211501621"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center py-4 bg-surface-pink text-primary rounded-2xl text-sm font-bold group-hover:bg-primary group-hover:text-white transition-all"
              >
                Tanya admin
              </a>
            </div>
          ))}
        </div>

        {/* Price List Modal */}
        {selectedProduct && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div
              className="relative bg-white rounded-[32px] overflow-hidden shadow-2xl max-w-sm w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-secondary-container/10">
                <h3 className="font-semibold text-[18px]">
                  Harga {selectedProduct.name}
                </h3>
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-apple-gray hover:bg-secondary-container/30 transition-colors text-on-surface-variant text-lg font-bold"
                  aria-label="Tutup"
                >
                  ×
                </button>
              </div>
              <div className="overflow-y-auto">
                <div className="relative w-full">
                  <Image
                    src={selectedProduct.priceListImage!}
                    alt={`Price list ${selectedProduct.name}`}
                    width={760}
                    height={1080}
                    className="w-full h-auto"
                    sizes="(max-width: 640px) 100vw, 384px"
                  />
                </div>
              </div>
              <div className="px-6 py-4 border-t border-secondary-container/10">
                <a
                  href="https://wa.me/628211501621"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-4 bg-primary text-white rounded-2xl text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  Tanya admin via WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}

        <div id="tukar-tambah" />

        {/* Trade-In Section */}
        <div className="mt-20">
          <div className="bg-primary-container rounded-[32px] md:rounded-[48px] p-8 md:p-20 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-on-primary-container relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 space-y-6 md:space-y-8 md:w-1/2">
              <h3 className="text-[28px] md:text-[48px] font-semibold leading-tight">
                Tukar Tambah Spesial
              </h3>
              <p className="text-[16px] md:text-[21px]">
                Upgrade HP lama kamu ke iPhone impian dengan potongan harga
                hingga jutaan rupiah. Proses cepat, harga transparan.
              </p>
              <a
                href="https://wa.me/628211501621"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center md:inline-block px-12 py-4 md:py-5 bg-primary text-white rounded-full text-sm font-bold shadow-xl shadow-primary/30 hover:scale-105 transition-transform"
              >
                Mulai Trade-In Sekarang
              </a>
            </div>
            <div className="relative z-10 w-full md:w-1/2 flex justify-center">
              <div className="relative rounded-[24px] md:rounded-[32px] shadow-2xl w-full max-w-md aspect-[4/3] overflow-hidden">
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
