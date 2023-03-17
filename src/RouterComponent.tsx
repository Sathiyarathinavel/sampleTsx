import { BrowserRouter, Route, Routes } from "react-router-dom"
// import FirstComponent from "./FirstComponent";
import JsonParser from "./JsonParser";
import LabelComponent from "./LabelComponent";
import Sample from "./Sample";
import SampleClassComponent from "./SampleClassComponent";
import TableComponent from "./TableComponent";
import WelcomeComponent from "./WelcomeComponent";

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<JsonParser />} />
                <Route path="/Label" element={<LabelComponent />} />
                <Route path="/Welcome/:empName" element={<WelcomeComponent />} />
                <Route path="/sampl" element={<TableComponent />} />
            </Routes>
        </BrowserRouter>
    );
}


export default RouterComponent;