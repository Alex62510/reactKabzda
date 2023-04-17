import React from "react";
import s from './Select.module.css'

export type ItemType={
    title:string
    value:any
}

export type SelectPropsType = {
    value?: any
    onChange: () => void
    items:ItemType[]
}

export function Select(props: SelectPropsType) {
const selectedItems = props.items.find(t=>t.value===props.value)
    return (
        <>
            <select>
                <option value="1">Minsk</option>
                <option value="2">Moskow</option>
                <option value="3">Kiev</option>
            </select>
            <div className={s.select + " " + s.active}>
                <h3>{selectedItems && selectedItems.title}</h3>
                <div className={s.items}>
                    {props.items.map(t=><div key={t.value}>{t.title}</div>)}
                </div>
            </div>
        </>

    )
}