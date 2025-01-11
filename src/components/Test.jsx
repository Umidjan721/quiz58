import React, {useEffect, useState} from "react";

export const Test = ()=> {
    const [count, setcount]= useState(10)
    const [count2, setcount2]= useState(10)
    useEffect(()=>{
        console.log(count2);
    }, [count])
    return(
        <div>
            <h1>{count}</h1>
            <h1>{count2}</h1>
            <div>
                <button onClick={()=>setcount(count+1)}>increment</button>
                <button onClick={()=>setcount(count-1)}>decriment</button>
            </div>
            <div>
                <button onClick={()=>setcount2(count2+1)}>increment</button>
                <button onClick={()=>setcount2(count2-1)}>decriment</button>
            </div>
        </div>
    );
};