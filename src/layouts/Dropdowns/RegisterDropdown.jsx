import React from "react";
import { createPopper } from "@popperjs/core";
import { Link } from "react-router-dom";

const RegisterDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="bg-lightBlue-500  text-white active:bg-lightBlue-600 font-bold text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="flex flex-wrap">
          <i class="fas fa-user-plus pt-1"></i>
          <p className="pl-2">Hesap Oluştur</p>
        </div>
        
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "text-base z-50 float-left flex flex-col py-6 list-none text-left rounded min-w-48"
        }
      >
        <Link 
        to="/auth/jobSeekerForRegister"
        className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold  text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
          <div className="flex flex-wrap">
          <i class="fas fa-user pt-1"></i>
          <p className="pl-2">İş Arayan</p>
          </div>
        </Link>
        <Link 
        to="/auth/employerForRegister"
        className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
           <div className="flex flex-wrap">
          <i class="fas fa-building pt-1"></i>
          <p className="pl-2">İş Veren</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default RegisterDropdown;
