import React, { Component, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

//i18n
import { withNamespaces } from "react-i18next";

// users
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import { setLogout } from "../../../actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProfileMenu = (props) => {
  /*
    constructor(props) {
        super(props);
        state = {
            menu: false,
        };
        toggle = toggle.bind(;
    }
*/
  const authReducer = useSelector((state) => state.authReducer);
  const authenticateFromLocal = JSON.parse(localStorage.getItem("UserData"));
  const dispatch = useDispatch();

  const signout = () => {
    console.log("logout");
    dispatch(setLogout());
  };

  const [menu, setmenue] = useState(false);
  const toggle = () => {
    setmenue(!menu);
  };

  let username = "Admin";
  if (localStorage.getItem("authUser")) {
    const obj = JSON.parse(localStorage.getItem("authUser"));
    const uNm = obj.email.split("@")[0];
    username = uNm.charAt(0).toUpperCase() + uNm.slice(1);
  }

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={toggle}
        className="d-inline-block user-dropdown"
      >
        <DropdownToggle
          tag="button"
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
        >
          <img
            className="rounded-circle header-profile-user mr-1"
            src={avatar2}
            alt="Header Avatar"
          />
          <span className="d-none d-xl-inline-block ml-1 text-transform">
            {username}
          </span>
          <i className="mdi mdi-chevron-down d-none ml-1 d-xl-inline-block"></i>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem href="#">
            <i className="ri-user-line align-middle mr-1"></i>{" "}
            {props.t("Profile")}
          </DropdownItem>
          <DropdownItem href="#">
            <i className="ri-wallet-2-line align-middle mr-1"></i>{" "}
            {props.t("My Wallet")}
          </DropdownItem>
          <DropdownItem className="d-block" href="#">
            <span className="badge badge-success float-right mt-1">11</span>
            <i className="ri-settings-2-line align-middle mr-1"></i>{" "}
            {props.t("Settings")}
          </DropdownItem>
          <DropdownItem href="#">
            <i className="ri-lock-unlock-line align-middle mr-1"></i>{" "}
            {props.t("Lock screen")}
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem className="text-danger">
            <Link to="/login" onClick={signout}>
              <i className="ri-shut-down-line align-middle mr-1 text-danger"></i>{" "}
              {props.t("Logout")}
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default withNamespaces()(ProfileMenu);
