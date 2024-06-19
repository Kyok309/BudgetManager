"use client";

import MainLayout from "@/components/MainLayout";
import { Button, DatePicker, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useGetData } from "@/hooks/useGetData";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Бүлэг",
    dataIndex: "group",
    key: "group",
  },
  {
    title: "Эхлэх огноо",
    dataIndex: "startdate",
    key: "startdate",
  },
  {
    title: "Дуусах огноо",
    dataIndex: "enddate",
    key: "enddate",
  },
  {
    title: "Т.Орлого",
    dataIndex: "planIncome",
    key: "planIncome",
  },
  {
    title: "Т.Зарлага",
    dataIndex: "planExpense",
    key: "planExpense",
  },

];

export default function Budget() {
  const router = useRouter();
  const { budget, group } = useGetData();
  const onClickAdd = () => {
    router.push("/budget/add");
  };
  const dataSource = budget.map((item) => {
    return {
      key: item.id,
      name: item.name,
      group: group.find((g) => g.id === item.groupId)?.name,
      startdate: new Date(item.startdate).toLocaleDateString(),
      enddate: new Date(item.enddate).toLocaleDateString(),
      planIncome: item.planIncome,
      planExpense: item.planExpense,
    };
  });

  return (
    <MainLayout>
      <div className="p-8 w-full h-full ">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">Төсвүүд</h1>
          </div>
          <Button
            type="primary"
            ghost
            icon={<PlusOutlined />}
            onClick={onClickAdd}
          >
            Төсөв нэмэх
          </Button>
        </div>

        <div className="mt-8">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </MainLayout>
  );
}
