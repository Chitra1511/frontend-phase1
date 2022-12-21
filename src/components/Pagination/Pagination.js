import { Table } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

function Pagination({ month }) {
  const [dataSource, setDataSource] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRecords(1);
  },);
  const columns = [
    {
      title: "Employee Code",
      dataIndex: "employeeCode",
      key: "employeeCode",
    },
    {
      title: "Employee Name",
      dataIndex: "employeeName",
      key: "employeename",
    },
    {
      title: "Email",
      dataIndex: "employeeEmail",
      key: "employeeEmail",
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
    },
    {
      title: "Leave Date",
      dataIndex: "leaveDate",
      key: "leaveDate",
    },
    {
      title: "Total Days",
      dataIndex: "totalDays",
      key: "totalDays",
    },
    
  ];

  const fetchRecords = async (page) => {
    try {
      // setLoading(true);
      const { data } = await axios.get(`http://172.16.20.106:5000/submit?month=${month}`);
      setDataSource(data);
      console.log(data)
      setTotalPages(data.totalPages);
    } catch (err) {
      console.log(err);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div
      style={{
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        marginTop:"50px",
        padding:"50px",
       
      }}
    >
      <Table
        // loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: 10,
          total: totalPages,
          onChange: (page) => {
            fetchRecords(page);
          },
        }}
      >
      </Table>
    </div>
  );
}
export default Pagination;

