import { useGet_all_academic_departmentQuery } from "@/redux/features/admin/academic_management.api";
import React, { useState } from "react";
import { Spin, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import date_formater from "@/utils/date_formater";
import updated_checker from "@/utils/updated_checker";
import type { TParamItems } from "@/types";

interface DataType {
  key: React.Key;
  department_name: string;
  academic_faculty: number;
  created_at: string;
  updated_at: string;
}

const Academic_Department = () => {
  const [params, setParams] = useState<TParamItems[] | undefined>(undefined);
  const {
    data: departments,
    isLoading,
    isFetching,
  } = useGet_all_academic_departmentQuery(params);
  console.log(departments);

  const department_data: DataType[] = departments?.data?.map(
    ({ _id, name, academic_faculty_id, createdAt, updatedAt }) => {
      const created_at = date_formater(createdAt);
      const updated_at = updated_checker(createdAt, updatedAt);

      return {
        key: _id,
        department_name: name,
        academic_faculty: academic_faculty_id?.name,
        created_at,
        updated_at,
      };
    }
  );

  const department_filters=departments?.data?.map((item)=>({
    text: item.name,
    value: item.name
  }))

  const columns: TableColumnsType<DataType> = [
    {
      title: "Academic Department",
      dataIndex: "department_name",
      filters: department_filters,
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) =>
        record.department_name.includes(value as string),
      width: "30%",
    },
    {
      title: "Academic Faculty",
      dataIndex: "academic_faculty",
    },
    {
      title: "Created at",
      dataIndex: "created_at",
    },
    {
      title: "Last updated at",
      dataIndex: "updated_at",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const paramItems: TParamItems[] = [];
      filters?.department_name?.forEach((item) => {
        paramItems.push({
          name: "name",
          value: item,
        });
      });

console.log(paramItems);
      setParams(paramItems);
    }
  };

  if (isLoading) {
    return (
      <div
        className="w-full min-h-screen flex items-center justify-center
    "
      >
        <Spin size="large" tip="loading..."></Spin>
      </div>
    );
  }

  return (
    <div>
      <Table<DataType>
        columns={columns}
        loading={isFetching}
        dataSource={department_data}
        onChange={onChange}
      />
    </div>
  );
};

export default Academic_Department;
