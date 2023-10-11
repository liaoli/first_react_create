import React from 'react'
import ReactDOM from 'react-dom'

// JSX中使用JavaScript表达式
const name = 'lily'
const age = 18
const title = (
    <h1 className="title">
        Hello, JSX! 姓名：<span>{name}</span> 年龄：<span>{age}</span>
    </h1>
)

ReactDOM.render(title, document.getElementById('root'))