"use client";
import MainLayout from "@/components/MainLayout";
import { Button, DatePicker, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useGetData } from "@/hooks/useGetData";

const columns = [
  {
    title: "Нэр",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Бүлэг",
    dataIndex: "group",
    key: "group",
  },
  {
    title: "Төрөл",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Төсөв",
    dataIndex: "budget",
    key: "budget",
  },
  {
    title: "Огноо",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Дүн",
    dataIndex: "amount",
    key: "amount",
  },    
];

export default function Dashboard() {
  const { budget, group, expenseCategory, incomeCategory, expense, income } = useGetData();

  const fixExpense = expense.map((item) => {
    return {
      key: item.id,
      name: item.name,
      group: group.find((group) => group.id === item.groupId)?.name,
      category: expenseCategory.find((category) => category.id === item.categoryId)?.name,
      budget: budget.find((budget) => budget.id === item.budgetId)?.name,
      date: new Date(item.date).toLocaleDateString(),
      amount: item.amount,
    };
  });

  const fixIncome = income.map((item) => {
    return {
      key: item.id,
      name: item.name,
      group: group.find((group) => group.id === item.groupId)?.name,
      category: incomeCategory.find((category) => category.id === item.categoryId)?.name,
      budget: budget.find((budget) => budget.id === item.budgetId)?.name,
      date: new Date(item.date).toLocaleDateString(),
      amount: item.amount,
    };
  }
  );

  const combinedData = [...fixExpense, ...fixIncome];
  const dataSource = combinedData.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <MainLayout>
      <div className="p-8 w-full h-full ">
        <div className="flex justify-between">

          <div>
            <h1 className="text-2xl font-bold">Нийт</h1>
          </div>
          <div></div>
        </div>

        <div className="mt-8">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </MainLayout>
  );
}
