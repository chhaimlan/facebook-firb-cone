import {
  EmojiFlags,
  Event,
  KeyboardArrowDown,
  LocalHospital,
  People,
  Restore,
  Save,
  Storefront,
  VideoLibrary,
} from "@material-ui/icons";
import GroupsIcon from "@mui/icons-material/Groups";
import React from "react";
import "./Sidebar.css";
import Sidebarrow from "./Sidebarrow";
import { useStateValue } from "./Stateprovider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <Sidebarrow src={user.photoURL} title={user.displayName} />
      <Sidebarrow Icon={LocalHospital} title="Covid-19" />
      <Sidebarrow Icon={People} title="Friends" />
      <Sidebarrow Icon={GroupsIcon} title="Group" />
      <Sidebarrow Icon={VideoLibrary} title="Videos" />
      <Sidebarrow Icon={Storefront} title="Marketplace" />
      <Sidebarrow Icon={Restore} title="Memmries" />
      <Sidebarrow Icon={Save} title="Save" />
      <Sidebarrow Icon={EmojiFlags} title="Pages" />
      <Sidebarrow Icon={Event} title="Pages" />
      <Sidebarrow Icon={KeyboardArrowDown} title="More" />
    </div>
  );
}

export default Sidebar;
