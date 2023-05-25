import React from "react";
import {ClockViewPropsType} from "./Clock";
export const func2dString = (num: number) => num < 10 ? "0" + num : num
export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{func2dString(date.getHours())}</span>
        :
        <span>{func2dString(date.getMinutes())}</span>
        :
        <span>{func2dString(date.getSeconds())}</span>
    </>
}