import React, { useState } from "react";
import { Avatar, Button, Spin, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import type { TParamItems } from "@/types";
import { useGet_all_studentQuery } from "@/redux/features/admin/user_management.api";
import date_formater from "@/utils/date_formater";
import updated_checker from "@/utils/updated_checker";
import table_filter_generator from "@/utils/table_filter_gernerator";

type TStudent_Data_type = {
  _id: string;
  id: string;
  gender: "male" | "female" | string;
  email: string;
  name: string;
  contactNo: string;
  bloodGroup: string;
  profileImage?: string;
  createdAt: Date;
  updatedAt: Date;
};

const Students = () => {
  const [params, setParams] = useState<TParamItems[] | undefined>(undefined);
  const {
    data: students,
    isLoading,
    isFetching,
  } = useGet_all_studentQuery(params);
  // console.log(students);
  const student_data = students?.data?.map(
    ({
      _id,
      name,
      gender,
      email,
      contactNo,
      id,
      bloodGroup,
      profileImage,
      createdAt,
      updatedAt,
    }) => {
      const created_at = date_formater(createdAt);
      const updated_at = updated_checker(createdAt, updatedAt);
      return {
        key: _id,
        name: name.middleName,
        created_at,
        updated_at,
        gender,
        email,
        contactNo,
        roll: id,
        bloodGroup,
        profileImage,
      };
    }
  );

  const columns: TableColumnsType<TStudent_Data_type> = [
    {
      title: "Picture",
      dataIndex: "profileImage",
      showSorterTooltip: { target: "full-header" },
      render: (url: string) => (
        <Avatar src={url} size={50} alt="profile Image"></Avatar>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: students?.data?.map((item)=>({
        text: item.name.middleName,
        value: item.name.middleName
      }))
    },
    {
      title: "Roll",
      dataIndex: "roll",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Blood G",
      dataIndex: "bloodGroup",
    },
    {
      title: "Action",
      render: () => {
        return (
          <div>
            <Button>Details</Button>
            <Button>Update</Button>
            <Button>Block</Button>
          </div>
        );
      },
    },
  ];

  const onChange: TableProps<TStudent_Data_type>["onChange"] = (
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
      <Table<TStudent_Data_type>
        columns={columns}
        dataSource={student_data}
        onChange={onChange}
        loading={isFetching}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};
export default Students;
