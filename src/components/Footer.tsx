export default function Footer() {
  return (
    <footer className="bg-surface-container-low pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <span className="text-[28px] text-primary font-bold">
              Ruang PinkPhone
            </span>
            <p className="text-xs text-on-surface-variant leading-relaxed max-w-xs">
              Toko iPhone terpercaya di Bandung dengan kualitas unit pilihan dan
              pelayanan terbaik sejak 2025. Gadget Impian.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-[18px] mb-6">Navigasi</h4>
              <ul className="space-y-4 text-on-surface-variant text-xs">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-primary transition-colors"
                  >
                    Katalog iPhone
                  </a>
                </li>
                <li>
                  <a
                    href="#location"
                    className="hover:text-primary transition-colors"
                  >
                    Lokasi Toko
                  </a>
                </li>
                <li>
                  <a href="#testimoni" className="hover:text-primary transition-colors">
                    Testimoni
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[18px] mb-6">Layanan</h4>
              <ul className="space-y-4 text-on-surface-variant text-xs">
                <li>
                  <a href="#tukar-tambah" className="hover:text-primary transition-colors">
                    Tukar Tambah
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Cicilan 0%
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Bantuan Konsumen
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-secondary-container/30 text-center">
          <p className="text-xs text-on-surface-variant">
            © 2026 ruangpinkphone Bandung. All rights reserved. Premium iPhones.
            Trusted electronics retailer in West Java.
          </p>
        </div>
      </div>
    </footer>
  );
}
