import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Child = (props) => {

    const changeData = () => {
        props.fn({data:'我是子组件的数据', count: 19})
    }
    
    return (
        <div>
            <h1>收到来自父组件的数据：{props.data} and {props.count}</h1>
            <button onClick={changeData}>change data</button>
        </div>
    )
}

class Child2 extends React.Component {
    
    state = {
        name: '我是子组件的数据',
        age: 19
    }

    callback = () => {
        this.props.fn({data: this.state.name, count: this.state.age})
    }

    render() {
        return (
            <div>
                <h1>我孩子组件</h1>
                <button onClick={this.callback}>change data</button>
            </div>
        )
    }
}


class Parent extends React.Component {
    constructor(props) {
        super(props)
        console.log("constructor", this.props)

        this.state = {
            data: '我是父组件的数据',
            count: 0
        }
    }
    add = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    changeData = (childData) => {
        this.setState({
            ...childData
        })
    }

    render() {
        console.log("render", this.props)
        this.props.fn()
        return (
            <div>
                <h1 className="title">
                    Hello, I'm a Class component!
                    {this.props.tag}
                </h1>

                <Child {...this.state} fn={this.changeData}/>
                <button onClick={this.add}>increment</button>
                <Child2 fn={this.changeData}/>
            </div>

        )
    }
}
// 渲染组件
ReactDOM.render(<Parent
    title="Hello, world!"
    age={19}
    colors={["red", "green", "blue"]}
    fn={() => { console.log("hello") }}
    tag={<span>hello I am a span</span>}
/>, document.getElementById('root'))
