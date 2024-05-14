"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#01143B]">
      <div className="h-32 bg-gradient-to-b from-[#001438] from-60% to-[#01143B] flex justify-between px-8">
        <div className="flex items-center">
          <img src="/images/Logo.png" />
          <div className="text-white flex flex-col text-3xl">
            <div>Finance</div>
            <div>Tech</div>
          </div>
        </div>
        <div className="text-white flex gap-4 items-center">
          <div>Давуу тал</div>
          <div>Бидний тухай</div>
          <div>Холбогдох</div>
          <div>|</div>
          <Link href={"/login"}>Нэвтрэх</Link>
          <Link href={"/signup"}>Бүртгүүлэх</Link>
        </div>
      </div>

      <div className="bg-[url('/images/Background.jpg')] bg-cover">
        <div className="absolute h-[1000px] min-h-full w-full bg-gradient-to-b from-[#01143B] via-[#00BEFC] to-[#001846] via-70% opacity-90 z-10"></div>
        <div className="flex flex-col h-full min-h-screen z-20 relative px-8">
          <div className="flex w-full">
            <div className="text-white text-3xl p-8 flex-1 flex items-center justify-center text-center font-bold">
              ӨРХИЙН ТӨСӨВ <br /> ТӨЛӨВЛӨЛТ
            </div>
            <div className="text-whitep-8 flex-1 flex items-center justify-center">
              <img src="/images/Business accounting.png" />
            </div>
          </div>

          <div className="text-white flex gap-16 justify-center">
            <div className="flex flex-col justify-center items-center max-w-96">
              <img
                src="/images/Concept of data analysis and maintenance.png"
                width={300}
              />
              <div className="text-xl font-bold text-center">
                САНХҮҮГИЙН БОЛОВСРОЛЫГ <br />
                ӨРХИЙН ГИШҮҮДДЭЭ
              </div>
              <div className="text-center">
                Өрхийн орлого зарлагын тайланд тулгуурлан өрхийн төсвийг хэрхэн
                зөв төлөвлөх, мөнгөтэй хэрхэн зөв харьцахыг хүүхдүүддээ сургах
                боломжтой болно.
              </div>
            </div>

            <div className="flex flex-col justify-center items-center max-w-96">
              <img
                src="/images/Social Media users.png"
                width={300}
              />
              <div className="text-xl font-bold text-center">
                ТАНЫ ЦАГИЙГ ХЭМНЭЖ <br />
                САЙН ҮР ДҮН ӨГНӨ
              </div>
              <div className="text-center">
                Өрхийн орлого зарлагын тайланд тулгуурлан өрхийн төсвийг хэрхэн
                зөв төлөвлөх, мөнгөтэй хэрхэн зөв харьцахыг хүүхдүүддээ сургах
                боломжтой болно.
              </div>
            </div>

            <div className="flex flex-col justify-center items-center max-w-96">
              <img
                src="/images/Concept of website recovery.png"
                width={300}
              />
              <div className="text-xl font-bold text-center">
                САНХҮҮГИЙН ГЭНЭТИЙН <br />
                ХЯМРАЛД ӨРТӨХГҮЙ БОЛНО
              </div>
              <div className="text-center">
                Өрхийн орлого зарлагын тайланд тулгуурлан өрхийн төсвийг хэрхэн
                зөв төлөвлөх, мөнгөтэй хэрхэн зөв харьцахыг хүүхдүүддээ сургах
                боломжтой болно.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-64 bg-gradient-to-b from-[#001846] from-60% to-[#01143B]">
        <div></div>
      </div>
    </div>
  );
}
