"use client"
import { Button, Input } from 'antd';
import Link from 'next/link';
export default function Signup() {
    return (
        <div className="h-screen bg-gradient-to-b from-[#9A98F3] via-[#F7EFF9] to-[#E8D9EB] flex justify-center items-center">
            <div className="bg-white rounded-2xl h-[80%] w-[70%] flex relative">
                <div className="flex-1 bg-[#1E3588] rounded-s-2xl flex justify-center items-center">
                    <img src="/images/Business accounting.png"/>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                    <div className='w-full flex flex-col items-center'>
                        <div className="text-[#1E3588] text-2xl font-bold mt-8">
                            БҮРТГҮҮЛЭХ
                        </div>
                        <Input className='w-[80%] mt-4' size='large' placeholder="Овог" />
                        <Input className='w-[80%] mt-4' size='large' placeholder="Нэр" />
                        <Input className='w-[80%] mt-4' size='large' placeholder="И-Мэйл" />
                        <Input className='w-[80%] mt-4' size='large' placeholder="Утасны дугаар" />
                        <Input className='w-[80%] mt-4' size='large' placeholder="Нууц үг" />
                        <Input className='w-[80%] mt-4' size='large' placeholder="Нууц үг давтана уу" />
                        <Button className='w-[80%] mt-4 bg-[#1E3588]' type='primary' size='large'>БҮРТГҮҮЛЭХ</Button>
                        <div className='my-4'>Аль хэдийн бүртгэлтэй юу? <Link href={"/login"} className='text-[#1E3588] underline'>Нэвтрэх</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
  }