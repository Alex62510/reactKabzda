import React, {KeyboardEvent, useEffect, useState} from "react";
import s from './Select.module.css'

export type ItemType = {
    title: string
    value: string
}

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItems = props.items.find(i => i.value === props.value)
    const hoveredItems = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            console.log("hi")
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const nextPretendentElemen = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (nextPretendentElemen) {
                        props.onChange(nextPretendentElemen.value)
                        return
                    }
                }
            }
            if(!selectedItems){
                props.onChange(props.items[0].value)
            }
        }
        if (e.key==="Enter" || e.key==="Escape"){
            setActive(false)
        }
    }


    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItems && selectedItems.title}</span>
                {active &&
                    <div className={s.items}>
                        {props.items.map(t =>
                            <div className={s.item + " " + (hoveredItems === t ? s.selected : "")}
                                 onMouseEnter={() => setHoveredElementValue(t.value)}
                                 key={t.value}
                                 onClick={() => onItemClick(t.value)}
                            > {t.title}
                            </div>)}
                    </div>}
            </div>
        </>

    )
}