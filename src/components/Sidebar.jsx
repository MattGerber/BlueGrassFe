import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../theme";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[500]} !important`,
          paddingLeft: "16px",
          paddingRight: "16px",
          borderRadius: "8px",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#99c1c6 !important",
        },
        "& .pro-menu-item.active": {
          backgroundColor: `${colors.primary[900]} !important`,
          borderRadius: "8px",
        },
      }}
    >
      <ProSidebar>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            ml="15px"
          >
            <img
              alt="profile-user"
              width="100px"
              height="100px"
              src={`../../assets/Primary Logo.svg`}
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Box>
            <Item
              title="Dashboard"
              to="/"
              icon={<img alt="home" src="../../assets/home.svg" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="My Profile"
              to="/"
              icon={<img alt="profile" src="../../assets/u_user-square.svg" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage Practises"
              to="/"
              icon={<img alt="practices" src="../../assets/u_medkit.svg" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Logs"
              to="/"
              icon={<img alt="file" src="../../assets/u_file-info-alt.svg" />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
