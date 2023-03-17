import exp from "constants";

const ButtonComponenet = (props: any) => {
    const btnDefaultColor = props.btnStyle != null ? props.btnStyle : "{color:'green'}";
    const btnDefaultName = props.btnName != null ? props.btnName : "Default";
    return (
        <button style={props.btnStyle} onClick={props.btnEvent}>{ btnDefaultName}</button>
    );
}
export default ButtonComponenet;