"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, DollarSign, Wallet, WalletCards, Album, Files, LogOut  } from 'lucide-react';
import { useContext, useEffect } from "react";
import UserContext from "@/context/UserStore";
import { useRouter } from "next/navigation";
const menuItems = [
  {
    text: "Нүүр хуудас",
    icon: Home,
    path: "/dashboard",
  },
  {
    text: "Төсөв",
    icon: DollarSign ,
    path: "/budget",
  },
  { text: "Орлого", icon: Wallet , path: "/income" },
  { text: "Зарлага", icon: WalletCards, path: "/expense" },
  {
    text: "Бүлэг",
    icon: Album,
    path: "/category",
  },
  {
    text: "Тайлан",
    icon: Files,
    path: "/report",
  },
];

const SideBar = () => {
  const { logout, user } = useContext(UserContext);
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (user === null) {
      router.push("/login");
    }
  }, [user, pathname]);

  if (user === null) return null;
  return (
    <div className="fixed block top-[75px] left-0 w-250 z-50 h-full w-60 bg-[#2C41AB] shadow-md ">
      <div className="flex flex-col items-center gap-4">
        <div className={`flex flex-col items-center gap-4 mt-8`}>
          {menuItems.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.path}
                className={`flex items-start gap-4 p-4 w-full ${
                  pathname === item.path
                    ? "bg-white text-[#2C41AB] rounded-xl"
                    : "text-white"
                }`}
              >
                <item.icon width={30} />
                <div>{item.text}</div>
              </Link>
            );
          })}

          <div
            onClick={logout}
            className={`flex items-start gap-4 p-4 w-full text-white cursor-pointer`}
          >
            <LogOut width={30} />
            <div>Гарах</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;