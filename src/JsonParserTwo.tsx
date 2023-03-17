import React, { useState } from 'react'
import { forEachChild } from 'typescript';

const JsonParserTwo = () => {

    const [head, setHead] = useState('');
    const data = {
        "header": {
            "firstName": ["Online", "ShopApp"],
            "lastName": ["Online", "ShopApp"],
            "gender": ["Online", "ShopApp"],
            "age": ["16.59", "8.41"]
        }
        ,
        "address": {
            "streetAddress": ["161", "841"],
            "city": ["Noida", "Bangalore"],
            "state": ["UP", "MP"],
            "postalCode": ["201306", "201308"]
        }
        ,
        "phoneNumbers": [
            {
                "type": "home",
                "number": "8377834089"
            },
            null
        ]
    }

    const recurse = () => {
        let values = {} as any;
        var ansValues = {} as any;
        values = data;
        var heads;
        var bodys;
        var kens;
        for (let key in values) {
            heads = key;

            bodys = values[key];

            for (let key in bodys) {
                (document.getElementById('tb') as HTMLInputElement).innerHTML +=
                    `<tr id=${key}>
          <td>                              
            ${key}  
          </td>
          </tr>
         `
                kens = bodys[key];
                for (let ans in kens) {
                    (document.getElementById(key) as HTMLInputElement).innerHTML +=
                        `
          <td >                              
           ${kens[ans]}  
          </td>
         `
                }
            }
        }
    }




    return (
        <div>
            <button style={{ marginLeft: "40%" }} onClick={recurse}> getData on Table</button>
            <table id='tb'>
                <tr >
                    <th>KEY</th>
                    <th>ATG VALUE</th>
                    <th>NGC VALUE</th>
                </tr>
            </table>
        </div>
    )
}

export default JsonParserTwo