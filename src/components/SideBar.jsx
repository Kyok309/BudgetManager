"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, DollarSign, Wallet, WalletCards, Album, Files, LogOut  } from 'lucide-react';
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
  {
    text: "Гарах",
    icon: LogOut,
    path: "/logout",
  },
];

const SideBar = () => {
  const router = usePathname();
  return (
    <div className="fixed block top-[75px] left-0 w-250 z-50 h-full w-60 bg-[#2C41AB] shadow-md ">
      <div className="flex flex-col items-center gap-4">
        <div className={`flex flex-col items-center gap-4 mt-8`}>
          {menuItems.map((item, index) => {
            console.log(router, item.path);
            return (
              <Link
                key={index}
                href={item.path}
                className={`flex items-start gap-4 p-4 w-full ${
                  router === item.path
                    ? "bg-white text-[#2C41AB] rounded-xl"
                    : "text-white"
                }`}
              >
                <item.icon width={30} />
                <div>{item.text}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
