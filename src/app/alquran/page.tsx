import Image from "next/image";

export default function AlquranPage() {
  const logo = "https://webassets.labkita.my.id/blog/image/quran.png";
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="rounded-lg border bg-card shadow-sm overflow-hidden mb-8">
          <Image
            src={logo}
            width={800}
            height={600}
            alt="Labkita Office"
            className="h-full object-contain mix-blend-multiply"
          />
        </div>
        <h1 className="text-2xl font-bold text-foreground border-b pb-3 mb-6">
          Kebijakan Privasi Aplikasi Alquran
        </h1>
        <div className="space-y-4">
          <div className="rounded-lg border bg-card p-5">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Saat Anda menggunakan aplikasi kami, Anda mempercayai kami
              dengan informasi Anda. Karena kami sangat fokus dengan privasi
              Anda, maka Kebijakan Privasi ini dimaksudkan untuk membantu Anda
              memahami data apa yang kami kumpulkan dan mengapa kami
              memerlukannya. Ini penting; Kami harap Anda meluangkan waktu
              untuk membacanya dengan saksama. Kami akan menjelaskannya dengan
              sesederhana mungkin.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="font-semibold text-foreground mb-2">Tidak Mengumpulkan Informasi Perangkat</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Aplikasi Al-Qur&apos;an ini tidak mengumpulkan informasi terkait perangkat.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="font-semibold text-foreground mb-2">Tidak Mengumpulkan Informasi Akun</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Aplikasi Al-Qur&apos;an Indonesia ini tidak mengumpulkan informasi akun.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="font-semibold text-foreground mb-2">Memerlukan Akses Internet</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Aplikasi Al-Qur&apos;an ini memerlukan akses ke internet di perangkat
              Anda, sehingga salah satu fitur bekerja dengan baik. Hal ini
              diperlukan agar Anda bisa mendownload konten alquran dari server
              kami.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="font-semibold text-foreground mb-2">Informasi Keamanan</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Kami telah menerapkan pengamanan administratif dan teknis yang
              diyakini sangat advance untuk melindungi data dan privasi Anda.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}