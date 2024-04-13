"use client";

import profileImg from "../components/media/profile.jpg";
import Image from "next/image";
import Icons from "../components/icon/icon";
import frontend from "../components/json/frontend.json";
import backend from "../components/json/backend.json";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gray-900 p-6 ">
      <div className=" w-1/3 lg:w-1/5 h-full shadow-lg shadow-gray-400 bg-gray-800  ">
        <div className="flex flex-col justify-center h-1/3 items-center">
          <div className="w-1/2 sm:w-[150px] px-4">
            <div className="border-4 border-blue-500 rounded-full">
              <Image
                src={profileImg}
                alt="..."
                className="shadow rounded-full max-w-full h-auto align-middle border-4 border-gray-700"
              />
            </div>
          </div>
          <h2 className="text-white font-sans.... pt-2">HI THERE!</h2>
          <h2 className="text-gray-300 font-sans.... pt-2">
            I'm Tengis Sodnomdarjaa
          </h2>
          <Icons />
        </div>
        <div className="flex flex-col justify-center h-3/5 items-center">
          <div className="w-full h-[350px] flex flex-wrap">
            <h3 className="text-white font-sans.... text-lg w-full text-center">
              Frontend Developer
            </h3>
            {frontend?.map((data, index) => {
              return (
                <div className="w-1/2 h-auto flex-col flex">
                  <div className="flex flex-row items-center w-full ml-2">
                    <svg
                      className="h-4 w-4 text-blue-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <circle cx="12" cy="12" r="9" />{" "}
                      <path d="M9 12l2 2l4 -4" />
                    </svg>
                    <h3 className="text-white ml-2 text-sm">{data.name}</h3>
                  </div>
                  <div className="w-full flex pl-8 text-gray-400 text-xs">
                    {data.level}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full h-[350px] flex justify-center flex-wrap">
            <h3 className="text-white font-sans.... text-lg w-full text-center">
              Backend Developer
            </h3>
            {backend?.map((data, index) => {
              return (
                <div className="w-1/2 h-auto">
                  <div className="flex flex-row items-center w-full ml-2">
                    <svg
                      className="h-4 w-4 text-blue-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <circle cx="12" cy="12" r="9" />{" "}
                      <path d="M9 12l2 2l4 -4" />
                    </svg>
                    <h3 className="text-white ml-2 text-sm">{data.name}</h3>
                  </div>
                  <div className="w-full flex pl-8 text-gray-400 text-xs">
                    {data.level}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full h-auto bg-red-200"></div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
