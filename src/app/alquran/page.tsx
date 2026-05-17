import Image from "next/image";

export default function AlquranPage() {
  const logo = "https://webassets.labkita.my.id/blog/image/quran.png";
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-16">
        <div className="border-2 border-foreground shadow-neo overflow-hidden mb-8 bg-background">
          <Image
            src={logo}
            width={800}
            height={600}
            alt="Labkita Office"
            className="h-full object-contain mix-blend-multiply"
          />
        </div>
        <h1 className="text-2xl font-black text-foreground border-b-2 border-foreground pb-4 inline-block">
          Kebijakan Privasi Aplikasi Alquran
        </h1>
        <ul className="mt-8 space-y-6">
          <li className="border-2 border-foreground p-4 shadow-neo-sm bg-background">
            <p className="text-foreground/80 font-medium">
              Saat Anda menggunakan aplikasi kami, Anda mempercayai kami
              dengan informasi Anda. Karena kami sangat fokus dengan privasi
              Anda, maka Kebijakan Privasi ini dimaksudkan untuk membantu Anda
              memahami data apa yang kami kumpulkan dan mengapa kami
              memerlukannya. Ini penting; Kami harap Anda meluangkan waktu
              untuk membacanya dengan saksama. Kami akan menjelaskannya dengan
              sesederhana mungkin.
            </p>
          </li>
          <li className="border-2 border-foreground p-4 shadow-neo-sm bg-background">
            <p className="font-bold text-lg border-b-2 border-foreground pb-2 mb-2">
              Tidak Mengumpulkan Informasi Perangkat
            </p>
            <p className="text-foreground/80 font-medium">
              Aplikasi Al-Qur&apos;an ini tidak mengumpulkan informasi terkait perangkat.
            </p>
          </li>
          <li className="border-2 border-foreground p-4 shadow-neo-sm bg-background">
            <p className="font-bold text-lg border-b-2 border-foreground pb-2 mb-2">Tidak Mengumpulkan Informasi Akun</p>
            <p className="text-foreground/80 font-medium">
              Aplikasi Al-Qur&apos;an Indonesia ini tidak mengumpulkan informasi akun.
            </p>
          </li>
          <li className="border-2 border-foreground p-4 shadow-neo-sm bg-background">
            <p className="font-bold text-lg border-b-2 border-foreground pb-2 mb-2">Memerlukan Akses Internet</p>
            <p className="text-foreground/80 font-medium">
              Aplikasi Al-Qur&apos;an ini memerlukan akses ke internet di perangkat
              Anda, sehingga salah satu fitur bekerja dengan baik. Hal ini
              diperlukan agar Anda bisa mendownload konten alquran dari server
              kami.
            </p>
          </li>
          <li className="border-2 border-foreground p-4 shadow-neo-sm bg-background">
            <p className="font-bold text-lg border-b-2 border-foreground pb-2 mb-2">Informasi Keamanan</p>
            <p className="text-foreground/80 font-medium">
              Kami telah menerapkan pengamanan administratif dan teknis yang
              diyakini sangat advance untuk melindungi data dan privasi Anda.
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}