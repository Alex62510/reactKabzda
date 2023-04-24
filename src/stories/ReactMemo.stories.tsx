import React, {useState} from "react";

export default {
    title: "React.memo demo"
}
const NewMesagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const SecretUsers = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((t, i) => <div key={i}>{t}</div>)}
    </div>
}
const Users=React.memo(SecretUsers);


export const Example1 = () => {
    const [counter,setCounter]=useState(0)
    const [users,setUsers]=useState(["Dima", "Alex", 'Sasha'])
    return <>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        <NewMesagesCounter count={counter}/>
        <Users users={users}/>
    </>
}