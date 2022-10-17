import React from "react";
import { Link } from "react-router-dom";
import AppViews from "views/app-views";
import "./style.css";

const LeftPanel = () => {
  return (
    <div>
      {" "}
      <div className="grid grid-cols-6">
        <div className="col-span-1 left-panel h-full min-h-screen text-[#1d1c4e]">
          <div className="mt-4 pl-4 flex text-base cursor-pointer hover:opacity-80 duration-300">
            <img
              className="w-16 rounded-xl"
              src="https://i.imgur.com/n7qN1xZ.png"
              alt="user-info-img"
            />
            <div className="user-info ml-4 flex flex-col">
              <span className="text-xl">Onur Uçar</span>
              <span className="font-thin">onurucar1443@gmail.com</span>
            </div>
          </div>
          <div className="mt-8 text-xl font-semibold ">
            <Link className="text-current" to="cars">
              <span className="gap-4 pl-4 p-3 hover:opacity-70 duration-300 cursor-pointer flex items-center">
                <i className="fa-solid fa-car"></i>View Cars
              </span>
            </Link>
            <Link className="text-current" to="add-brand">
              <span className="gap-4 pl-4 p-3 hover:opacity-70 duration-300 cursor-pointer flex items-center">
                <i className="fa-solid fa-square-plus"></i>Add New Brand
              </span>
            </Link>
            <Link className="text-current" to="about">
              <span className="gap-4 pl-4 p-3 hover:opacity-70 duration-300 cursor-pointer flex items-center">
                <i className="fa-sharp fa-solid fa-circle-info"></i>About Us
              </span>
            </Link>

            <a
              className="text-current"
              target="_blank"
              href="https://youtu.be/vZCq-kPntkM"
            >
              <div className="absolute bottom-1 left-1 opacity-70 hover:opacity-100 cursor-pointer">
                Nasıl Kullanılır?
              </div>
            </a>
          </div>
        </div>
        <div className="col-span-5">
          <AppViews />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
