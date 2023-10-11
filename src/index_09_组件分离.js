import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import Hello from './component/Hello';
// 创建类组件
// class Hello extends React.Component {
//     render() {
//         return (
//             <h1 className="title">
//                 Hello, I'm a Class component!
//             </h1>
//         )
//     }
// }





// ReactDOM.render(title, document.getElementById('root')) //old

//new function
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Hello/>)
