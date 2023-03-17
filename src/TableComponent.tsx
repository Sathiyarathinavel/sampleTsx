import DataTable from "react-data-table-component";
import { useLocation } from "react-router-dom";

const TableComponent = () => {

    const tableJsonData = useLocation().state;

    const columns = [
        {
            name: 'ID',
            selector: (row: any) => row.id,
            sortable: true,

        },
        {
            name: 'Name',
            selector: (row: any) => row.name,
            sortable: true,

        },
        {
            name: 'Age',
            selector: (row: any) => row.age,
            sortable: true,

        },
        {
            name: 'Department',
            selector: (row: any) => row.department,
            sortable: true,

        },
        {
            name: 'Salary',
            selector: (row: any) => row.salary,
            sortable: true,

        },
        {
            name: 'City',
            selector: (row: any) => row.city,
            sortable: true,
        },
        {
            name: 'District',
            selector: (row: any) => row.district,
            sortable: true,
        },
        {
            name: 'Pincode',
            selector: (row: any) => row.pincode,
            sortable: true,
        }
    ]

    return (
        <div>
            <DataTable
                columns={columns}
                data={tableJsonData}
                selectableRows
                pagination
            />
            {/* <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>City</th>
                        <th>District</th>
                        <th>Pincode</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableJsonData.map((key: empObjType) =>
                            <tr>
                                <td>{key.id}</td>
                                <td>{key.name}</td>
                                <td>{key.age}</td>
                                <td>{key.department}</td>
                                <td>{key.salary}</td>
                                <td>{key.address.city}</td>
                                <td>{key.address.district}</td>
                                <td>{key.address.pincode}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table> */}
        </div>
    );
}

export default TableComponent;