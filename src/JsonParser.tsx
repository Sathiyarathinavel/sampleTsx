import React, { useState } from 'react'
import DataTable from 'react-data-table-component';

const JsonParser = () => {
    const [tableData, setTable] = useState() as any;
    const data = {
        "header": {
            "firstName": "{'Online', 'ShopApp'}",
            "lastName": "{'Online', 'ShopApp'}",
            "gender": "{'Online', 'ShopApp'}",
            "age": "{16.59, 8.41}"
        },
        "address": {
            "streetAddress": "{161, 841}",
            "city": "{'Noida', 'Bangalore'}",
            "state": "{'UP', 'MP'}",
            "postalCode": "{'201306', '201308'}"
        },
        "phoneNumbers": [
            {
                "type": "home",
                "number": "8377834089"
            },
            null
        ]
    }

    console.log(data.header);

    const click = () => {
        // let table = '<table>';

        // for (const key in data) {
        //     table += '<td>';

        //     if (typeof data[key] === 'object') {
        //         if (Array.isArray(data[key])) {
        //             data[key].forEach((arrayData: any) => {
        //                 if (typeof arrayData === 'object') {
        //                     table += arrayData;
        //                 } else {
        //                     table += `${arrayData}`;
        //                 }
        //             });
        //         } else {
        //             table += data[key];
        //         }
        //     } else {
        //         table += `${data[key]}`;
        //     }

        //     table += '</td>';
        // }

        // table += '</table>';

        // setTable(table);
    }

    return (
        <div>
            <p>This is dynamic table</p>
            {/* <DataTable
                columns={columns}
                data={json}
                pagination
            /> */}
            <button onClick={click}>Clickme</button>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Key</th>
                        <th>ATG Value</th>
                        <th>NGC Value</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
            <div>{tableData}</div>
        </div>
    )
}

export default JsonParser;


