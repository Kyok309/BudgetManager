"use client"
import MainLayout from "@/components/MainLayout";
import { Button, DatePicker, Table } from "antd";
import { PlusOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

export default function Income() {
    const onOk = (value) => {
      console.log('onOk: ', value);
    };
    return (
      <MainLayout>
        <div className="p-8 w-full h-full ">
          <div className="flex justify-between">
            <div>
            <RangePicker
              showTime={{
                format: 'HH:mm',
              }}
              format="YYYY-MM-DD HH:mm"
              onChange={(value, dateString) => {
                console.log('Selected Time: ', value);
                console.log('Formatted Selected Time: ', dateString);
              }}
              onOk={onOk}
            />
            </div>
            <Button type="primary" ghost icon={<PlusOutlined />}>
              Орлого нэмэх
            </Button>
          </div>

          <div className="mt-8">
            <Table dataSource={dataSource} columns={columns} />;
          </div>
        </div>
      </MainLayout>
    );
  }