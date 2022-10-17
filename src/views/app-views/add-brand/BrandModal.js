import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, update } from "redux/addNewBrand";
import _ from "lodash";

const BrandModal = ({ onClose, open }) => {
  const selector = useSelector((state) => state.brand);
  const isAdd = _.isEmpty(selector.selectedBrand);

  useEffect(() => {
    console.log(isAdd, selector.selectedBrand, selector.selectedBrand.title);
    if (isAdd) {
      setTitle("");
    } else {
      setTitle(selector.selectedBrand.title);
    }
  }, [selector.selectedBrand]);

  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  if (!open) return null;

  console.log(selector);

  const onSave = () => {
    if (isAdd) {
      dispatch(add(title));
    } else {
      dispatch(update(title));
    }
    setTitle("");
    onClose();
  };
  return (
    <div className="overlay">
      <div className="modalContainer p-4 flex flex-col">
        <span className="font-bold text-2xl">
          {isAdd ? "Add" : "Update"} New Brand
        </span>
        <div className="">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-300 p-2"
            type="text"
          />
          <Button onClick={onSave} className="ml-2">
            {isAdd ? "Add" : "Update"} Brand
          </Button>
        </div>

        <div
          onClick={onClose}
          className="modalRight right-4 border px-6 text-white cursor-pointer  py-2  border-white bg-red-600 justify-end absolute mr-4"
        >
          <p className="closeBtn font-bold">X</p>
        </div>
      </div>
    </div>
  );
};

export default BrandModal;
