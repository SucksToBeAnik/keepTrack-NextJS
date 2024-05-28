"use client";

import { useRef } from "react";
import { IoClose } from "react-icons/io5";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import LoginLogoutButton from "./buttons/LoginLogutButton";
import {useAuth} from "@clerk/nextjs"
import Menubar from "./Menubar";

const Sidebar = () => {
  const ref = useRef<HTMLInputElement>(null);

  const {userId} = useAuth()
  return (
    <div className="drawer drawer-end z-50">
      <input
        ref={ref}
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-secondary btn-circle"
        >
          <MdKeyboardDoubleArrowLeft className="h-5 w-5" />
        </label>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-full md:w-2/3 min-h-full bg-[#1B1A19] text-base-content">
          {/* Sidebar content here */}
          <button
            onClick={() => {
              if (ref.current) {
                ref.current.checked = false;
              }
            }}
            className="btn btn-circle btn-primary absolute right-8 top-2"
          >
            <IoClose className="h-5 w-5" />
          </button>

          <LoginLogoutButton />
          <div className="flex justify-center items-center">
            <Menubar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
