import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';

// state的基本使用

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.add2 = this.add.bind(this)
    }

    // state = {
    //     count: 100,
    //     test: 'test'
    // }

    add() {
        console.log('我被点击了啊',this)
        this.setState({
            count: this.state.count + 1
        })
    }

    add2() {
        console.log('我被点击了啊',this)
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h1>当前计数:{this.state.count}</h1>
                <button onClick={() => this.add2()}>+1</button>
                <button onClick={this.add2}>+1</button>
            </div>
        )
    }

}
// ReactDOM.render(<App/>, document.getElementById('root')) //old

//new function
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
