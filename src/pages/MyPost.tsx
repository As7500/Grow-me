import { useEffect, useState } from "react";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import axios from "axios";
import { Link } from "@mui/icons-material";
import LaunchIcon from "@mui/icons-material/Launch";
import { DataGrid } from "@mui/x-data-grid";
import "./post.css"
import ComponentTwo from "./compo2";

interface RowsType {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const GatingInformation = () => {
  const [postData, setPostData] = useState<RowsType[]>([]);
  useEffect(() => {
    const getPostData = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPostData(data);
    };
    getPostData();
  }, []);

  console.log(postData);

  const columns = [
    { field: "id", headerName: "Post ID", minWidth: 100, flex: 0.2 },

    {
      field: "title",
      headerName: "Title",
      minWidth: 200,
      flex: 1,
      cellClassName: (params: any) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "userId",
      headerName: "User Id",
      type: "number",
      minWidth: 100,
      flex: 0.2,
    },

    {
      field: "body",
      headerName: "Details",
      type: "string",
      minWidth: 270,
      flex: 1,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params: any) => {
        return (
          <Link to={`/order/${params.getValue(params.id, "id")}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];
  const rows: RowsType[] = [];

  postData.length &&
    postData.forEach((item, index) => {
      rows.push({
        id: item.id,
        title: item.title,
        body: item.body,
        userId: item.userId,
      });
    });

    const dept = [
    {
      department: "customer_service",
      sub_departments: ["support", "customer_success"]
    },
    {
      department: "design",
      sub_departments: ["graphic_design", "product_design", "web_design"]
    }
  ];

  return (
    <div>
    <Box>
      <Header />
      <h1 className="compo">Component 1</h1>
      <Box
        sx={{
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
          marginTop: "30px",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          className="myOrdersTable"
          autoHeight
        />
      </Box>
    </Box>
    
    <div className="compo-2" id="componentTwo">
        <h1>Component 2</h1>
        {dept.map((dep, index) => (
        <ComponentTwo
          ind={index.toString()}
          name={dep.department}
          subDept={dep.sub_departments}
        />
      ))}
          </div>
    </div>
    
  );
};
export default GatingInformation;
