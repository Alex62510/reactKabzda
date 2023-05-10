import React, {useState} from "react";

export default {
    title: "UseState demo"
}

export const Example1 = () => {
    const [counter, setCounter] = useState(0)

    const changer =()=>counter + 1
    return <>
        <button onClick={() => {setCounter(changer)}}>+</button>
        {counter}
    </>
}