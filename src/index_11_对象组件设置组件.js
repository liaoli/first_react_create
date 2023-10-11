import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
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

// 事件绑定
function App() {

    function handleClick() {
        console.log('我被点击了啊')
    }

    return (
        <div>
            <button onClick={handleClick}>点击我</button>
        </div>
    )
}

class Parent extends React.Component {

    handleClick(e) {

        e.preventDefault();
        
        console.log('百度一下被点击了')
    }

    render() {
        return (
            <div>
                <a onClick={this.handleClick} href="https://www.baidu.com">百度一下</a>
                <App />
            </div>
        )
    }
}



// ReactDOM.render(<App/>, document.getElementById('root')) //old

//new function
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Parent />)
