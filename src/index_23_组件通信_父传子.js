import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Child = (props) => {
    return (
        <div>
            <h1>收到来自父组件的数据：{props.data} and {props.count}</h1>
        </div>
    )
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

    render() {
        console.log("render", this.props)
        this.props.fn()
        return (
            <div>
                <h1 className="title">
                    Hello, I'm a Class component!
                    {this.props.tag}
                </h1>

                <Child {...this.state} />
                <button onClick={this.add}>increment</button>
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
