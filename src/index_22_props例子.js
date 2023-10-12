import React from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

class Hello extends React.Component {
    constructor(props) {
        super(props)
        console.log("constructor",this.props)
    }

    render() {
        console.log("render",this.props)
        this.props.fn()
        return (
            <div>
                <h1 className="title">
                    Hello, I'm a Class component!
                    {this.props.tag}
                </h1>
                
                <App title={this.props.title} />
            </div>

        )
    }
}
// 渲染组件
ReactDOM.render(<Hello 
    title="Hello, world!"
    age={19}
    colors={["red","green","blue"]}
    fn={()=>{console.log("hello")}}
    tag={<span>hello I am a span</span>}
 />, document.getElementById('root'))
