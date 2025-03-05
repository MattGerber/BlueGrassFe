import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataTable, mockDataStatCards } from "../../data/mockData";
import Switch from "@mui/material/Switch";
import { DataGrid } from "@mui/x-data-grid";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { useState } from "react";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [tableData, setTableData] = useState(mockDataTable);
  const [selectionModel, setSelectionModel] = useState([]);

  const handleSwitch = (id) => {
    const newTableData = tableData.map((item) => {
      if (item.id === id) return { ...item, status: !item.status };
      else return item;
    });
    setTableData(newTableData);
  };

  const deleteRecord = (id) => {
    const newData = tableData.filter((item) => item.id !== id);
    setTableData(newData);
  };

  const columns = [
    { field: "name", headerName: "Practice Name", flex: 0.25 },
    { field: "number", headerName: "Tel No", flex: 0.25 },
    {
      field: "email",
      headerName: "Email",
      flex: 0.25,
    },
    {
      field: "date",
      headerName: "Date Created",
      flex: 0.25,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.25,
      renderCell: ({ row: { status, id } }) => {
        return (
          <Box>
            <Typography
              fontSize="14px"
              fontWeight="400"
              color={colors.greenAccent[200]}
            >
              <Switch
                checked={status}
                name="loading"
                color="secondary"
                onClick={() => handleSwitch(id)}
              />
              {status ? "Active" : "Disabled"}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.25,
      renderCell: ({ row: { id } }) => {
        return (
          <Box>
            <IconButton>
              <img alt="edit" src="../../assets/edit.svg" />
            </IconButton>
            <IconButton
              onClick={() => {
                deleteRecord(id);
              }}
            >
              <img alt="edit" src="../../assets/ic_trash.svg" />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px" pt="32px" pr="40px" pl="40px" gap="40px">
      <Box pb="24px">
        <Typography pb="16px" fontWeight="700" size="20px">
          Welcome Andrew!
        </Typography>
        <Typography fontWeight="400" size="14px" color={colors.grey[900]}>
          Nulla ut aliquam metus. Integer at diam sem. Nunc finibus nibh vel
          risus eleifend laoreet.
        </Typography>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(9, 1fr)"
        gridAutoRows="154px"
        gap="24px"
      >
        {mockDataStatCards.map((card) => {
          return (
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[500]}
              display="flex"
              alignItems="center"
              justifyContent="center"
              padding="24px"
              borderRadius="16px"
              boxShadow="0px 12px 24px -4px #919EAB1F, 0px 0px 2px 0px #919EAB33;"
            >
              <StatBox
                title={card.title}
                subtitle={card.subtitle}
                increase={card.increase}
                icon={
                  <img
                    alt="profile-user"
                    width="64px"
                    height="64px"
                    src={card.icon}
                  />
                }
              />
            </Box>
          );
        })}
        <Box
          gridColumn="span 9"
          borderRadius="16px"
          gridRow="span 1"
          backgroundColor={colors.primary[500]}
          boxShadow="0px 12px 24px -4px #919EAB1F, 0px 0px 2px 0px #919EAB33;"
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          gap="40px"
        >
          <ProgressCircle
            color="#FF966B"
            size="24"
            progress="0.24"
            text="Pending"
          ></ProgressCircle>
          <ProgressCircle
            color="#54D62C"
            size="56"
            progress="0.56"
            text="Registered"
          ></ProgressCircle>
          <ProgressCircle
            color="#1890FF"
            size="20"
            progress="0.20"
            text="Post Treatment"
          ></ProgressCircle>
        </Box>
        <Box
          gridColumn="span 9"
          borderRadius="16px"
          backgroundColor={colors.primary[500]}
          boxShadow="0px 12px 24px -4px #919EAB1F, 0px 0px 2px 0px #919EAB33;"
          pr="8px"
          pl="8px"
          sx={{
            height: 400,
            width: "100%",
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.grey[800],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[500],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "2px solid #919EAB3D",
              backgroundColor: colors.primary[500],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          <Box>
            <Typography padding="24px" fontSize="18px" fontWeight="bold">
              Newest Practises
            </Typography>
            <Box sx={{ height: "300px", width: "100%" }}>
              <DataGrid
                getRowId={(row) => row.id}
                pagination={true}
                pageSize={3}
                rows={tableData}
                columns={columns}
                pageSizeOptions={[5]}
                onSelectionModelChange={setSelectionModel}
                selectionModel={selectionModel}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
