import Image from "next/image";

export default function AlquranPage() {
  const logo = "https://webassets.labkita.my.id/blog/image/quran.png";
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-16">
        <div className="m-4 text-slate-500">
          <div className="relative mb-6 h-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src={logo}
              width={800}
              height={600}
              alt="Labkita Office"
              className="h-full object-contain mix-blend-multiply"
            />
          </div>
          <h1 className="text-2xl text-primary font-bold">
            Kebijakan Privasi Aplikasi Alquran
          </h1>
          <ul className="mt-4 list-disc space-y-4">
            <li>
              <p>
                Saat Anda menggunakan aplikasi kami, Anda mempercayai kami
                dengan informasi Anda. Karena kami sangat fokus dengan privasi
                Anda, maka Kebijakan Privasi ini dimaksudkan untuk membantu Anda
                memahami data apa yang kami kumpulkan dan mengapa kami
                memerlukannya. Ini penting; Kami harap Anda meluangkan waktu
                untuk membacanya dengan saksama. Kami akan menjelaskannya dengan
                sesederhana mungkin.
              </p>
            </li>
            <li>
              <p className="font-bold">
                Tidak Mengumpulkan Informasi Perangkat
              </p>
              <p>
                Aplikasi Al-Qur&apos;an ini tidak mengumpulkan informasi terkait
                perangkat.
              </p>
            </li>
            <li>
              <p className="font-bold">Tidak Mengumpulkan Informasi Akun</p>
              <p>
                Aplikasi Al-Qur&apos;an Indonesia ini tidak mengumpulkan informasi
                akun.
              </p>
            </li>
            <li>
              <p className="font-bold">Memerlukan Akses Internet</p>
              <p>
                Aplikasi Al-Qur&apos;an ini memerlukan akses ke internet di perangkat
                Anda, sehingga salah satu fitur bekerja dengan baik. Hal ini
                diperlukan agar Anda bisa mendownload konten alquran dari server
                kami.
              </p>
            </li>
            <li>
              <p className="font-bold">Informasi Keamanan</p>
              <p>
                Kami telah menerapkan pengamanan administratif dan teknis yang
                diyakini sangat advance untuk melindungi data dan privasi Anda.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
