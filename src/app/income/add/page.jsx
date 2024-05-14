"use client"
import MainLayout from "@/components/MainLayout";
import { Button, DatePicker, Table, Input, Select } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useGetData } from "@/hooks/useGetData";

export default function IncomeAdd() {
  const { budget, group, incomeCategory } = useGetData();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState(1);
  const [groupSelected, setGroupSelected] = useState(1);
  const [budgetSelected, setBudgetSelected] = useState(1);
  const [amount, setAmount] = useState(0);

  const optionsIncome = incomeCategory.map((item) => {
    return {
      value: item.id,
      label: item.name
    }
  });

  const optionsGroup = group.map((item) => {
    return {
      value: item.id,
      label: item.name
    }
  });

  const optionsBudget = budget.map((item) => {
    return {
      value: item.id,
      label: item.name
    }
  });

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeDate = (date, dateString) => {
    setDate(dateString);
  }

  const onChangeCategory = (value) => {
    setCategory(value);
  }

  const onChangeGroup = (value) => {
    setGroupSelected(value);
  }

  const onChangeBudget = (value) => {
    setBudgetSelected(value);
  }

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  }

    const router = useRouter();
    const onClickBack = () => {
        router.push("/income")
    }

    const onClickAdd = () => {
      console.log(name, date, category, groupSelected, budgetSelected, amount);
      if(name === "" || date === "" || category === "" || groupSelected === "" || budgetSelected === "" || amount === ""){
        return;
      }
      fetch("/api/income", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          date: date,
          categoryId: category,
          groupId: groupSelected,
          budgetId: budgetSelected,
          userId: 1,
          amount: parseFloat(amount)
        })
      })

      router.push("/income")
    }

    const onOk = (value) => {
        console.log("onOk: ", value);
    };
    
    return (
      <MainLayout>
        <div className="p-8 w-full h-full ">
          <div className="flex justify-between">
            <div>
                <h1 className="text-2xl font-bold">Орлого нэмэх</h1>
            </div>
            <Button type="primary" ghost icon={<PlusOutlined />} onClick={onClickBack}>
              Буцах
            </Button>
          </div>

          <div className="mt-8 mx-[20%] flex flex-col gap-4">

            <div className="flex gap-8">
                <label className="text-lg w-16" htmlFor="name">Нэр</label>
                <Input className="" id="name" onChange={onChangeName} value={name}/>
            </div>

            <div className="flex gap-8">
                <label className="text-lg w-16" htmlFor="date">Огноо</label>
                <DatePicker
                    showTime
                    id="date"
                    className="w-full"
                    onChange={onChangeDate}
                    onOk={onOk}
                />
            </div>

            <div className="flex gap-8">
                <label className="text-lg w-16" htmlFor="category">Бүлэг</label>
                <Select className="w-full" id="category" options={optionsIncome} defaultValue={category} onChange={onChangeCategory}/>
            </div>

            <div className="flex gap-8">
                <label className="text-lg w-16" htmlFor="name">Төсөв</label>
                <Select className="w-full" options={optionsBudget} defaultValue={groupSelected} onChange={onChangeGroup}/>
            </div>

            <div className="flex gap-8">
                <label className="text-lg w-16" htmlFor="name">Төрөл</label>
                <Select className="w-full" options={optionsGroup} defaultValue={budgetSelected} onChange={onChangeBudget}/>
            </div>

            <div className="flex gap-8">
                <label className="text-lg w-16" htmlFor="name">Дүн</label>
                <Input className="w-full" onChange={onChangeAmount} value={amount}/>
            </div>
            <Button onClick={onClickAdd} type="primary">Нэмэх</Button>
          </div>
        </div>
      </MainLayout>
    );
  }