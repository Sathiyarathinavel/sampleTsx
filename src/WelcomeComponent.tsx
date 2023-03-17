import ButtonComponent from "./ButtonComponent";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import EmployeeInterface from "./interface/EmployeeInterface";

const WelcomeComponent = () => {

    const [jsonObj, setJsonObj] = useState<EmployeeInterface>();

    const param = useParams();

    useEffect(() => {
        axios.get("http://localhost:7777/arrayms/employees/all").then(res => {
            console.log("responseBody", res.data);
            setJsonObj(res.data);
        })
    }, []);

    let navVar = useNavigate();

    const showTable = () => {
        navVar("/sample", { state: jsonObj });
    }

    return (
        <div>
            <p>Welcome {param.empName}, This page will redirect you to the table page</p>
            <ButtonComponent btnName="ShowTable" btnStyle={{ color: "Green" }} btnEvent={showTable} />
        </div>
    );
}

export default WelcomeComponent;
