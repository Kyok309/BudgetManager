"use client"
import MainLayout from "@/components/MainLayout";
import { Button, DatePicker, Table, Input, Select } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Income() {
    const [name, setName] = useState("");
    const router = useRouter();
    const onClickBack = () => {
        router.push("/category")
    }

    const onclickSubmit = async () => {
        if (name === "") {
            return;
        }
        const result = await fetch("/api/group", {
            method: "POST",
            body: JSON.stringify({
                name: name,
            })
        })
        console.log(result);
        router.push("/category");
    }

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    return (
      <MainLayout>
        <div className="p-8 w-full h-full ">
          <div className="flex justify-between">
            <div>
                <h1 className="text-2xl font-bold">Бүлэг нэмэх</h1>
            </div>
            <Button type="primary" ghost icon={<PlusOutlined />} onClick={onClickBack}>
              Буцах
            </Button>
          </div>

          <div className="mt-8 mx-[20%] flex flex-col gap-4">

            <div className="flex gap-8">
                <label className="text-lg w-16" htmlFor="name">Нэр</label>
                <Input className="" id="name" onChange={onChangeName}/>
            </div>

            <Button onClick={onclickSubmit} type="primary">Нэмэх</Button>
          </div>
        </div>
      </MainLayout>
    );
  }