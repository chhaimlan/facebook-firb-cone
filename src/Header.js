import { Avatar, Button } from "@material-ui/core";
import {
  Add,
  ExpandMore,
  Flag,
  Forum,
  Home,
  NotificationsActive,
  Search,
  StoreOutlined,
  SubscriptionsOutlined,
  SupervisedUserCircle,
} from "@material-ui/icons";
import React from "react";
import "./Header.css";
import { useStateValue } from "./Stateprovider";

// import { auth } from "./firebase";
// onClick={() => auth.signOut(user)}

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
          alt=""
        />
        <div className="header_input">
          <Search />
          <input type="text" placeholder="Search facebook's name" />
        </div>
      </div>
      <div className="header_middle">
        <div className="header_option header_option--active">
          <Home fontSize="large" />
        </div>
        <div className="header_option">
          <Flag fontSize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div className="header_option">
          <StoreOutlined fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>
      <div className="header_right">
        <div className="header_info">
          <Avatar src={user?.photoURL} />
          <h4>{user?.displayName}</h4>
        </div>
        <Button>
          <Add />
        </Button>
        <Button>
          <Forum />
        </Button>
        <Button>
          <NotificationsActive />
        </Button>
        <Button>
          <ExpandMore />
        </Button>
      </div>
    </div>
  );
}

export default Header;
