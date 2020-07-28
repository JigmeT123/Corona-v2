import React from 'react'
import numeral from 'numeral'
function Table({countries}) {
       return(
           <div className="table">
               <th>
                   <td>Country</td>
                   <td>Total Cases</td>
               </th>
               {countries.map( ({country, cases}) => (
                   <tr>
                       <td>{country}</td>
                       <td>
               <strong>{numeral(cases).format('0.0a')}</strong>
                       </td>
                   </tr>
               ))}
           </div>
       );
}

export default Table
