"use client";

import Link from "next/link";
import { useContext, useEffect } from "react";
import UserContext from "@/context/UserStore";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user, setUser } = useContext(UserContext);
    const router = useRouter();
    useEffect(() => {
        if (user !== null) {
            router.push("/dashboard");
        }
    }, [user, router]);
  return (
    <div className="bg-[#01143B]">

      {/* Header */}
      <div className="h-32 bg-gradient-to-b from-[#001438] from-60% to-[#01143B] flex justify-between px-12">
        <div className="flex items-center">
          <img src="/images/Logo.png" />
          <div className="text-white flex flex-col text-3xl">
            <div>FINANCE</div>
            <div>TECH</div>
          </div>
        </div>
        <div className="text-white text-xl flex gap-10 items-center">
          <div>Давуу тал</div>
          <div>Бидний тухай</div>
          <div>Холбогдох</div>
          <div>|</div>
          <Link href={"/login"}>Нэвтрэх</Link>
          <Link href={"/signup"}>Бүртгүүлэх</Link>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[url('/images/Background.jpg')] bg-cover h-[1200px]">
        <div className="absolute h-[1200px] min-h-full w-full bg-gradient-to-b from-[#01143B] via-[#00BEFC] to-[#001846] via-70% opacity-90 z-10"></div>
        <div className="flex flex-col h-full min-h-screen z-20 relative px-12 space-y-16">
          <div className="flex w-full">
            <div className="text-white text-6xl flex-1 flex items-center justify-center text-center font-semibold p-8 leading-normal">
              ӨРХИЙН ТӨСӨВ ТӨЛӨВЛӨЛТ
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

      {/* Footer */}
      <div className="h-full bg-gradient-to-b from-[#02183E] from-60% to-[#01143B] flex justify-between px-16 text-white justify-center">
        <div className="justify-center flex justify-between w-full">
          <div className="flex items-center pl-12">
            <img src="/images/Logo (1).png" />
            <div className="text-white flex flex-col text-3xl">
              <div>FINANCE</div>
              <div>TECH</div>
            </div>
          </div>

          <div className="flex flex-col underline py-12 text-xl gap-4">
            <div>Үйлчилгээ</div>
            <div>Нууцлалын бодлого</div>
            <div>Үйлчилгээний нөхцөл</div>
            <div>Төлбөрийн нөхцөл</div>
          </div>

          <div className="flex flex-col underline py-12 text-xl gap-4">
            <div>Төслийн тухай</div>
            <div>Төслийн танилцуулга</div>
            <div>Яагаад хэрэглэх ёстой вэ?</div>
            <div>Ямар давуу талтай вэ?</div>
            <div>Дугтуйт төсвийн арга</div>
          </div>

          <div className="flex flex-col gap-3 py-12 text-xl pr-12">
            <div>Холбогдох</div>
            <div className="flex gap-3">
              <img src="/images/instagram.png"/>
              <div>@FinanceTech</div>
            </div>
            <div className="flex gap-3">
              <img src="/images/Facebook.png"/>
              <div>Finance Tech ХХК</div>
            </div>
            <div className="flex gap-3">
              <img src="/images/phone.png"/>
              <div>+97677374755</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
