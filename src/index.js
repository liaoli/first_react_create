import React from 'react'
import ReactDOM from 'react-dom'
import './context.css'
import PropTypes from 'prop-types'


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

// 添加 props 校验
App.propTypes = {
    colors: PropTypes.array,
    name: PropTypes.string,
    age: PropTypes.number,
    fn: PropTypes.func.isRequired,// 必填项
    filter: PropTypes.shape({// 对象校验
        area: PropTypes.string,
        pricr: PropTypes.number
    })
}

// ReactDOM.render(<App > <div> 我是子节点</div></App>, document.getElementById('root'))
ReactDOM.render(<App colors={['red','blue']}  name={['张三','李四']} age="12"> <div> 我是子节点</div></App>, document.getElementById('root'))