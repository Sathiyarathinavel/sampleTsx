import { useState } from "react";
import ButtonComponenet from "./ButtonComponent";

const LabelComponent = (props: any) => {
    const [firName, setfirName] = useState("");
    const toggel = () => {
        firName == 'Tiger' ? setfirName('Lion') : setfirName('Tiger');
    }
    return (
        <div>
            <label>labelName:{firName}</label>
            <div>
                <ButtonComponenet btnName='toggel' btnEvent={toggel} />
            </div>
        </div>
    );
}
export default LabelComponent;