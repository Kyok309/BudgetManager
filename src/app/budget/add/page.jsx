"use client"
import MainLayout from "@/components/MainLayout";
import { Button, DatePicker, Table, Input, Select } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useGetData } from "@/hooks/useGetData";

export default function BudgetAdd() {
    const [name, setName] = useState("");
    const [groupSelect, setGroupSelect] = useState(1);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [income, setIncome] = useState("");
    const [expense, setExpense] = useState("");
    const router = useRouter();
    const {group} = useGetData();
    const onClickBack = () => {
        router.push("/budget")
    }

    const options = group.map((item) => {
        return {
            value: item.id,
            label: item.name
        }
    })

    const onclickSubmit = async () => {
        console.log(name, groupSelect, startDate, endDate, income, expense);
        if (name === "" || startDate === "" || endDate === "" || income === "" || expense === "") {
            return;
        }
        const result = await fetch("/api/budget", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                userId: 1,
                groupId: groupSelect,
                startdate: startDate,
                enddate: endDate,
                planIncome: parseFloat(income),
                planExpense: parseFloat(expense)
            })
        })
        console.log(result);
        router.push("/budget");
    }

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeGroup = (e) => {
        setGroupSelect(e);
    }

    const onChangeStartDate = (value, dateString) => {
        setStartDate(dateString);
    }

    const onChangeEndDate = (value, dateString) => {
        setEndDate(dateString);
    }

    const onChangeIncome = (e) => {
        setIncome(e.target.value);
    }

    const onChangeExpense = (e) => {
        setExpense(e.target.value);
    }

    const onOk = (value) => {
        console.log("onOk: ", value);
    };

    return (
      <MainLayout>
        <div className="p-8 w-full h-full ">
          <div className="flex justify-between">
            <div>
                <h1 className="text-2xl font-bold">Төсөв нэмэх</h1>
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

            <div className="flex gap-8">
                <label className="text-lg w-16" htmlFor="category">Бүлэг</label>
                <Select className="w-full" id="category" options={options} defaultValue={1} onChange={onChangeGroup}/>
            </div>

            <div className="flex gap-8">
                <label className="w-16" htmlFor="name">Эхлэх огноо</label>
                <DatePicker
                    showTime
                    id="date"
                    className="w-full"
                    onChange={onChangeStartDate}
                    onOk={onOk}
                />
            </div>

            <div className="flex gap-8">
                <label className="w-16" htmlFor="name">Дуусах огноо</label>
                <DatePicker
                    showTime
                    id="date"
                    className="w-full"
                    onChange={onChangeEndDate}
                    onOk={onOk}
                />
            </div>

            <div className="flex gap-8">
                <label className="w-16" htmlFor="name">Орлого</label>
                <Input className=""  onChange={onChangeIncome}/>
            </div>

            <div className="flex gap-6">
                <label className="w-16" htmlFor="name">Зарлага</label>
                <Input className="" onChange={onChangeExpense}/>
            </div>

            <Button onClick={onclickSubmit} type="primary">Нэмэх</Button>
          </div>
        </div>
      </MainLayout>
    );
  }