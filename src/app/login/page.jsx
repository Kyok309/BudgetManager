"use client"
import { Button, Input } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function Login() {
    const router = useRouter();
    const onClickLogin = () => {
        router.push("/dashboard")
    }
    return (
        <div className="h-screen bg-gradient-to-b from-[#9A98F3] via-[#F7EFF9] to-[#E8D9EB] flex justify-center items-center">
            <div className="bg-white rounded-2xl h-[80%] w-[70%] flex relative">
                <div className="flex-1 bg-[#1E3588] rounded-s-2xl flex justify-center items-center">
                    <img src="/images/Business accounting.png"/>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                    <div className='w-full flex flex-col items-center'>
                        <div className="text-[#1E3588] text-2xl font-bold mt-8">
                            НЭВТРЭХ
                        </div>
                        <Input className='w-[80%] mt-4' size='large' placeholder="Нэвтрэх нэр" />
                        <Input className='w-[80%] mt-4' size='large' placeholder="Нууц үг" />
                        <div className='w-[80%] my-4'>
                            <Link href='#'>Нууц үгээ мартсан уу?</Link>
                        </div>
                        <Button className='w-[80%] mt-4 bg-[#1E3588]' type='primary' size='large' onClick={onClickLogin}>НЭВТРЭХ</Button>
                        <div className='my-4'>Бүртгэлгүй юу? <Link href={"/signup"} className='text-[#1E3588] underline'>энд дарж бүртгүүлнэ үү</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
  }