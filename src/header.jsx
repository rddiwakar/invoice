import React from "react";

function header() {
    return (
        <>
         <div className="header">
             <div>
                 <h1>Invoices</h1>
                 <p>There are 7 total invoices</p>
             </div>
             <div className="list">
                 <li>filter by status</li>
                 <li><button>new invoices</button></li>
             </div>
         </div>
        </>
    )
}
export default header