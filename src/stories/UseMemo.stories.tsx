import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "UseMemo"
}
export const DificaltCountingExample = () => {
    const [a, setA] = useState<number>(2)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return <>
        <input value={a} onChange={(e) => {
            setA(Number(e.currentTarget.value))
        }}/>
        <input value={b} onChange={(e) => {
            setB(+e.currentTarget.value)
        }}/>
        <hr/>
        <div>
            Result for a:{resultA}
        </div>
        <div>
            Result for b:{resultB}
        </div>
    </>
}

const SecretUsers = (props: { users: Array<string> }) => {
    console.log("Users")
    return <div>
        {props.users.map((t, i) => <div key={i}>{t}</div>)}
    </div>
}
const Users = React.memo(SecretUsers);


export const HelpsToReactMemo = () => {
    console.log("Helps")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dima", "Alex", 'Sasha'])
    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
        <Users users={users}/>
    </>
}
export const LikeUseCallBack = () => {
    console.log("LikeUseCallBack")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", 'Redux', "CSS"])

    const newArray=useMemo(()=>{
        const newArray=books.filter(u=>u.toLowerCase().indexOf('a')>-1)
        return newArray
    },[books])

const memorazedAddBook=useMemo(()=>{
    return ()=>{
        const newBooks=[...books,'HTML'+ new Date().getTime()]
        setBooks(newBooks)
    }
},[books])
const memorazedAddBook2=useCallback(()=>{
    const newBooks=[...books,'HTML'+ new Date().getTime()]
    setBooks(newBooks)},[books])

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
        <Book books={newArray} addBooks={memorazedAddBook2}/>
    </>
}
type BookSecretPropsType={ books: Array<string>; addBooks:()=>void }
const BooksSecret = (props: BookSecretPropsType) => {
    console.log("BooksUsers")
    return <div>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
}
const Book = React.memo(BooksSecret);