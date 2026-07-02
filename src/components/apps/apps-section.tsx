const apps = [
  {
    name: "Kita Muslim",
    description: "Jadwal shalat, arah kiblat, dan baca Al-Quran dalam satu aplikasi.",
    url: "https://muslim.labkita.my.id",
  },
  {
    name: "Winemp",
    description: "Music visualizer untuk menikmati musik dengan visualisasi yang memukau.",
    url: "https://winemp.labkita.my.id",
  },
  {
    name: "Iklan Rumah",
    description: "Platform listing properti untuk jual, beli, dan sewa rumah.",
    url: "https://iklanrumah.labkita.my.id/",
  },
  {
    name: "Mac App",
    description: "Aplikasi Mac.",
    url: "https://mac-app.labkita.my.id",
  },
  {
    name: "Tools",
    description: "Kumpulan alat bantu online untuk berbagai kebutuhan.",
    url: "https://tools.labkita.my.id/",
  },
  {
    name: "Catatan Ibu",
    description: "Aplikasi pencatatan daftar belanja, pengeluaran, pemasukan dan hutang piutang.",
    url: "https://catatan-ibu.labkita.my.id/",
  },
  {
    name: "Kasirku",
    description: "Aplikasi kasir online untuk mengelola transaksi penjualan dan stok barang.",
    url: "https://kasirku.labkita.my.id/",
  },
];

export default function AppsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Apps
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-xl">
            Aplikasi buatan kami yang siap membantu kebutuhan Anda
          </p>
        </div>
        <div className="divide-y divide-border/50">
          {apps.map((app) => (
            <a
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-6 py-5 -mx-4 px-4 rounded-lg transition-colors hover:bg-muted/40"
            >
              <div className="min-w-0">
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {app.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {app.description}
                </p>
              </div>
              <span className="shrink-0 text-muted-foreground/30 group-hover:text-primary/60 group-hover:translate-x-0.5 transition-all text-lg leading-none">
                &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
