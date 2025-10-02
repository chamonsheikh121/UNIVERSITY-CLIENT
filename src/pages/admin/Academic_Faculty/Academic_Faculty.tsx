import React, { useState } from "react";
import { Button, Spin, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGet_all_academic_facultiesQuery } from "@/redux/features/admin/academic_management.api";
import date_formater from "@/utils/date_formater";
import updated_checker from "@/utils/updated_checker";
import type { TParamItems } from "@/types";

interface DataType {
  key: string;
  name: string;
  create_at: string;
  updated_at: string;
}

const Academic_Faculty = () => {
  const [params, setParams] = useState<TParamItems[] | undefined>(undefined);
  const { data: faculties, isLoading, isFetching } = useGet_all_academic_facultiesQuery(params);
  const faculties_data = faculties?.data?.map(
    ({ _id, name, createdAt, updatedAt }) => {
      const created_at = date_formater(createdAt);
      const updated_at = updated_checker(createdAt, updatedAt);
      // console.log("'created", created_at, updated_at);

      return {
        key: _id,
        name,
        created_at,
        updated_at,
      };
    }
  );

  const faculties_options = faculties?.data?.map((item) => ({
    text: item.name,
    value: item.name,
  }));
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: faculties_options,
      // filterMode: "tree",
      // filterSearch: true,
      // onFilter: (value, record) => record.name.includes(value as string),
      // width: "30%",
    },
    {
      title: "Created time",
      dataIndex: "created_at",
    },
    {
      title: "Last update time",
      dataIndex: "updated_at",
    },
    {
      title: "Actions",
      dataIndex: "x",
      render: () => <Button>Update</Button>,
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const paramItem: TParamItems[] = [];
      filters?.name?.forEach((item) => {
        paramItem.push({
          name: "name",
          value: item,
        });
      });

      setParams(paramItem);
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
        dataSource={faculties_data}
        onChange={onChange}
        loading={isFetching}
      />
    </div>
  );
};

export default Academic_Faculty;
