"use client";
import { Avatar } from "antd";
export default function Header() {
  return (
    // <div className=" flex flex-grow justify-between bg-white h-16 shadow-md">
    <div className="flex justify-between fixed top-0 left-0 w-screen h-[75px] bg-white shadow-sm pl-8 border-b-[1px] border-gray-300">
      <div className="flex items-center gap-4 text-[#00A3F4]">
        <img src="/images/Logo.png" width={70}/>
        <div className="flex flex-col text-xl">
          <div>Finance</div>
          <div>Tech</div>
        </div>
      </div>
      <div className="me-10 flex gap-4 justify-center items-center">
        <div>Уртнасан Алтанчимэг</div>
        <Avatar />
      </div>
    </div>
  );
}
