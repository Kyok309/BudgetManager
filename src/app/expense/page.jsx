"use client";
import MainLayout from "@/components/MainLayout";
import { Button, DatePicker, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useGetData } from "@/hooks/useGetData";
const { RangePicker } = DatePicker;

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

export default function Expense() {
  const router = useRouter();
  const { budget, group, expenseCategory, expense } = useGetData();
  const dataSource = expense.map((item) => {
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
  const onClickAdd = () => {
    router.push("/expense/add");
  };
  const onOk = (value) => {
    console.log("onOk: ", value);
  };
  return (
    <MainLayout>
      <div className="p-8 w-full h-full ">
        <div className="flex justify-between">
          <div>
            <RangePicker
              showTime={{
                format: "HH:mm",
              }}
              format="YYYY-MM-DD HH:mm"
              onChange={(value, dateString) => {
                console.log("Selected Time: ", value);
                console.log("Formatted Selected Time: ", dateString);
              }}
              onOk={onOk}
            />
          </div>
          <Button
            type="primary"
            ghost
            icon={<PlusOutlined />}
            onClick={onClickAdd}
          >
            Зарлага нэмэх
          </Button>
        </div>

        <div className="mt-8">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </MainLayout>
  );
}
