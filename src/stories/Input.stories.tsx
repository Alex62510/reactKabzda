import React, {ChangeEvent, FormEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


export default {
    title: 'input',
}

export const UncontrolledInput = () => <input/>
export const UncontrolledInputWithTrakingValue = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actialValue = e.currentTarget.value
        setValue(actialValue)
    }
    return <><input value={value} onChange={onChange}/>-{value}</>
}
export const UncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        -actial value: {value}</>

}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    return <input value={parentValue} onChange={(e)=>{setParentValue(e.currentTarget.value)}}/>
}
export const ControlledChekBox = () => {
    const [parentValue, setParentValue] = useState(true)
    const change = (e:ChangeEvent<HTMLInputElement>)=>{setParentValue(e.currentTarget.checked)}
    return <input type="checkbox" checked={parentValue}  onChange={change}/>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string|undefined>(undefined)
    const change = (e:FormEvent<HTMLOptionElement>)=>{setParentValue(e.currentTarget.value)}
    return <select>
        <option value={parentValue} onChange={change}>none</option>
        <option value={1}>Minsk</option>
        <option value={2}>Moskow</option>
        <option value={3}>Kiev</option>
    </select>
}


export const ControlledInputWithFixedValue = () => <input value={'It-inkybator.my'}/>

