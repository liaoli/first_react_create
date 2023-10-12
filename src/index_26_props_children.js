import React from 'react'
import ReactDOM from 'react-dom'
import './context.css'

// Context provider



const App = (props) => {

    console.log("render",props)
    return (
        <div>
            <h1 className="title">
                组件标签的子节点：
            </h1>
            {props.children}
        </div>
    )
}

// ReactDOM.render(<App > <div> 我是子节点</div></App>, document.getElementById('root'))
ReactDOM.render(<App > <div> 我是子节点</div></App>, document.getElementById('root'))