import { useState } from "react";
import { useLocation } from "react-router-dom";
import ButtonComponenet from "./ButtonComponent";

const LabelComponent = (props: any) => {

    const location=useLocation();
    console.log(location);
    
    const [firName, setfirName] = useState("");
    const toggel = () => {
        firName == 'Tiger' ? setfirName('Lion') : setfirName('Tiger');
    }
    return (
        <div>
            <label>labelName:{firName}</label>
            <p>name :{location.state.name}</p>
            <p>n :{location.state.age}</p>
            <div>
                <ButtonComponenet btnName='toggel' btnEvent={toggel} />
            </div>
        </div>
    );
}
export default LabelComponent;