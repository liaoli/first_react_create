import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import './css/index.css'
// JSX中使用JavaScript表达式 css



const title = (
    <h1 className="title">
        Hello, JSX! <span>哈哈</span>
    </h1>
)

// ReactDOM.render(title, document.getElementById('root')) //old

//new function
const container = document.getElementById('root')
const root = createRoot(container)
root.render(title)
