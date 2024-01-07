"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { useAppContext, AppProvider, User } from "../AppContext";
import { CiEdit } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import { useParams, redirect, useRouter } from "next/navigation";
import pong from "../../public/pong.svg";
import { IoMenuOutline } from "react-icons/io5";


export const Navbar = ({ isProfileOwner }: { isProfileOwner: boolean })  => {
    const {
      user,
      setUser,
      isDivVisible,
      toggleDivVisibility,
      setDivVisible,
      isSidebarVisible,
      setisSidebarVisible,
      toggleSidebarVisibleVisibility,
    } = useAppContext();
  
    const [inputValue, setInputValue] = useState("");
    const router = useRouter();
  
    const handleSubmit = (event: any) => {
      event.preventDefault();
      if (
        inputValue === "" ||
        inputValue === undefined ||
        inputValue === null ||
        inputValue.trim().length === 0
      ) {
        return;
      }
      if (
        inputValue.trim().length > 10) {
        return toast.error("TOO LONG");
      }
      return router.push(
        `${process.env.NEXT_PUBLIC_API_URL}:3001/users/search?searchTerm=${inputValue}`
      );
    };
  
    return (
      <div className="bg-[#1F212A] flex flex-row  w-[100vw]">
        <div className="w-16 h-16 bg-[#292D39]">
          <Image
            src={pong}
            alt="Description of the image"
            priority={true}
            width={100}
            height={100}
            sizes=""
            style={{ filter: "invert(100%)" }}
          />
        </div>
  
        <div className="flex-grow">
          <div className="">
            <div className="flex-row flex">
              <div className="flex-row flex justify-between">
                <div className="flex items-center p-3 md:hidden">
                  <button onClick={toggleSidebarVisibleVisibility}>
                    <IoMenuOutline size="30" className="text-white" />
                  </button>
                </div>
                <div className="flex items-center md:p-3">
                  <Link href={`${process.env.NEXT_PUBLIC_API_URL}:3000/search`}>
                    <CiSearch size="30" className="text-slate-400 " />
                  </Link>
                  <div className="md:inline-block hidden">
                    <form className="" onSubmit={handleSubmit}>
                      <label className="">
                        <input
                          id="handleSubmit"
                          name={`searchTerm${Math.random()}`}
                          type="text"
                          value={inputValue}
                          placeholder="Search ..."
                          onChange={(e) => {
                            setInputValue(e.target.value);
                          }}
                          className=" bg-[#1E2028] items-center justify-center p-2 rounded-lg text-sm outline-none text-white"
                        />
                      </label>
                    </form>
                  </div>
                </div>
              </div>
              <div className="flex justify-end p-4 flex-grow">
                {!isDivVisible && isProfileOwner && (
                  <button onClick={toggleDivVisibility}>
                    <CiEdit className="text-white" size="25" />
                  </button>
                )}
                {isDivVisible && isProfileOwner && (
                  <button onClick={toggleDivVisibility}>
                    <IoIosCloseCircleOutline className="text-white" size="25" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  