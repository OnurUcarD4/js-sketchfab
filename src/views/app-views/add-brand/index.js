import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import "./addBrand.css";
import { useDispatch, useSelector } from "react-redux";
import { remove, selectBrand, update } from "../../../redux/addNewBrand";
import BrandModal from "./BrandModal";

const AddBrand = () => {
  const [openBrandModal, setOpenBrandModal] = useState(false);
  const state = useSelector((state) => state.brand);
  const dispatch = useDispatch();
  const onUpdate = (e) => {
    setOpenBrandModal(true);
    dispatch(selectBrand(e));
    console.log(selectBrand(e));
  };
  const columns = [
    {
      title: "Brand Name",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      width: "1%",
      render: (_, record) => {
        return (
          <Space size="middle">
            <a onClick={() => onUpdate(record)}>Update</a>
            <a onClick={() => dispatch(remove(record.key))}>Delete</a>
          </Space>
        );
      },
    },
  ];
  const handler = () => {
    dispatch(selectBrand({}));
    setOpenBrandModal(true);
  };

  return (
    <div>
      <div className="w-full flex items-center font-bold pl-4 border-gray-300 border-l-2  h-24 bg-[#e8e8fd] justify-between">
        <span className="text-3xl">Add New Brand</span>
        <button
          onClick={() => handler()}
          className="p-4 bg-blue-400 rounded-md mr-4 text-white"
        >
          Add New Brand
        </button>
      </div>
      <div className="  m-5">
        <div className="bg-white p-5 rounded-md shadow-md ">
          <Table
            className="bg-red-500 h-full"
            columns={columns}
            bordered={true}
            dataSource={state.brandData}
          />
        </div>
      </div>
      <BrandModal
        open={openBrandModal}
        onClose={() => setOpenBrandModal(false)}
      />
    </div>
  );
};

export default AddBrand;
