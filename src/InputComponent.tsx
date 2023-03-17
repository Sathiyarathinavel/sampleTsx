const InputComponent = (props: any) => {
    return (
        <div>
            <input type={props.inputType} id={props.id} placeholder={props.placeholder} name={props.name} />
        </div>
    );
}
export default InputComponent;