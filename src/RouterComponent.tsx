import { BrowserRouter, Route, Routes } from "react-router-dom"
import DargAndDrop from "./components/DargAndDrop";
import LabelComponent from "./LabelComponent";
import Sample from "./Sample";
import TableComponent from "./TableComponent";
import WelcomeComponent from "./WelcomeComponent";

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DargAndDrop />} />
                <Route path="/Label" element={<LabelComponent />} />
                <Route path="/Welcome/:empName" element={<WelcomeComponent />} />
                <Route path="/sampl" element={<TableComponent />} />
            </Routes>
        </BrowserRouter>
    );
}


export default RouterComponent;