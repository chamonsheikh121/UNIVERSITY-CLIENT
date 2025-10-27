import React, { useState } from "react";
import { Avatar, Button, Modal, Pagination, Spin, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import type { TParamItems } from "@/types";
import {
  useBlock_studentMutation,
  useGet_all_studentQuery,
} from "@/redux/features/admin/user_management.api";
import date_formater from "@/utils/date_formater";
import updated_checker from "@/utils/updated_checker";
import { Link } from "react-router-dom";
import { toast } from "sonner";

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
  const [page, setPage] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user_id, setUser_id] = useState("");
  const [params, setParams] = useState<TParamItems[]>([]);
  const [block_student] = useBlock_studentMutation();
  const {
    data: students,
    isLoading,
    isFetching,
  } = useGet_all_studentQuery([
    { name: "limit", value: 5 },
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);

  const meta_data = students?.meta;
  console.log(meta_data);
  const student_data = students?.data?.map(
    ({
      _id,
      userId,
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
        userId,
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

  const handleBlock = (id: string) => {
    setIsModalOpen(true);
    setUser_id(id);
  };

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
      filters: students?.data?.map((item) => ({
        text: item.name.middleName,
        value: item.name.middleName,
      })),
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
      render: (item) => {
        return (
          <div>
            <Link to={`/admin/students/update/${item.key}`}>
              {" "}
              <Button>Update</Button>
            </Link>
            <Link to={`/admin/students/details/${item.key}`}>
              {" "}
              <Button>Details</Button>
            </Link>
            <Button onClick={() => handleBlock(item.userId?._id)}>Block</Button>
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

  const handleOk = async () => {
    const toast_id = toast.loading("... blocking");

    console.log(
      "===============================================================================",
      user_id
    );
    const res = await block_student({
      user_id,
      status: { status: "blocked" },
    });
    if (res.error) {
      toast.error("failed to block student", { id: toast_id });
    }
    if (res?.data?.success == true) {
      toast.success("Blocked successfully", { id: toast_id });
    }

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="">
      <Table<TStudent_Data_type>
        columns={columns}
        dataSource={student_data}
        onChange={onChange}
        loading={isFetching}
        pagination={false}
        showSorterTooltip={{ target: "sorter-icon" }}
      />

      <div className="mt-10">
        <Pagination
          pageSize={meta_data.limit}
          onChange={(value) => setPage(value)}
          total={meta_data.total}
        />
      </div>

      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};
export default Students;
