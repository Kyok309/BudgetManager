"use client"
import { Button, Input } from 'antd';
import Link from 'next/link';
import { useContext, useEffect, useState } from "react";
import UserContext from "@/context/UserStore";
import { useRouter } from "next/navigation";
export default function Signup() {
    const { user, setUser } = useContext(UserContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const onChangeLastName = (e) => {
        setLastName(e.target.value);
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onChangePhone = (e) => {
        setPhone(e.target.value);
    }

    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const onClickSignup = async () => {
        if(password !== confirmPassword) {
            return;
        }
        if(firstName === "" || lastName === "" || email === "" || password === "" || phone === "" || confirmPassword === "") {
            return;
        }
        const userData = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
                phone,
            }),
        });
        if(userData.status !== 200) {
            return;
        }
        const userResult = await userData.json();
        setUser(userResult.user)
        console.log(userResult.user);
    }

    const router = useRouter();
    useEffect(() => {
        if (user !== null) {
            router.push("/dashboard");
        }
    }, [user, router]);
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
                        <Input className='w-[80%] mt-4' size='large' placeholder="Овог" onChange={onChangeLastName} />
                        <Input className='w-[80%] mt-4' size='large' placeholder="Нэр" onChange={onChangeFirstName} />
                        <Input className='w-[80%] mt-4' size='large' placeholder="И-Мэйл" onChange={onChangeEmail} />
                        <Input className='w-[80%] mt-4' size='large' placeholder="Утасны дугаар" onChange={onChangePhone} />
                        <Input className='w-[80%] mt-4' size='large' placeholder="Нууц үг" onChange={onChangePassword} />
                        <Input className='w-[80%] mt-4' size='large' placeholder="Нууц үг давтана уу" onChange={onChangeConfirmPassword} />
                        <Button className='w-[80%] mt-4 bg-[#1E3588]' type='primary' size='large' onClick={onClickSignup}>БҮРТГҮҮЛЭХ</Button>
                        <div className='my-4'>Аль хэдийн бүртгэлтэй юу? <Link href={"/login"} className='text-[#1E3588] underline'>Нэвтрэх</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
  }