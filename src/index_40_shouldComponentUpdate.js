import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    state = {
        count: 0
    }

    render() {
        console.log("parent：render")
        return (
            <div>
                <h1>父组件:{this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: Math.floor(Math.random() * 3)
                    })
                }}>+1</button>
                <Child {...this.state}/>
            </div>
        )
    }
}

class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    shouldComponentUpdate(nextProps, nextState) {

        console.log("Child props：shouldComponentUpdate", this.props, nextProps)
        console.log("Child state：shouldComponentUpdate", this.state, nextState)

        //比较props
        if(this.props.count !== nextProps.count) {
            return true
        }

        //比较state
        if (this.state !== nextState) {
            return true
        }

        return false
    }
    render() {
        console.log("Child：render")
        return (
            <div>
                <h1>子组件：{this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>+1</button>
                <h2>父组件传过来的数据：{this.props.count}</h2>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
