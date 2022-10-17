import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./homepage.css";
import Modal from "./Modal";

const initialData = [
  {
    Id: 1,
    Image: "https://i.imgur.com/PHsCiCJ.png",
    Brand: "Opel",
    Title: "Corsa",
    Year: 2020,
    Price: 120,
    CarId: "a8eb5f67f55a4e6db84327984a20fe0f",
  },
  {
    Id: 2,
    Image: "https://i.imgur.com/uWOO9wF.png",
    Brand: "Opel",
    Title: "Astra",
    Year: 2020,
    Price: 135,
    CarId: "81a759530b7943e296d6bb406a078af2",
  },
  {
    Id: 3,
    Image: "https://i.imgur.com/mvbFIoc.png",
    Brand: "Volkswagen",
    Title: "Passat GTE",
    Year: 2020,
    Price: 150,
    CarId: "245bc73c18fa452cabfa3f892df1d623",
  },
  {
    Id: 4,
    Image: "https://i.imgur.com/XgCBLXv.png",
    Brand: "Volkswagen",
    Title: "Golf R",
    Year: 2017,
    Price: 135,
    CarId: "d3bf90a94b19445cb98ef17ba3b701a9",
  },
  {
    Id: 5,
    Image: "https://i.imgur.com/l8iMDMK.png",
    Brand: "Mercedes",
    Title: "AMG CLS",
    Year: 2021,
    Price: 235,
    CarId: "88b9a904632e42d18254aa6bf5f43344",
  },
];
const Home = () => {
  const [data, setData] = useState(initialData);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");
  const [carData, setCarData] = useState({});
  const brandDatas = useSelector((state) => state.brand.brandData);

  const pushCar = () => {
    const generatedId = data[data.length - 1].Id + 1;
    setData([...data, { ...carData, Id: generatedId }]);
  };
  useEffect(() => {
    if (!_.isEmpty(brandDatas)) {
      setCarData({ ...carData, Brand: brandDatas[0] });
    }
  }, [brandDatas]);

  const selectCarHandle = (a) => {
    setSelectedCar(a);
    setOpenModal(true);
  };
  const selectBrand = (e) => {
    const brandSel = e.target.value;
    setCarData({ ...carData, Brand: brandSel });
  };

  return (
    <div className="homepage-main ">
      <div className="bg-[#e8e8fd] text-[#1d1c4e] font-bold text-3xl w-full h-24 flex items-center justify-between border-l-2 border-gray-300 ">
        <div className="flex items-center ">
          <div className="">
            <span className="ml-4">View Cars</span>
          </div>
        </div>
        <div className="add-cars mr-10  gap-2 flex font-medium text-base">
          <select
            onChange={selectBrand}
            id="selectorbrand"
            className="car-brand p-2 rounded-md"
            type="text"
          >
            {brandDatas.map((e) => {
              return (
                <option key={e.key} value={e.title}>
                  {e.title}
                </option>
              );
            })}
          </select>
          {console.log(carData)}
          <input
            placeholder="Car Model"
            onChange={(e) => setCarData({ ...carData, Title: e.target.value })}
            className="car-name p-2 rounded-md"
            type="text"
          />
          <input
            onChange={(e) =>
              setCarData({ ...carData, Year: parseInt(e.target.value) })
            }
            placeholder="Car Model Year"
            className="car-model p-2 rounded-md"
            type="text"
          />
          <input
            onChange={(e) =>
              setCarData({ ...carData, Price: parseInt(e.target.value) })
            }
            placeholder="Car Price Per Day"
            className="car-price p-2 rounded-md"
            type="text"
          />
          <input
            onChange={(e) => setCarData({ ...carData, CarId: e.target.value })}
            placeholder="Car ID"
            className="car-id p-2 rounded-md"
            type="text"
          />
          <input
            onChange={(e) => setCarData({ ...carData, Image: e.target.value })}
            placeholder="Car Image Link"
            className="car-image p-2 rounded-md"
            type="text"
          />
          <button
            onClick={() => pushCar()}
            className="add-car-button p-2 bg-green-600 text-white rounded-md"
          >
            Add Car
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {data.map((e) => {
          return (
            <div
              key={e.Id}
              className="text-black p-4 flex bg-white hover:border-l-4 shadow-lg duration-300 hover:border-purple-700    rounded-3xl relative"
            >
              <img className="w-64" src={e.Image} alt="car" />
              <div className="font-bold flex flex-col ml-4 ">
                <div className="">
                  <span className="text-xl">
                    {e.Brand} {e.Title}
                  </span>
                </div>

                <span className="font-normal">{e.Year}</span>
                <div className="pricing mt-2">
                  <span className="font-semibold text-xl text-red-600">
                    {e.Price}$ / Day
                  </span>
                  <div className="details-button absolute bottom-0 right-0">
                    <button
                      onClick={() => selectCarHandle(e.CarId)}
                      className="bg-blue-600 text-white text-xl font-medium hover:bg-blue-500 duration-300 py-4 px-10 rounded-tl-xl rounded-br-xl"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          carId={selectedCar}
        />
      </div>
    </div>
  );
};

export default Home;
