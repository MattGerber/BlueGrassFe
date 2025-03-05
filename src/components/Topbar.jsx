import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../theme";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const notificationsMock = [
  {
    id: 1,
    title: "New Registration",
    name: "Alex Fredericks",
    date: "07 Oct 2022",
  },
  {
    id: 2,
    title: "New Constent Added",
    name: "Blake Robertson",
    date: "07 Oct 2022",
  },
];

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [notifications, setNotifications] = useState(notificationsMock);
  const [anchorEl, setAnchorEl] = useState(null);
  const openAccountMenu = anchorEl?.id === "account-menu";
  const openNotificationMenu = anchorEl?.id === "notification-menu";
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteNotification = (index) => {
    if (index === -1) setNotifications([]);
    else {
      const newArray = notifications.filter((item, i) => i !== index);
      setNotifications(newArray);
    }
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      width: 20,
      height: 19,
      right: "5px",
      top: "2.5px",
      paddingright: "6.5px",
      paddingbottom: "1px",
      paddingleft: "6.5px",
      backgroundColor: "#FF4842",
    },
  }));

  return (
    <Box
      display="flex"
      justifyContent="end"
      backgroundColor={colors.primary[500]}
      p={2}
    >
      {/* ICONS */}
      <Box display="flex" gap="12px">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton
          id="notification-menu"
          aria-controls={openNotificationMenu ? "notification-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openNotificationMenu ? "true" : undefined}
          onClick={handleClick}
        >
          <StyledBadge badgeContent={notifications.length} color="primary">
            <NotificationsOutlinedIcon />
          </StyledBadge>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="notification-menu"
          open={openNotificationMenu}
          onClose={handleClose}
          width="360px"
          top="88px"
          left="856px"
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <ListSubheader>
            <Box
              width="360px"
              height="78px"
              pt="16px"
              pr="20px"
              pb="16px"
              pl="20px"
              gap="82px"
            >
              <Typography fontSize="16px" fontWeight="600">
                Notifications
              </Typography>
              <Typography fontSize="14px" fontWeight="400">
                You have {notifications.length} unread messages
              </Typography>
            </Box>
          </ListSubheader>
          <Divider />
          {notifications.map((note, index) => {
            return (
              <MenuItem
                onClick={() => {
                  deleteNotification(index);
                }}
              >
                <Box
                  display="flex"
                  width="360px"
                  height="98px"
                  pt="8px"
                  pr="16px"
                  pb="8px"
                  pl="16px"
                  gap="16px"
                  borderBottom="1px solid #9D9D9D3D"
                >
                  <Box>
                    <Avatar
                      alt={note.name}
                      src="../../assets/aa585f0a0eaedcf9fe1235868ac32c54.jpg"
                    />
                  </Box>
                  <Box>
                    <Typography fontSize="14px" fontWeight="600">
                      {note.title}
                    </Typography>
                    <Typography
                      fontSize="14px"
                      fontWeight="400"
                      color="#747474"
                    >
                      {note.name}
                    </Typography>
                    <Box display="flex" width="220px">
                      <AccessTimeIcon
                        sx={{ width: "16px", height: "16px", color: "#BCBCBC" }}
                      />
                      <Typography
                        fontSize="12px"
                        fontWeight="400"
                        color="#BCBCBC"
                      >
                        {note.date}
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <DeleteOutlineIcon
                      sx={{ width: "20px", height: "20px", color: "#BCBCBC" }}
                    />
                  </Box>
                </Box>
              </MenuItem>
            );
          })}
          <MenuItem>
            <Box
              height="50px"
              width="360px"
              alignItems="center"
              textAlign="center"
              justifyContent="center"
              onClick={() => deleteNotification(-1)}
            >
              <Typography
                fontSize="14px"
                fontWeight="600"
                color={colors.blueAccent[500]}
                textAlign="center"
              >
                Clear All
              </Typography>
            </Box>
          </MenuItem>
        </Menu>
        <Box
          display="flex"
          width="px"
          height="40px"
          gap="12px"
          id="account-menu"
          aria-controls={openAccountMenu ? "notification-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openAccountMenu ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar sx={{ backgroundColor: "#67ADB914", color: "#637381" }}>
            <Typography fontSize="14px">AS</Typography>
          </Avatar>
          <Typography fontSize="14px" fontWeight="600" alignSelf="center">
            Adrian Stefan
          </Typography>
          <ExpandMoreIcon
            sx={{
              width: "16px",
              height: "16px",
              color: "#BCBCBC",
              alignSelf: "center",
            }}
          />
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={openAccountMenu}
          onClose={handleClose}
          onClick={handleClose}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <ListSubheader>
            <Box
              width="220px"
              height="78px"
              pt="16px"
              pr="20px"
              pb="16px"
              pl="20px"
              gap="16px"
            >
              <Typography fontSize="16px" fontWeight="600">
                Adrian Stefan
              </Typography>
              <Typography fontSize="14px" fontWeight="400">
                adrian@mrfertility.co.za
              </Typography>
            </Box>
          </ListSubheader>
          <Divider />
          <MenuItem onClick={handleClose} width="220px" height="38px">
            <Box
              width="204px"
              height="38px"
              pt="8px"
              pb="8px"
              pl="16px"
              borderRadius="8px"
            >
              <Typography
                fontSize="14px"
                fontWeight="400"
                color={colors.grey[500]}
              >
                Profile
              </Typography>
            </Box>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <Box
              width="204px"
              height="38px"
              pt="8px"
              pb="8px"
              pl="16px"
              borderRadius="8px"
            >
              <Typography
                fontSize="14px"
                fontWeight="400"
                color={colors.grey[500]}
              >
                Logout
              </Typography>
            </Box>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;
