import AddressInterface from "./AddressInterface";

interface EmoloyeeInterface {
    id: number;
    name: string;
    age: number;
    department: string;
    salary: number;
    address: AddressInterface;
}
export default EmoloyeeInterface;