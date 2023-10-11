import React from 'react'
import ReactDOM from 'react-dom'

// JSX中使用JavaScript表达式
const name = 'lily'
const age = 18
const sayHi = () => 'hi~'
const isLoading = false

//条件表达式
const loading = () => {
    // return isLoading ? <h1>loading</h1> : <h1>loaded</h1>
    return isLoading && <h1>loading</h1>
}

const title = (
    <div>
        <h1 className="title">
            Hello, JSX! 姓名：<span>{name}</span> 年龄：<span>{age}</span>
        </h1>
        <p>{1}</p>
        <p>{'a'}</p>
        <p>{2+2}</p>
        <p>{3 > 5 ? 'yes' : 'no'}</p>
        <p>{3 > 5 ? 'yes' : 'no'}</p>
        <p>{sayHi()}</p>
        {loading()} 
    </div>

)



ReactDOM.render(title, document.getElementById('root'))