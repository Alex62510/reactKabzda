import React, {ChangeEvent, useRef, useState} from 'react';




export default {
  title: 'input',
}



export const UncontrolledInput = () =><input/>
export const UncontrolledInputWithTrakingValue = () => {
  const [value, setValue]=useState('')
  const onChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const actialValue=e.currentTarget.value
    setValue(actialValue)
  }
  return <><input value={value} onChange={onChange}/>-{value}</>
}
export const UncontrolledInputByButtonPress = () => {
  const [value, setValue]=useState('')
  const inputRef=useRef<HTMLInputElement>(null)

const save =()=>{
  const el=inputRef.current as HTMLInputElement
  setValue(el.value)
}
  return <><input ref={inputRef}/><button onClick={save}>save</button>-actial value: {value}</>

}
export const ControlledInputWithFixedValue = () => <input value={'It-inkybator.my'}/>

