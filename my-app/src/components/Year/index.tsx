"use client";
import React, { useState, useEffect } from "react";

const Year = () => {

    const [date, setdate] = useState(new Date());
    const [year, setYear] = useState("");
    
    useEffect(() => {
        setYear("" + date.getFullYear())
    })

    return (
        <>  
            {year}
        </>
    )
}

export default Year;