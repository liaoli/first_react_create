import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import './css/index.css'
// 函数组件
function Hello() {
    return (
        <h1 className="title">
            Hello, I'm a Function component!
        </h1>
    )
}





// ReactDOM.render(title, document.getElementById('root')) //old

//new function
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Hello/>)
