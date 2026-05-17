import { ExternalLink } from "lucide-react";

const apps = [
  {
    name: "Kasirku",
    description: "Aplikasi kasir online untuk mengelola transaksi penjualan dan stok barang.",
    url: "https://kasirku.labkita.my.id/",
    color: "bg-primary",
  },
  {
    name: "Catatan Ibu",
    description: "Aplikasi pencatatan daftar belanja, pengeluaran, pemasukan dan hutang piutang.",
    url: "https://catatan-ibu.labkita.my.id/",
    color: "bg-accent",
  },
  {
    name: "IklanRumah",
    description: "Platform listing properti untuk jual, beli, dan sewa rumah.",
    url: "https://iklanrumah.labkita.my.id/",
    color: "bg-secondary",
  },
  {
    name: "Tools",
    description: "Kumpulan alat bantu online untuk berbagai kebutuhan.",
    url: "https://tools.labkita.my.id/",
    color: "bg-primary",
  },
];

export default function AppsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-foreground">
          Our Apps
        </h2>
        <p className="text-lg text-foreground/70 font-medium text-center mb-12 max-w-2xl mx-auto">
          Aplikasi buatan kami yang siap membantu kebutuhan Anda
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app) => (
            <a
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col border-2 border-foreground bg-background shadow-neo hover:shadow-neo-lg transition-all"
            >
              <div className={`${app.color} border-b-2 border-foreground p-6`}>
                <h3 className="text-xl font-black text-background">
                  {app.name}
                </h3>
              </div>
              <div className="p-5 flex flex-col gap-4 flex-1">
                <p className="text-foreground/70 font-medium text-sm flex-1">
                  {app.description}
                </p>
                <span className="inline-flex items-center gap-2 font-bold text-primary group-hover:underline">
                  Kunjungi
                  <ExternalLink className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}