import { useState } from "react"
import "./Dropdown.css"
import '../Submit/Submit.css'
import Pagination from "../Pagination/Pagination";
// import { CSVLink } from 'react-csv'
// import * as XLSX from 'xlsx'



function Dropdown() {
    const [drop, setDrop] = useState(false);
    const [isPreview, setIsPreview] = useState(false);
    // const [isPreviewed, setIsPreviewed] = useState(false);
    const [display , setDisplay] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(null);


    const monthsList = [{id:0, selecting:"SELECT A MONTH",default:true},
                        {id:1, month: "January", key: "Jan" },
                        {id:2, month: "February", key:"Feb"},
                        {id:3, month: "March", key:"Mar"},
                        {id:4, month: "April", key:"Aprl"},
                        {id:5, month: "May", key:"May"},
                        {id:6, month: "June", key:"Jun"},
                        {id:7, month: "July", key:"Jul"},
                        {id:8, month: "August", key:"Aug"},
                        {id:9, month: "September", key:"Sept"},
                        {id:10, month: "October", key:"Oct"},
                        {id:11, month: "November", key:"Nov"},
                        {id:12, month: "December", key:"Dec"},
                    ];
    

    const handleMonthChange = (e) => {
        if (e.target.value === "SELECT A MONTH") {
            setDrop(true)
            setIsPreview(true)
            // setIsPreviewed(true)
        }
        else {
            setDrop(false)
            setIsPreview(true)
        }
        setCurrentMonth(e.target.value);
        setIsPreview(true);
    };

    // const disableButton = (e) => {
    //     if (e.target.value === "Select a Month") {
    //         setDrop(true)
    //         setIsPreview(true)
    //         setIsPreviewed(true)
    //     }
    //     else {
    //         setDrop(false)
    //         setIsPreview(true)
    //     }
    // }
    const handleClick = () => {
        // setIsPreviewed(true)
        setIsPreview(false);
    //     setTimeout(() => {
    //     //  setIsPreviewed(false);
    //     }, 1700);
        setDisplay(true)
    // };
       };
    // const downloadExcel = (data) => {
    //     // alert("Downlaod Success");
    //     const worksheet = XLSX.utils.json_to_sheet(data);
    //     const workbook = XLSX.utils.book_new();
    //     XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //     //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //     //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    //     XLSX.writeFile(workbook, "DataSheet.xlsx");
    //       }
          

    return (
        <>
            <div>
            <select id="selection" className="drop" onChange={handleMonthChange} >
                {monthsList.map((m) => {
                    return <option value={m.month} className="Month">{m.month}{m.selecting}</option>
                })}
            </select>
            </div>
            <button className='preview' disabled={isPreview && drop}
                onClick={handleClick}>SUBMIT </button>
            {display ? <Pagination month = {currentMonth}/> : ""}
            <a href="http://172.16.20.106:5000/download-file"> <button id='Down' className="Download" disabled={isPreview} >DOWNLOAD</button></a>
        </>   
        
    )
}
export default Dropdown;
