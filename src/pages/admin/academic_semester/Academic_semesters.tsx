import React, { useState } from "react";
import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGet_all_academic_semesterQuery } from "@/redux/features/admin/academic_management.api";
import type { TParamItems, TSemester } from "@/types";

type TSemester_Data_type = Pick<
  TSemester,
  "name" | "year" | "end_month" | "start_month"
> & { creation_date_time: string; updating_date_time: string; key: string };

const Academic_semesters = () => {
  const [params, setParams] = useState<TParamItems[] | undefined>(undefined);

  const { data: semesters } = useGet_all_academic_semesterQuery(params);

  const semester_data = semesters?.data?.map(
    ({ _id, name, year, start_month, end_month, createdAt, updatedAt }) => {
      const created_isoString = new Date(createdAt);
      const updated_isoString = new Date(updatedAt);
      const creation_date_time = created_isoString.toLocaleString();
      let updating_date_time = "";
      // console.log(created_isoString.getTime() === updated_isoString.getTime());
      if (
        (created_isoString.getTime() === updated_isoString.getTime()) ==
        false
      ) {
        updating_date_time = updated_isoString.toLocaleString();
      }
      return {
        key: _id,
        name,
        year,
        start_month,
        end_month,
        creation_date_time,
        updating_date_time,
      };
    }
  );

  const columns: TableColumnsType<TSemester_Data_type> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Fall",
          value: "Fall",
        },
      ],
    },

    {
      title: "Year",
      dataIndex: "year",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "2020",
          value: "2020",
        },
        {
          text: "2021",
          value: "2021",
        },
        {
          text: "2022",
          value: "2022",
        },
        {
          text: "2023",
          value: "2023",
        },
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2027",
          value: "2027",
        },
      ],
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
    {
      title: "Action",
      render:()=>{
       return <div><Button>Update</Button></div>
      }
    },
  ];

  const onChange: TableProps<TSemester_Data_type>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action == "filter") {
      const paramItems: TParamItems[] = [];
      filters?.name?.forEach((item) => {
        paramItems.push({ name: "name", value: item });
      });
      filters?.year?.forEach((item) => {
        paramItems.push({ name: "year", value: item });
      });
      setParams(paramItems);
    }
  };
  return (
    <div>
      <Table<TSemester_Data_type>
        columns={columns}
        dataSource={semester_data}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};
export default Academic_semesters;
