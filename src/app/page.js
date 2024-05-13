"use client"

export default function Home() {
  return (
    <div className="bg-[#01143B]">

      <div className="h-32 bg-gradient-to-b from-[#001438] from-60% to-[#01143B] flex justify-between px-8">
        <div className="flex items-center">
          <img src="/images/Logo.png"/>
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
          <div>Нэвтрэх</div>
          <div>Бүртгүүлэх</div>
        </div>
      </div>

      <div className="bg-[url('/images/Background.jpg')] bg-cover">
        <div className="absolute h-full w-full bg-gradient-to-b from-[#01143B] via-[#00BEFC] to-[#001846] via-70% opacity-90 z-10"></div>
        <div className="flex flex-col h-full min-h-screen z-20 relative px-8">
          <div className="flex w-full">
            <div className="text-white bg-red-500 p-8 flex-1 flex items-center justify-center">Өрхийн төсөв</div>
            <div className="text-white bg-green-500 p-8 flex-1 flex items-center justify-center">Picture</div>
          </div>
          <div className="text-white flex justify-around">
            <div>Element 1</div>
            <div>Element 2</div>
            <div>Element 3</div>
          </div>
        </div>
      </div>
      
      <div className="h-64 bg-gradient-to-b from-[#001846] from-60% to-[#01143B]"></div>
    </div>
  );
}
