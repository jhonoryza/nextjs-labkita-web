import { ExternalLink } from "lucide-react";

const apps = [
  {
    name: "Kita Muslim",
    description: "Jadwal shalat, arah kiblat, dan baca Al-Quran dalam satu aplikasi.",
    url: "https://muslim.labkita.my.id",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    name: "Winemp",
    description: "Music visualizer untuk menikmati musik dengan visualisasi yang memukau.",
    url: "https://winemp.labkita.my.id",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    name: "Iklan Rumah",
    description: "Platform listing properti untuk jual, beli, dan sewa rumah.",
    url: "https://iklanrumah.labkita.my.id/",
    gradient: "from-sky-500 to-blue-500",
  },
  {
    name: "Mixing",
    description: "Aplikasi mixing audio untuk kebutuhan musik dan podcast.",
    url: "https://mixing-web.labkita.my.id",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    name: "Tools",
    description: "Kumpulan alat bantu online untuk berbagai kebutuhan.",
    url: "https://tools.labkita.my.id/",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Catatan Ibu",
    description: "Aplikasi pencatatan daftar belanja, pengeluaran, pemasukan dan hutang piutang.",
    url: "https://catatan-ibu.labkita.my.id/",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Kasirku",
    description: "Aplikasi kasir online untuk mengelola transaksi penjualan dan stok barang.",
    url: "https://kasirku.labkita.my.id/",
    gradient: "from-amber-500 to-orange-500",
  },
];

export default function AppsSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Apps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aplikasi buatan kami yang siap membantu kebutuhan Anda
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app) => (
            <a
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg border bg-card hover:shadow-lg transition-all overflow-hidden"
            >
              <div className={`bg-gradient-to-br ${app.gradient} p-6`}>
                <h3 className="text-xl font-bold text-white">
                  {app.name}
                </h3>
              </div>
              <div className="p-5 flex flex-col gap-4 flex-1">
                <p className="text-muted-foreground text-sm flex-1">
                  {app.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:underline">
                  Kunjungi
                  <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}