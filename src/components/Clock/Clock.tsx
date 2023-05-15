import React, {useEffect, useState} from "react";
export type PropsType={

}
const func2dString=(num:number)=> num<10 ? "0" + num: num
export const Clock: React.FC<PropsType>=(props)=>{
    const [date,setDate]=useState(new Date())
    useEffect(()=>{
       const intervalId= setInterval(()=>{setDate(new Date())},1000)
        return ()=>{
            clearInterval(intervalId)
        }
    },[])
    return <div>
        <span>{func2dString(date.getHours())}</span>
        :
        <span>{func2dString(date.getMinutes())}</span>
        :
        <span>{func2dString(date.getSeconds())}</span>
    </div>
}