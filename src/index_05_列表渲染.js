import React from 'react'
import ReactDOM from 'react-dom'

// JSX中使用JavaScript表达式

// 列表渲染

const list = [
    {id:1, name:'lily'},
    {id:2, name:'tim'},
    {id:3, name:'jim'},
]

const student = (
    <ul>
        {
            list.map(item => (
                <li key={item.id}>{item.name}</li>
            ))
        }
    </ul>
)

ReactDOM.render(student, document.getElementById('root'))