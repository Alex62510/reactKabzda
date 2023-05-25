import React, {useEffect, useState} from "react";

export default {
    title: "UseEffect demo"
}

export const SampleExample = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log("useEffect only first render")
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log("useEffect first render end every counter change")
        document.title = counter.toString()
    }, [counter])


    return <>

        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
    </>
}

export const SatTimeOutExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("SatTimeOutExample")


    useEffect(() => {
        setInterval(() => {

            let a = new Date

            console.log(a.getSeconds())
        }, 1000)
    }, [])
    return <>
        counter: {counter}
        {/*<button onClick={() => {setCounter(counter + 1)}}>+</button>*/}

    </>
}
export const ResetTimeOutExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("ResetTimeOutExample")


    useEffect(() => {

            console.log("effect occured")

    }, [])
    return <>
        counter: {counter}
        {/*<button onClick={() => {setCounter(counter + 1)}}>+</button>*/}

    </>
}