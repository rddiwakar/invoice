import React from "react" ;
export default function Section({invoiceName,date,userName,bill,status}) {
    return (
        <>
            <div className = "section">
                <li>{invoiceName}</li>
                <li>{date}</li>
                <li>{userName}</li>
                <li>{bill}</li>
                <li>{status}</li>
            </div>
        </>
    )
}