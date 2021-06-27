import React from "react";
import { createPopper } from "@popperjs/core";
import { Link } from "react-router-dom";
import UserOperations from '../../pages/SystemPersonnel/UserOperation'
const NotificationDropdown = ({userStatu,userId}) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  

  return (
    <>
      <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left flex flex-col py-2 px-2 text-center list-none text-left rounded shadow-lg min-w-32"
        }
      >

            <Link
            to={`/personnel/userOperation/user/${userId}`}
            className={
                "bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            }
            >
            Görüntüle
            </Link>
        
            <UserOperations statu={userStatu} userId={userId}/>
      </div>
    </>
  );
};

export default NotificationDropdown;
