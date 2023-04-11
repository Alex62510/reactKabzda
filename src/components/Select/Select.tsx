import React from "react";
import {RatingPropsType} from "../Rating/Rating";

export type ItemType={
    title:string
    value:any
}

export type SelectPropsType = {
    value: any
    onChange: () => void
    items:ItemType[]
}

export function Select(props: SelectPropsType) {

    return (
        <div>
            <div>{}</div>
            {props.items.map(t=><div>{t.title}</div>)}
        </div>
    )
}