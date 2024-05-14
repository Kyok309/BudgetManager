"use client";

import MainLayout from "@/components/MainLayout";
import { Button, DatePicker, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useGetData } from "@/hooks/useGetData";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
];

export default function Category() {
  const router = useRouter();
  const {group} = useGetData();
  console.log("data", group);
  const tableData = group;
  const onClickAdd = () => {
    router.push("/category/add");
  };

  return (
    <MainLayout>
      <div className="p-8 w-full h-full ">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">Миний Бүлгүүд</h1>
          </div>
          <Button
            type="primary"
            ghost
            icon={<PlusOutlined />}
            onClick={onClickAdd}
          >
            Бүлэг нэмэх
          </Button>
        </div>

        <div className="mt-8">
          <Table dataSource={group} columns={columns} />
        </div>
      </div>
    </MainLayout>
  );
}
