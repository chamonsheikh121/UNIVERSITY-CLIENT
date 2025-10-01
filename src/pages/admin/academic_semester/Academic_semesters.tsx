import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGet_all_academic_semesterQuery } from "@/redux/features/admin/academic_management.api";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const Academic_semesters = () => {
  const { data: semesters } = useGet_all_academic_semesterQuery(undefined);

  const semester_data = semesters?.data?.map(
    ({ _id, name, year, start_month, end_month, createdAt, updatedAt }) => {
      const created_isoString = new Date(createdAt);
      const updated_isoString = new Date(updatedAt);
      const creation_date_time = created_isoString.toLocaleString();
      let updating_date_time;
      if (created_isoString.getTime() === updated_isoString.getTime()) {
        updating_date_time = null;
      } else {
        updating_date_time == updated_isoString.toLocaleString();
      }
      return {
        _id,
        name,
        year,
        start_month,
        end_month,
        creation_date_time,
        updating_date_time,
      };
    }
  );

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
        {
          text: "Submenu",
          value: "Submenu",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
    },

    {
      title: "Year",
      dataIndex: "year",
    },
    {
      title: "Start Month",
      dataIndex: "start_month",
    },
    {
      title: "End Month",
      dataIndex: "end_month",
    },
    {
      title: "Created at",
      dataIndex: "creation_date_time",
    },
    {
      title: "Last update",
      dataIndex: "updating_date_time",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div>
      <Table<DataType>
        columns={columns}
        dataSource={semester_data}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};
export default Academic_semesters;
